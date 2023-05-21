import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  selectedRecipe:Recipe | any;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe:any) => {
      this.selectedRecipe=recipe;
    }
   );
  }
}
