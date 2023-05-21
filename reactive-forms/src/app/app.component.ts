import { Component } from '@angular/core';
// import {FormGroup,FormControl} from '@angular/forms'
import {FormBuilder,Validators} from '@angular/forms'
import {forbiddenNameValidator} from './shared/user-name.validator';
import {PasswordValidator} from './shared/password.validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  get userName(){
    return this.registrationForm.get('userName'); 
  }

  constructor(private fb:FormBuilder){}
    registrationForm=this.fb.group({
      username:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/admin/)]],
      password:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        postalCode:['']
      })

    },{validator:PasswordValidator})

  }

  // registrationForm=new FormGroup({
  //   userName: new FormControl('Ishita'),
  //   password:new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // });
   /*  loadApiData(){
       this.registrationForm.patchValue({
       userName:'Ishita',
       password:'ishi@123',
       confirmPassword:'ishi@123'
     });
    }*/


 /* loadApiData(){
    this.registrationForm.setValue({
      userName:'Ishita',
      password:'ishi@123',
      confirmPassword:'ishi@123',
      address:{
        city:'City',
        state:'State',
        postalCode:'123456'
      }
    })
  };*/

