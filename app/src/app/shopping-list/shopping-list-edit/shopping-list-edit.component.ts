
import { Component, OnInit,ElementRef } from '@angular/core';
import {ViewChild} from '@angular/core'
import {Ingredient} from '../ingredient.model';
import {ShoppingListService} from'../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
   
  @ViewChild('nameInput',{static:true}) nameInputRef:ElementRef | any;
  @ViewChild('amountInput',{static:true}) amountInputRef:ElementRef | any; 
  
  constructor(private slService:ShoppingListService) { }

  onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
     const newIngredient=new Ingredient(ingName,ingAmount);
     this.slService.addIngredients(newIngredient);
  }

  ngOnInit(){
  }

}
