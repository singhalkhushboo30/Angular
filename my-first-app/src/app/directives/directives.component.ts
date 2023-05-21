import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  //ngFor Directive
  displayValue:boolean=false;
  isValid:boolean=true;

  // ngSwitch Directive
  color:string='red';
  constructor() { }

  ngOnInit(): void {
  }

}
