
cat > export-project.sh <<'EOF'
#!/usr/bin/env bash

set -uo pipefail

OUTPUT="angular-project-context.txt"
SCRIPT_NAME="$(basename "$0")"

echo "Starting Angular project export..."

# Avoid exporting into itself
: > "$OUTPUT"

write() {
    printf '%s\n' "$*" >> "$OUTPUT"
}

# Exclusion rules
excluded() {
    local path="${1,,}"

    [[ "$path" == *"/node_modules"* ]] && return 0
    [[ "$path" == *"/.git"* ]] && return 0
    [[ "$path" == *backup* ]] && return 0
    [[ "$path" == *backoup* ]] && return 0

    return 1
}

# Text-based extensions
is_text() {
    case "${1##*.}" in
        ts|js|jsx|tsx|html|css|scss|sass|less|json|md|txt|yml|yaml|xml|svg|sh|py|java|cs|sql|config|properties|gradle|env|gitignore)
            return 0 ;;
        *)
            case "$(basename "$1")" in
                Dockerfile|Makefile|Procfile|LICENSE|NOTICE)
                    return 0 ;;
            esac
            return 1 ;;
    esac
}

write "=================================================="
write "ANGULAR PROJECT EXPORT"
write "Project: $(basename "$PWD")"
write "Generated: $(date)"
write "=================================================="

# Collect files ONCE
echo "Scanning project files..."

mapfile -d '' FILES < <(
    find . \
        \( -type d \( -name node_modules -o -name .git -o -iname '*backup*' -o -iname '*backoup*' \) -prune \) \
        -o -type f -print0
)

TOTAL=${#FILES[@]}

echo "Found $TOTAL files."

# 1. DIRECTORY STRUCTURE
echo "Writing project structure..."

write ""
write "=================================================="
write "1. PROJECT STRUCTURE"
write "=================================================="

find . \
    \( -type d \( -name node_modules -o -name .git -o -iname '*backup*' -o -iname '*backoup*' \) -prune \) \
    -o -print >> "$OUTPUT"

# 2. FILE CONTENTS
echo "Exporting source files..."

write ""
write "=================================================="
write "2. FILE CONTENTS"
write "=================================================="

COUNT=0
EXPORTED=0

for file in "${FILES[@]}"; do

    COUNT=$((COUNT + 1))

    [[ "$file" == "./$OUTPUT" ]] && continue
    [[ "$(basename "$file")" == "$SCRIPT_NAME" ]] && continue

    if is_text "$file"; then

        # Skip files that are likely binary
        if ! LC_ALL=C grep -Iq . "$file" 2>/dev/null; then
            continue
        fi

        write ""
        write "=================================================="
        write "FILE: $file"
        write "=================================================="

        cat "$file" >> "$OUTPUT"
        write ""

        EXPORTED=$((EXPORTED + 1))
    fi

    if (( COUNT % 100 == 0 )); then
        echo "Processed $COUNT / $TOTAL files..."
    fi

done

# 3. SKILLS REFERENCES
echo "Checking skills asset references..."

write ""
write "=================================================="
write "3. SKILLS ASSET REFERENCES"
write "=================================================="

if [[ -d "src/assets/skills" ]]; then
    find src/assets/skills -maxdepth 1 -type f -print >> "$OUTPUT"
else
    write "WARNING: src/assets/skills directory not found."
fi

write ""
write "References found in source files:"

for file in "${FILES[@]}"; do
    [[ "$file" == "./$OUTPUT" ]] && continue
    [[ "$(basename "$file")" == "$SCRIPT_NAME" ]] && continue

    if is_text "$file"; then
        grep -nHiE 'assets/skills/|skills/' "$file" 2>/dev/null |
            sed "s|^|$file:|" >> "$OUTPUT" || true
    fi
done

# 4. SUMMARY
write ""
write "=================================================="
write "4. EXPORT SUMMARY"
write "=================================================="
write "Total files discovered: $TOTAL"
write "Text files exported: $EXPORTED"
write "Excluded: node_modules, .git, backup, backoup"
write "Output: $OUTPUT"
write "Completed: $(date)"

echo ""
echo "=========================================="
echo "EXPORT COMPLETE"
echo "=========================================="
echo "Files discovered: $TOTAL"
echo "Text files exported: $EXPORTED"
echo "Output: $OUTPUT"
echo "Size: $(du -h "$OUTPUT" | cut -f1)"
EOF

chmod +x export-project.sh
bash export-project.sh
