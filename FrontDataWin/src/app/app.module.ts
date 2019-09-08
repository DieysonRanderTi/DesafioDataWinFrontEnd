import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { LayoutModule } from '@angular/cdk/layout';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosEditComponent } from './alunos-edit/alunos-edit.component';
import { AlunosNovoComponent } from './alunos-novo/alunos-novo.component';


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
    AlunosNovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
