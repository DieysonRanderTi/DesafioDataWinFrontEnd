import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from '../../services/turma.service';
import { Turma } from '../../Model/turma';

@Component({
  selector: 'app-turmas-detalhe',
  templateUrl: './turmas-detalhe.component.html',
  styleUrls: ['./turmas-detalhe.component.scss']
})
export class TurmasDetalheComponent implements OnInit {

  turma = new Turma;
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute,
    private api: TurmaService) { }

  ngOnInit() {
  }

  getTurma(id){
    debugger
    this.api.getTurma(id)
    .subscribe(data =>{
      this.turma = data;
      console.log(this.turma);
      this.isLoadingResults=false;
      
    });
  }
  
  deleteAluno(IdTurma: any){
    this.isLoadingResults = true;
    this.api.deleteTurma(IdTurma)
    .subscribe(res=>{
      this.isLoadingResults =false;
      this.router.navigate(['/turmas']);
    },
    (err)=>{
      console.log(err);
      this.isLoadingResults =false;
    })
  }
}
