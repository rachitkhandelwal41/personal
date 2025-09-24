// projects.component.ts
import { Component, OnInit } from '@angular/core';

import { GetData1 } from '../../service/get-data1';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  imports:[CommonModule]
})
export class Projects implements OnInit {
  projects: any = [];

  constructor(private projectDataService: GetData1) {}

  ngOnInit(): void {
    this.projects = this.projectDataService.getProjects();
  }
}
