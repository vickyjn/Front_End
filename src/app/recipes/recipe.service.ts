import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{

recipeSelected=new EventEmitter<Recipe>();


private recipes:Recipe[]=[new Recipe("Chicken Biryani",
"test description",
"http://www.befoody.in/wp-content/uploads/2017/01/chiciken-biryani.jpg",
[
    new Ingredient('Basmati',2),
    new Ingredient("chicken",2)
]),
new Recipe("Chicken Fried Rice",
"test description",
"http://seonkyounglongest.com/wp-content/uploads/2017/06/chicken-fried-rice-02.jpg",
[
    new Ingredient('Chicken',2),
    new Ingredient('Soya sauce',1)
]
)];

constructor(private slService:ShoppingListService){}


getRecipes(){
return this.recipes.slice();
}

addIngredientToShoppingList(ingredients:Ingredient[]){
this.slService.addIngredients(ingredients);
}

}

