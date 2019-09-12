import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-alunos-edit',
  templateUrl: './alunos-edit.component.html',
  styleUrls: ['./alunos-edit.component.scss']
})
export class AlunosEditComponent implements OnInit {

  alunoForm: FormGroup;
  IdAluno: number = 0;
  NomeAluno: String ="";
  Telefone: String ="";
  Email: String ="";
  Endereco: String ="";
  DataNascimento: Date =null;
  Cpf: String ="";

  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, 
    private api: AlunoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    debugger
    this.api.getAluno(this.route.snapshot.params['id']);
    this.alunoForm = this.formBuilder.group({
      'NomeAluno':[null, Validators.required],
      'Telefone':[null, Validators.required],
      'Email':[null, Validators.required],
      'Endereco':[null, Validators.required],
      'DataNascimento':[null, Validators.required],
      'Cpf':[null, Validators.required]
    })
  }

  getAluno(id){
    debugger
    this.api.getAluno(id).subscribe(
      data=>{
        this.IdAluno = data.IdAluno;
        this.alunoForm.setValue({
          NomeAluno: data.NomeAluno,
          Telefone: data.Telefone,
          Email: data.Email,
          Endereco: data.Endereco,
          DataNascimento: data.DataNascimento,
          Cpf: data.Cpf
        });
      });
  }
  updateAluno(form: NgForm) {
    debugger
    this.isLoadingResults = true;
    this.api.updateAluno(this.IdAluno, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/alunos-detalhe/' + this.IdAluno]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
