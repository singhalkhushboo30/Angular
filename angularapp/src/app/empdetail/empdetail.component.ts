import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  public emp:any;
  public errorMessage='';
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
     /* this.emp=this._employeeService.getEmployees();*/
     this._employeeService.getEmployees()
         .subscribe(data => this.emp=data,
          error => this.errorMessage=error);
  }
  

}
