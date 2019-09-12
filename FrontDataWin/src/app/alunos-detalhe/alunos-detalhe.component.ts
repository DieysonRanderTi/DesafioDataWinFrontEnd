import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../../Model/aluno';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.scss']
})
export class AlunosDetalheComponent implements OnInit {

  aluno = new Aluno;
  
  isLoadingResults = true;

  constructor( private router: Router, private route: ActivatedRoute,
    private api: AlunoService) { }

  ngOnInit() {
    this.getAluno(this.route.snapshot.params['id']);
    debugger
  }
  getAluno(id){
    debugger
    this.api.getAluno(id)
    .subscribe(data =>{
      this.aluno = data;
      console.log(this.aluno);
      this.isLoadingResults=false;
      
    });
  }
  
  deleteAluno(IdAluno: any){
    this.isLoadingResults = true;
    this.api.deleteAluno(IdAluno)
    .subscribe(res=>{
      this.isLoadingResults =false;
      this.router.navigate(['/alunos']);
    },
    (err)=>{
      console.log(err);
      this.isLoadingResults =false;
    })
  }

}
