import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
  public hasValue=false;
  public value1="Class Binding";
  public classExpression=[
    'class1','class2','class3'
] 
// public classExpression={class1:true,class2:false,class3:true}
/* public messageClasses={
  "class1":this.hasValue,
  "class2":"!this.hasValue",
  "class3":"this.hasValue"
}*/
public titleStyle={
  color:"blue",
  fontStyle:"italic"
}
public highlightColor="orange";
  public value2="page";
  public isDisabled=false;
  public myId="testId";
  public name="guys";
  public greeting="";
  public siteURL=window.location.href;
  public name1="";
  public displayName=false;
  public color="red";
  public colors=["red","green","blue","yellow","pink"];
  onClick(){
 //   onClick(event){
    console.log("This is for event binding.");
   //  console.log(event);
    this.greeting="This is event binding example.";
  }

   @Input('parentData') public nameValue="";
   @Output() public childEvent=new EventEmitter();

   fireEvent(){
    this.childEvent.emit('Hey Welcome to my page.');
   }
   
   /*logMessage(value:any){
    console.log(value);
   }*/
  
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name+ "!";
  }

}
