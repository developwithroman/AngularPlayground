import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { FormsModule } from '@angular/forms';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { ComponentCommunicaionComponent } from './component-communicaion/component-communicaion.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodFilterComponent } from './food-filter/food-filter.component';
import { TimerComponent } from './timer/timer.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TimeFormatPipe } from './time-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    MainbodyComponent,
    BindingDemoComponent,
    DirectiveDemoComponent,
    ComponentCommunicaionComponent,
    FoodListComponent,
    FoodItemComponent,
    FoodFilterComponent,
    TimerComponent,
    CountdownTimerComponent,
    TimeFormatPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
