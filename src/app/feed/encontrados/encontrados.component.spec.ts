import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontradosComponent } from './encontrados.component';

describe('EncontradosComponent', () => {
  let component: EncontradosComponent;
  let fixture: ComponentFixture<EncontradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncontradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncontradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
