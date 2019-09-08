import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresDetalheComponent } from './professores-detalhe.component';

describe('ProfessoresDetalheComponent', () => {
  let component: ProfessoresDetalheComponent;
  let fixture: ComponentFixture<ProfessoresDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessoresDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoresDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
