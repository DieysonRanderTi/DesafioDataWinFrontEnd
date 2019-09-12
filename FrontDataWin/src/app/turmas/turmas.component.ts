import { Component, OnInit } from '@angular/core';
import {Turma} from '../../Model/turma';
import {TurmaService} from '../../services/turma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.scss']
})
export class TurmasComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'curso', 'cargaHoraria', 'horaInicio', 'horaFim', 'acao'];
  dataSource: Turma[];
  isLoadingResults: boolean;

  constructor(private api: TurmaService, private router: Router) { }

  ngOnInit() {
    this.api.getTurmas()
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
