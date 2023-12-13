import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrl: './binding-demo.component.scss',
})
export class BindingDemoComponent {
  public username: string = '';
  public imageUrl: string = '';
  public disabled: boolean = true;

  isDisabled(): boolean {
    return !!!this.username;
  }
  changeImageUrl() {
    this.imageUrl = this.username;
    this.username = '';
  }
}
