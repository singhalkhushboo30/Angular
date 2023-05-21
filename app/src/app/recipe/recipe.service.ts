import {Recipe} from './recipe.model';
import {EventEmitter,Injectable} from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
    private recipes:Recipe[]=[
        new Recipe(
            'French Fries',
            'A super tasty snack!',
            'https://media.istockphoto.com/id/1320857678/photo/brazilian-fish-stew-moqueca.jpg?b=1&s=170667a&w=0&k=20&c=bcE72Zq71JEVt_lfL0fYWMCMjYV4AtxHxxB4EMIZamw=',
            [
             new Ingredient('Potato',2),
             new Ingredient('Vegetable Oil',1),
        
        ]),
        new Recipe(
            'Big Fat Burger',
            'What else you need to say?',
            'https://media.istockphoto.com/id/1320857678/photo/brazilian-fish-stew-moqueca.jpg?b=1&s=170667a&w=0&k=20&c=bcE72Zq71JEVt_lfL0fYWMCMjYV4AtxHxxB4EMIZamw=',
            [
               new Ingredient('Buns',2),
               new Ingredient('Vegetables',5)
            ])
        ];

        constructor(private slService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
       this.slService.addIngredient(ingredients);
    }
}