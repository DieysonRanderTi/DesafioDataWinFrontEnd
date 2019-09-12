import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasNovoComponent } from './turmas-novo.component';

describe('TurmasNovoComponent', () => {
  let component: TurmasNovoComponent;
  let fixture: ComponentFixture<TurmasNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmasNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmasNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
