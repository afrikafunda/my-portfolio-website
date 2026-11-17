export class Tag {
    // Languages
    static readonly JAVA = new Tag(
        'Java', 'orange', 'assets/skills/Java_Logo.svg'
    );

    static readonly TYPESCRIPT = new Tag(
        'TypeScript', 'darkred', 'assets/skills/typescript_logo.jpg'
    );

    static readonly JAVASCRIPT = new Tag(
        'JavaScript', 'orange', 'assets/skills/javascript_developer_logo.jpg'
    );

    static readonly PYTHON = new Tag(
        'Python', 'pink', 'assets/skills/3840px-Python-logo-notext.svg.webp'
    );

    static readonly CSHARP = new Tag(
        'C#', 'green', 'assets/skills/Csharp_Logo.png'
    );

    static readonly HTML = new Tag(
        'HTML5', 'orange', 'assets/skills/HTML5_logo_and_wordmark.svg%20(1).webp'
    );

    static readonly CSS = new Tag(
        'CSS3', 'blue', 'assets/skills/Official_CSS_Logo.svg'
    );


    // Frontend
    static readonly ANGULAR = new Tag(
        'Angular', 'red', 'assets/skills/angular_gradient.png'
    );

    static readonly REACT = new Tag(
        'React', 'blue', 'assets/skills/3840px-React-icon.svg.webp'
    );


    // Backend & Frameworks
    static readonly NODEJS = new Tag(
        'Node.js', 'brown', 'assets/skills/3840px-Node.js_logo_2015.svg.webp'
    );

    static readonly NESTJS = new Tag(
        'NestJS', 'red', 'assets/skills/3840px-NestJS.svg.webp'
    );

    static readonly ASPNET = new Tag(
        '.NET', 'purple', 'assets/skills/Microsoft_.NET_logo.svg.webp'
    );

    static readonly SPRING_BOOT = new Tag(
        'Spring Boot', 'green', 'assets/skills/Spring_Boot.svg.webp'
    );

    static readonly FLASK = new Tag(
        'Flask', 'dark', 'assets/skills/Flask.png'
    );


    // Databases & ORM
    static readonly MONGODB = new Tag(
        'MongoDB', 'green', 'assets/skills/mongodb-icon-2.svg'
    );

    static readonly SQL = new Tag(
        'SQL', 'blue', 'assets/skills/Sql_data_base_with_logo.svg'
    );

    static readonly PRISMA = new Tag(
        'Prisma', 'dark', 'assets/skills/prisma.png'
    );


    // DevOps & Cloud
    static readonly DOCKER = new Tag(
        'Docker', 'blue', 'assets/skills/docker.jpg'
    );

    static readonly KUBERNETES = new Tag(
        'Kubernetes', 'blue', 'assets/skills/Kubernetes_logo_without_workmark.svg'
    );

    static readonly AZURE = new Tag(
        'Microsoft Azure', 'blue', 'assets/skills/3840px-Microsoft_Azure_Logo.svg.webp'
    );

    static readonly ORACLE_CLOUD = new Tag(
        'Oracle Cloud', 'red', 'assets/skills/oracle-cloud.png'
    );


    // AI & LLM Technologies
    static readonly LANGCHAIN = new Tag(
        'LangChain', 'green', 'assets/skills/lanchain.jpg'
    );

    static readonly LANGGRAPH = new Tag(
        'LangGraph', 'purple', 'assets/skills/langgraph.png'
    );

    static readonly MCP = new Tag(
        'Model Context Protocol', 'dark', 'assets/skills/Model_Context_Protocol_logo.svg'
    );

    static readonly CREWAI = new Tag(
        'CrewAI', 'blue', 'assets/skills/crewai-logo-png_seeklogo-680089.png'
    );


    private constructor(
        private readonly key: string,
        public readonly color: string,
        public readonly imageUrl: string
    ) {}

    toString(): string {
        return this.key;
    }
}