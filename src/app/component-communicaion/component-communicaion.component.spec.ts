import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCommunicaionComponent } from './component-communicaion.component';

describe('ComponentCommunicaionComponent', () => {
  let component: ComponentCommunicaionComponent;
  let fixture: ComponentFixture<ComponentCommunicaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentCommunicaionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentCommunicaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
