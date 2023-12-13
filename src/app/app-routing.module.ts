import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { ComponentCommunicaionComponent } from './component-communicaion/component-communicaion.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: 'binding', component: BindingDemoComponent, title: 'binding' },
  {
    path: 'directive',
    component: DirectiveDemoComponent,
    title: 'directive',
  },
  {
    path: 'communication',
    component: ComponentCommunicaionComponent,
    title: 'communication',
  },
  {
    path: 'timer',
    component: TimerComponent,
    title: 'timer',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
