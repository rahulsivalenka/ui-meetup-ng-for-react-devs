import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInlineCompComponent } from './my-inline-comp.component';

describe('MyInlineCompComponent', () => {
  let component: MyInlineCompComponent;
  let fixture: ComponentFixture<MyInlineCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInlineCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInlineCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
