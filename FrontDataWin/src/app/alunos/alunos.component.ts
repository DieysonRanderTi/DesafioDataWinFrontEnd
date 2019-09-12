import { Component, OnInit } from '@angular/core';
import {Aluno} from '../../Model/aluno';
import {AlunoService} from '../aluno.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {


  displayedColumns: string[] = ['nome', 'telefone', 'email', 'endereco', 'dataNascimento', 'cpf', 'acao'];
  dataSource: Aluno[];
  isLoadingResults: boolean;


  constructor(private api: AlunoService, private router: Router) { }

  ngOnInit() {
    this.api.getAlunos()
    .subscribe(res=>{
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err=>{
      console.log(err);
      this.isLoadingResults =false;
    })
  }
 }

