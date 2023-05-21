import {Ingredient} from './ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
    ingredientsChanged=new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)];

        getIngredients(){
            return this.ingredients.slice();
        }

        addIngredients(ingredient:Ingredient){
            this.ingredients.push(ingredient);
            this.ingredientsChanged.emit(this.ingredients.slice());
        }

         addIngredient(ingredients:Ingredient[]){
        //     for(let ingredient of ingredients){
        //         this.addIngredients(ingredient);
        //     }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());

        }

}