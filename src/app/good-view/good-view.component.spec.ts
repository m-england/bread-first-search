import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodViewComponent } from './good-view.component';

describe('GoodViewComponent', () => {
  let component: GoodViewComponent;
  let fixture: ComponentFixture<GoodViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoodViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
