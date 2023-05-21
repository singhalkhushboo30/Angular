import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(){}

  
  onSubmit(contactForm:any){
    console.log(contactForm.value);
    contactForm.reset();
  }
  
  loginArray:any={};
  saveData(){
    console.log(this.loginArray);
    // localStorage.setItem('name','Ishita');
    // localStorage.setItem('value',JSON.stringify(this.loginArray.firstname));
    localStorage.setItem('value',JSON.stringify(this.loginArray));
   
  }

  
removeData(){
  localStorage.removeItem('value');
}
  ngOnInit():void{
  }

}
