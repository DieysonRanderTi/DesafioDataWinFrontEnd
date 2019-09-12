import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-alunos-novo',
  templateUrl: './alunos-novo.component.html',
  styleUrls: ['./alunos-novo.component.scss']
})
export class AlunosNovoComponent implements OnInit {

  alunoForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: AlunoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.alunoForm = this.formBuilder.group({
      'NomeAluno': [null, Validators.required],
      'Telefone': [null, Validators.required],
      'Email': [null, Validators.required],
      'Endereco': [null, Validators.required],
      'DataNascimento': [null, Validators.required],
      'Cpf': [null, Validators.required]
    })
  }

  addAluno(form: NgForm){
    debugger
    this.isLoadingResults = true;
    this.api.addAluno(form)
    .subscribe(res=> {
      const id = res['id'];

      this.isLoadingResults = false;
      this.router.navigate(['/alunos'])
    }, (err) =>{
      console.log(err);
      this.isLoadingResults = false;
    })
  }

}
