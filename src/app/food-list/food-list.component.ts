import { Component } from '@angular/core';
const foodLists = [
  { category: 'fruit', name: 'Apple' },
  { category: 'vegetable', name: 'Carrot' },
  { category: 'herb', name: 'Basil' },
  { category: 'fruit', name: 'Orange' },
  { category: 'herb', name: 'Thyme' },
  { category: 'vegetable', name: 'Tomato' },
  { category: 'fruit', name: 'Banana' },
  { category: 'vegetable', name: 'Broccoli' },
  { category: 'vegetable', name: 'Cucumber' },
  { category: 'herb', name: 'Rosemary' },
  { category: 'fruit', name: 'Grapes' },
  { category: 'herb', name: 'Mint' },
  { category: 'fruit', name: 'Pineapple' },
  { category: 'fruit', name: 'Strawberry' },
  { category: 'vegetable', name: 'Potato' },
  { category: 'herb', name: 'Parsley' },
  { category: 'vegetable', name: 'Spinach' },
  { category: 'herb', name: 'Coriander' },
  { category: 'fruit', name: 'Watermelon' },
  { category: 'vegetable', name: 'Onion' },
  { category: 'herb', name: 'Dill' },
  { category: 'fruit', name: 'Kiwi' },
  { category: 'vegetable', name: 'Bell Pepper' },
  { category: 'herb', name: 'Sage' },
  { category: 'fruit', name: 'Mango' },
];
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss',
})
export class FoodListComponent {
  public foodList = foodLists;
  public selectedCategory = '';

  public foodSelected(item: any) {
    this.selectedCategory =
      item.category === 'fruit'
        ? 'Fruit'
        : item.category === 'vegetable'
        ? 'Vegetable'
        : item.category === 'herb'
        ? 'Herb'
        : '';
  }

  public filterFood(category: string) {
    this.foodList =
      category === 'fruit'
        ? foodLists.filter((food) => food.category === 'fruit')
        : category === 'vegetable'
        ? foodLists.filter((food) => food.category === 'vegetable')
        : category === 'herb'
        ? foodLists.filter((food) => food.category === 'herb')
        : foodLists;
  }
}
