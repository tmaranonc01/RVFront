import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPiezaComponent } from './index-pieza.component';

describe('IndexPiezaComponent', () => {
  let component: IndexPiezaComponent;
  let fixture: ComponentFixture<IndexPiezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPiezaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
