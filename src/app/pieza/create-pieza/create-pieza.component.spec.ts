import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePiezaComponent } from './create-pieza.component';

describe('CreatePiezaComponent', () => {
  let component: CreatePiezaComponent;
  let fixture: ComponentFixture<CreatePiezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePiezaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
