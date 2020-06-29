import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemContainerComponent } from './add-item-container.component';

describe('AddItemContainerComponent', () => {
  let component: AddItemContainerComponent;
  let fixture: ComponentFixture<AddItemContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
