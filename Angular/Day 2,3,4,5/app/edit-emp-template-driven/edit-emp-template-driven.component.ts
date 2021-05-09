import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { Skill } from '../skill';
import { Employees } from './employee';
import { Employee } from '../employee';
@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee = new Employees(1, 'Vikrant', 30000, 'yes', 1, 'FSE');
  department: Department = {
    id: 1,
    name: 'FSE'
  };
  
  departments: Department[] = [
    { id: 1, name: 'Computer Science' },
    { id: 2, name: 'Mechanical' },
    { id: 3, name: 'Civil' },
  ];

  skill: Skill[] = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'Spring Boot' }
  ];
  emp: Employee = {
    id: 1,
    name: 'Yash',
    salary: 100000,
    isPermanent: true,
    department_id: this.department.id,
    department_name: this.department.name,
    skillArray: this.skill,
    dob: new Date('1999-05-04')
  }
  
  onSubmit() {
    console.log(this.emp);
  }
}
