import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlunoService } from '../aluno.service';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professores-novo',
  templateUrl: './professores-novo.component.html',
  styleUrls: ['./professores-novo.component.scss']
})
export class ProfessoresNovoComponent implements OnInit {

  professorForm: FormGroup;
  isLoadingResults =false;

  constructor(private router: Router, private api: ProfessorService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.professorForm = this.formBuilder.group({
      'Nome': [null, Validators.required],
      'Cargo': [null, Validators.required],
      'Titulacao': [null, Validators.required],
      'Telefone': [null, Validators.required],
      'Email': [null, Validators.required] 
  })
}

  addProfessor(form: NgForm){
    this.isLoadingResults = true;
    this.api.addProfessor(form)
    .subscribe(res=> {
      const id = res['id'];

      this.isLoadingResults = false;
      this.router.navigate(['/professores'])
    }, (err) =>{
      console.log(err);
      this.isLoadingResults = false;
    })
  }
}
