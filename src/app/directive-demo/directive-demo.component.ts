import { Component } from '@angular/core';
export const enum filterOption {
  DivisibleByTwo = 'Divisible By Two',
  DivisibleByThree = 'Divisible By Three',
  DivisibleByFive = 'Divisible By Five',
  Reset = 'Reset',
}
@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.scss',
})
export class DirectiveDemoComponent {
  public numbers: number[] = Array.from({ length: 50 }, (_, i) => i + 1);
  public filterOption = {
    DivisibleByTwo: 'Divisible By Two',
    DivisibleByThree: 'Divisible By Three',
    DivisibleByFive: 'Divisible By Five',
    Reset: 'Reset',
  };
  public filterBy: string = this.filterOption.Reset;
  public filter(value: string): void {
    this.filterBy = value;
  }
}
