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
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  filtering : boolean = false;

  isCollapsed: boolean = true;
  typescript: boolean = false; 
  python: boolean = false; 


  constructor(private titleService: Title, private projectService: ProjectsService){
      this.titleService.setTitle('Afrika Funda - Portfolio')
  
    }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.python){
      filterTags.push(Tag.PYTHON);

    }

    if(this.python || this.typescript)
    {
      this.filtering = true;
    }
      else {
      this.filtering = false;
    }

    this.projects =this.projectService.getProjectsByFilter(filterTags);
  }

  resetFilters(){
    // add all projects
    this.typescript = false;
    this.python = false;
    this.filtering = false;


    this.projects = this.projectService.getProjects();
  }
}
