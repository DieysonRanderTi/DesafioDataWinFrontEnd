import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProfessoresComponent} from './professores/professores.component';
import{ProfessoresDetalheComponent} from './professores-detalhe/professores-detalhe.component';
import{ProfessoresEditComponent} from './professores-edit/professores-edit.component';
import{ProfessoresNovoComponent} from './professores-novo/professores-novo.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosNovoComponent } from './alunos-novo/alunos-novo.component';
import { AlunosEditComponent } from './alunos-edit/alunos-edit.component';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmasDetalheComponent } from './turmas-detalhe/turmas-detalhe.component';
import { TurmasNovoComponent } from './turmas-novo/turmas-novo.component';
import { TurmasEditComponent } from './turmas-edit/turmas-edit.component';

const routes: Routes = [
  {
    path: 'professores',
    component: ProfessoresComponent,
    data: {title: 'Lista de Professores'}
  },
  {
    path: 'professores-detalhe/:id',
    component: ProfessoresDetalheComponent,
    data: {title: 'Detalhes do Professor'}
  },
  {
    path: 'professores-novo',
    component: ProfessoresNovoComponent,
    data: {title: 'Cadastrar Professor'}
  },
  {
    path: 'professores-edit/:id',
    component: ProfessoresEditComponent,
    data: {title: 'Editar Professor'}
  },
  {path:'',
  redirectTo: '/professores',
  pathMatch: 'full'
  },
  {
    path: 'alunos',
    component: AlunosComponent,
    data: {title: 'Lista de Alunos'}
  },
  {
    path: 'alunos-detalhe/:id',
    component: AlunosDetalheComponent,
    data: {title: 'Detalhes do Aluno'}
  },
  {
    path: 'alunos-novo',
    component: AlunosNovoComponent,
    data: {title: 'Cadastrar Aluno'}
  },
  {
    path: 'alunos-edit/:id',
    component: AlunosEditComponent,
    data: {title: 'Editar Aluno'}
  },
  {path:'',
  redirectTo: '/alunos',
  pathMatch: 'full'
  },
  {
    path: 'turmas',
    component: TurmasComponent,
    data: {title: 'Lista de Turmas'}
  },
  {
    path: 'turmas-detalhe/:id',
    component: TurmasDetalheComponent,
    data: {title: 'Detalhes da Turma'}
  },
  {
    path: 'turmas-novo',
    component: TurmasNovoComponent,
    data: {title: 'Cadastrar Turma'}
  },
  {
    path: 'turmas-edit/:id',
    component: TurmasEditComponent,
    data: {title: 'Editar Turma'}
  },
  {path:'',
  redirectTo: '/turmas',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
