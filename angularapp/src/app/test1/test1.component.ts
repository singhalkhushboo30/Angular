import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  public date=new Date();
  public name="Welcome to my page.";
  public person={
    "Mahima":"Engineer",
    "Ishani":"Accountant",
    "Arpit":"Manager"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
