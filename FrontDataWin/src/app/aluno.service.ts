import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Aluno } from 'src/Model/aluno';


const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://localhost:44397/api/datawin/alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor( private http: HttpClient) { }


  getAlunos(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(apiUrl).pipe(
      tap(alunos => console.log('Retornou os alunos')),
      catchError(this.handleError('getAlunos',[]))
    );
  }
  getProfessor(idAluno:number): Observable<Aluno>{
    const url =`${apiUrl}/${idAluno}`;
    return this.http.get<Aluno>(url).pipe(
      tap(_=> console.log(`Retornou aluno id=${idAluno}`)),
      catchError(this.handleError<Aluno>(`getAlunos id=${idAluno}`))
    )
  }
    addAluno(aluno): Observable<Aluno>{
      return this.http.post<Aluno>(apiUrl, aluno, httpOptions).pipe(
        tap((aluno: Aluno) => console.log(`aluno adicionado com w/ id=${aluno.idAluno}`)),
        catchError(this.handleError<Aluno>(`addAluno`))
      );
    }

    deleteAluno(id): Observable<Aluno>{
      const url = `${apiUrl}/delete/${id}`;

      return this.http.delete<Aluno>(url, httpOptions).pipe(
        tap(_=>console.log(`aluno removido id=${id}`)),
        catchError(this.handleError<Aluno>('deleteAluno'))
        );
    }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);

      return of(result as T);
    }
  }
}
