import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Aluno } from 'src/Model/aluno';


const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  
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
  getAluno(IdAluno:number): Observable<Aluno>{
    debugger
    const url = apiUrl + "/" + IdAluno;
    return this.http.get<Aluno>(url).pipe(
      tap(_=> console.log(`Retornou aluno id=${IdAluno}`)),
      catchError(this.handleError<Aluno>(`getAlunos id=${IdAluno}`))
    )
  }
    addAluno(aluno: any): Observable<Aluno>{
      return this.http.post<Aluno>(apiUrl+"/save", aluno, httpOptions).pipe(
        tap((aluno: Aluno) => console.log(`aluno adicionado com w/ id=${aluno.IdAluno}`)),
        catchError(this.handleError<Aluno>(`addAluno`))
      );
    }

    updateAluno(id: any, aluno): Observable<any> {
      const url = `${apiUrl}/${id}`;
      return this.http.put(url, aluno, httpOptions).pipe(
        tap(_ => console.log(`atualiza o aluno com id=${id}`)),
        catchError(this.handleError<any>('updateAluno'))
      );
    }

    deleteAluno(id: any): Observable<Aluno>{
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
