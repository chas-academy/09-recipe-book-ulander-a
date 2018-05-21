import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailChildComponent } from './recipe-detail-child.component';

describe('RecipeDetailChildComponent', () => {
  let component: RecipeDetailChildComponent;
  let fixture: ComponentFixture<RecipeDetailChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
