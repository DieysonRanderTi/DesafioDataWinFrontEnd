import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { Professor } from '../../Model/professor';

@Component({
  selector: 'app-professores-detalhe',
  templateUrl: './professores-detalhe.component.html',
  styleUrls: ['./professores-detalhe.component.scss']
})
export class ProfessoresDetalheComponent implements OnInit {

  professor = new Professor;

  isLoadingResults = true;

  constructor( private router: Router, private route: ActivatedRoute,
    private api: ProfessorService) { }

  ngOnInit() {
    this.getProfessor(this.route.snapshot.params['id']);
  }

  getProfessor(id){
    debugger
    this.api.getProfessor(id)
    .subscribe(data =>{
      this.professor = data;
      console.log(this.professor);
      this.isLoadingResults=false;
      
    });
  }
  
  deleteProfessor(IdProfessor: any){
    this.isLoadingResults = true;
    this.api.deleteProfessor(IdProfessor)
    .subscribe(res=>{
      this.isLoadingResults =false;
      this.router.navigate(['/professores']);
    },
    (err)=>{
      console.log(err);
      this.isLoadingResults =false;
    })
  }
}
