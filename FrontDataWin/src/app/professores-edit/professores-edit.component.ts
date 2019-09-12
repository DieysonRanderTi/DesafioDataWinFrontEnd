import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professores-edit',
  templateUrl: './professores-edit.component.html',
  styleUrls: ['./professores-edit.component.scss']
})
export class ProfessoresEditComponent implements OnInit {

  professorForm: FormGroup;
  IdProfessor: number = 0;
  Nome: String ="";
  Cargo: String ="";
  Titulacao: String ="";
  Telefone: String ="";
  Email: String ="";

  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, 
    private api: ProfessorService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.api.getProfessor(this.route.snapshot.params['id']);
    this.professorForm = this.formBuilder.group({
      'Nome':[null, Validators.required],
      'Cargo':[null, Validators.required],
      'Titulacao':[null, Validators.required],
      'Telefone':[null, Validators.required],
      'Email':[null, Validators.required]
    })
  }
  
  getProfessor(id){
    this.api.getProfessor(id)
    .subscribe(data=>{
      this.IdProfessor = data.IdProfessor;
      this.professorForm.setValue({
        NomeProfessor: data.Nome,
        Cargo: data.Cargo,
        Titulacao: data.Titulacao,
        Telefone: data.Telefone,
        Email: data.Email
      });
    });
  }

  updateProfessor(form: NgForm){
    this.isLoadingResults =true;
    this.api.updateProfessor(this.IdProfessor, form)
    .subscribe(res=>{
      this.isLoadingResults = false;
      this.router.navigate(['/professores-detalhe/' + this.IdProfessor]);
    }, (err)=>{
      console.log(err);
      this.isLoadingResults = false;
    })
  }
}
