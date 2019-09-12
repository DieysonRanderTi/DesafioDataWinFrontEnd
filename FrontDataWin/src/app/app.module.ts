import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessoresComponent } from './professores/professores.component';
import { ProfessoresNovoComponent } from './professores-novo/professores-novo.component';
import { ProfessoresEditComponent } from './professores-edit/professores-edit.component';
import { ProfessoresDetalheComponent } from './professores-detalhe/professores-detalhe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
  MatTableModule, MatToolbarModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosEditComponent } from './alunos-edit/alunos-edit.component';
import { AlunosNovoComponent } from './alunos-novo/alunos-novo.component';
import { ProfessorService } from './professor.service';
import { AlunoService } from './aluno.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import ptBr from '@angular/common/locales/pt';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmasDetalheComponent } from './turmas-detalhe/turmas-detalhe.component';
import { TurmasEditComponent } from './turmas-edit/turmas-edit.component';
import { TurmasNovoComponent } from './turmas-novo/turmas-novo.component';
import { TurmaService } from 'src/services/turma.service';
import { RouterModule } from '@angular/router';

registerLocaleData(ptBr)


@NgModule({
  declarations: [
    AppComponent,
    ProfessoresComponent,
    ProfessoresNovoComponent,
    ProfessoresEditComponent,
    ProfessoresDetalheComponent,
    MenuComponent,
    AlunosComponent,
    AlunosDetalheComponent,
    AlunosEditComponent,
    AlunosNovoComponent,
    TurmasComponent,
    TurmasDetalheComponent,
    TurmasEditComponent,
    TurmasNovoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,  
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule
  ],
  providers: [HttpClient,
              ProfessorService, 
              AlunoService, 
              TurmaService,
              { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
