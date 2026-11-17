import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

    projects: Project[] = [];

    filtering: boolean = false;
    isCollapsed: boolean = true;

    // Available technology filters, grouped by category.
    filterGroups = [
        {
            name: 'Languages & Web',
            tags: [
                Tag.JAVA,
                Tag.TYPESCRIPT,
                Tag.JAVASCRIPT,
                Tag.PYTHON,
                Tag.CSHARP,
                Tag.HTML,
                Tag.CSS
            ]
        },
        {
            name: 'Frontend',
            tags: [
                Tag.ANGULAR,
                Tag.REACT
            ]
        },
        {
            name: 'Backend & Frameworks',
            tags: [
                Tag.NODEJS,
                Tag.NESTJS,
                Tag.ASPNET,
                Tag.SPRING_BOOT,
                Tag.FLASK
            ]
        },
        {
            name: 'Databases & ORM',
            tags: [
                Tag.MONGODB,
                Tag.SQL,
                Tag.PRISMA
            ]
        },
        {
            name: 'DevOps & Cloud',
            tags: [
                Tag.DOCKER,
                Tag.KUBERNETES,
                Tag.AZURE,
                Tag.ORACLE_CLOUD
            ]
        },
        {
            name: 'AI & LLM Technologies',
            tags: [
                Tag.LANGCHAIN,
                Tag.LANGGRAPH,
                Tag.MCP,
                Tag.CREWAI
            ]
        }
    ];

    // Tracks the selected state of each technology checkbox.
    selectedTags: Record<string, boolean> = {};

    constructor(
        private titleService: Title,
        private projectService: ProjectsService
    ) {
        this.titleService.setTitle('Afrika Funda - Portfolio');
    }

    ngOnInit(): void {
        this.projects = this.projectService.getProjects();
    }

    filter(): void {
        const filterTags: Tag[] = [];

        // Collect all selected technologies.
        for (const group of this.filterGroups) {
            for (const tag of group.tags) {
                if (this.selectedTags[tag.toString()]) {
                    filterTags.push(tag);
                }
            }
        }

        this.filtering = filterTags.length > 0;

        // Apply filters, or show all projects when none are selected.
        this.projects = this.filtering
            ? this.projectService.getProjectsByFilter(filterTags)
            : this.projectService.getProjects();
    }

    resetFilters(): void {
        this.selectedTags = {};
        this.filtering = false;

        this.projects = this.projectService.getProjects();
    }
}