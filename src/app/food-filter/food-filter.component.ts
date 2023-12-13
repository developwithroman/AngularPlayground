import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-food-filter',
  templateUrl: './food-filter.component.html',
  styleUrl: './food-filter.component.scss',
})
export class FoodFilterComponent {
  @Output('filterFood') public filterFoodEvent = new EventEmitter<string>();
  public filterFood(category: string) {
    this.filterFoodEvent.emit(category);
  }
}
