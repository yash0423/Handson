import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../employee.model';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {
  empForm!: FormGroup;

 // name = new FormControl('Y');
 // name = new FormControl('');
 //name = new FormControl('this.employee.firstName');
  employee: Employee  = {firstName: "Yash",
  lastName: "Saini",
  salary: 100000,
  id: 3,
  permanentStaff: "Yes",
  deptId: 1516,
  deptName: "CSE",
  dob: new Date("04-05-1999")
  };
  skills: Skill[] = [{id: 1, name: "HTML"},
  {id: 2, name: "CSS"},
  {id: 3, name: "JS"}]
  

  deptName: { id: number; name: string; }[];

  
  constructor() { 
    this.deptName = [

      { id: 1, name: "Payroll" },
      
      { id: 2, name: "Internal" },
      
      { id: 3, name: "HR" }
      
      ];
  }
 
  ngOnInit(): void {
    this.empForm = new FormGroup({

      'name' : new FormControl(this.employee.firstName, [
      
      Validators.required,
      
      Validators.minLength(4),
      
      Validators.maxLength(20)
      
      ])
      
      });
  }
  

  get name() { return this.empForm.get('name')};
}
