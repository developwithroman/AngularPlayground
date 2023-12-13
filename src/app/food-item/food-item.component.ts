import { Component, EventEmitter, Input, Output } from '@angular/core';
export interface FoodItem {
  category: string;
  name: string;
}
@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.scss',
})
export class FoodItemComponent {
  @Input() public food!: FoodItem;
  @Input() public selectedCategory!: string;
  @Output() public onFoodSelected = new EventEmitter();

  public itemSelected!: FoodItem;
  public matchesWithCategory: boolean = false;
  public foodSelected(payload: FoodItem): void {
    console.log(payload);
    this.itemSelected = payload;
    this.onFoodSelected.emit(payload);
  }
}
