import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

   projects: Project[] = [
  {
    id: 0,
    name: 'TaskFlow – Project Management',
    summary: 'A task management platform for teams to organise projects and track progress.',
    description: 'A full-stack project management application featuring task creation, assignment, deadlines, status tracking and team collaboration.',
    projectLink: 'https://github.com/example/taskflow',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS],
    pictures: []
  },
  {
    id: 1,
    name: 'WeatherWise',
    summary: 'A weather dashboard providing real-time weather updates and forecasts.',
    description: 'A responsive weather application that consumes external APIs to display current weather conditions, hourly forecasts and location-based weather information.',
    projectLink: 'https://github.com/example/weatherwise',
    tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.NODEJS],
    pictures: ["src\assets"]
  },
  {
    id: 2,
    name: 'DevConnect – Developer Community',
    summary: 'A social platform where developers can share projects and connect.',
    description: 'A developer-focused community platform featuring user profiles, posts, comments, likes and technology-based interest groups.',
    projectLink: 'https://github.com/example/devconnect',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.ASPNET, Tag.CSHARP],
    pictures: []
  },
  {
    id: 3,
    name: 'ExpenseTracker',
    summary: 'A personal finance application for managing income and expenses.',
    description: 'A financial tracking application that allows users to record transactions, categorise expenses, set monthly budgets and visualise spending patterns.',
    projectLink: 'https://github.com/example/expense-tracker',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.JAVA],
    pictures: []
  },
  {
    id: 4,
    name: 'CodeSnippet Manager',
    summary: 'A centralised library for storing and organising reusable code snippets.',
    description: 'A lightweight developer productivity tool with syntax highlighting, searchable snippets, categorisation and code-sharing functionality.',
    projectLink: 'https://github.com/example/code-snippet-manager',
    tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.PYTHON],
    pictures: []
  },
  {
    id: 5,
    name: 'InventoryPro',
    summary: 'An inventory management system for tracking products and stock levels.',
    description: 'A business-oriented inventory platform with product management, stock alerts, supplier records, reporting and role-based access control.',
    projectLink: 'https://github.com/example/inventory-pro',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.ASPNET, Tag.CSHARP],
    pictures: []
  },
  {
    id: 6,
    name: 'AI Document Assistant',
    summary: 'An intelligent assistant that answers questions about uploaded documents.',
    description: 'A document intelligence application using retrieval-augmented generation (RAG) to process uploaded files, generate embeddings and provide context-aware answers.',
    projectLink: 'https://github.com/example/ai-document-assistant',
    tags: [Tag.PYTHON, Tag.REACT, Tag.NODEJS],
    pictures: []
  },
  {
    id: 7,
    name: 'Java Banking API',
    summary: 'A RESTful banking API for managing accounts and financial transactions.',
    description: 'A backend banking service supporting account creation, balance enquiries, deposits, withdrawals, transaction histories and validation.',
    projectLink: 'https://github.com/example/java-banking-api',
    tags: [Tag.JAVA, Tag.ASPNET],
    pictures: []
  },
  {
    id: 8,
    name: 'EventHub',
    summary: 'An event discovery and booking platform for local communities.',
    description: 'A full-stack event management application where users can discover events, reserve tickets, manage bookings and receive event notifications.',
    projectLink: 'https://github.com/example/eventhub',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS],
    pictures: []
  },
  {
    id: 9,
    name: 'DevOps Monitor',
    summary: 'A dashboard for monitoring application health and deployment activity.',
    description: 'A monitoring dashboard that aggregates application metrics, deployment status, service availability and operational logs into a centralised interface.',
    projectLink: 'https://github.com/example/devops-monitor',
    tags: [Tag.REACT, Tag.TYPESCRIPT, Tag.PYTHON],
    pictures: []
  }
];

  constructor() { }

  getProjects(){
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id );

    if(project === undefined){
      throw new TypeError('There is no project that matches the id: ' + id);
    }

      return project;
  }

  getProjectsByFilter(filterTags: Tag[]): Project[] {

    if (filterTags.length === 0) {
        return this.getProjects();
    }

    return this.projects.filter(project =>
        project.tags.some(projectTag =>
            filterTags.includes(projectTag)
        )
    );
  }
}
