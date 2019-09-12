import { Component, OnInit } from '@angular/core';
import {ProfessorService} from '../professor.service';
import {Professor} from '../../Model/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cargo', 'titulacao', 'telefone', 'email', 'acao'];
  dataSource: Professor[];
  isLoadingResults: boolean;


  constructor(private api: ProfessorService) { 

  }

  ngOnInit() {
    this.api.getProfessores()
    .subscribe(res=>{
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err=>{
      console.log(err);
      this.isLoadingResults = false;
    })
  }
}
