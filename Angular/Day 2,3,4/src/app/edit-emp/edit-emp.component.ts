import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { Skill } from '../skill.model';


@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  deptName: { id: number; name: string; }[];
  result: string | undefined;

  constructor() { 
    this.deptName = [

      { id: 1, name: "Payroll" },
      
      { id: 2, name: "Internal" },
      
      { id: 3, name: "HR" }
      
      ];
  }

  ngOnInit(): void {
  }

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

  onSubmit(){
    this.result="Submitted Successfully!!";
  }
}
