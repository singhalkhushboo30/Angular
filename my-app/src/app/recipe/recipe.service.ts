import {Recipe} from './recipe';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeService{
    
    recipes: Recipe[]|any=[
       {name:'Cheese Burger',description:'A cheeseburger is a hamburger topped with cheese !',imagePath:'https://th.bing.com/th/id/R.b2cb6dd7b4d3cf502e9c0c45b701dcef?rik=%2f9BuYKSt6OTZGg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-w9Xvc5y4sOw%2fT7JQXbIxtgI%2fAAAAAAAAI9s%2f2qCs1SAJB30%2fs1600%2fphoto%252528144%252529.JPG&ehk=R7ZGafBmIgUA9PzOn%2fwt2EmY%2bjPNO16oTujXrqEwhs8%3d&risl=&pid=ImgRaw&r=0'},
        {name:'Onion Pizza',description:'An onion pizza will be the perfect blend of crispy onions with the softness of the cheese.!',imagePath:'https://hustlepizza.com.au/wp-content/uploads/2020/11/vegan.jpg'
}];

        constructor(){}

    getRecipes(){
        return this.recipes.slice();
    }

}