import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Turma } from 'src/Model/turma';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  
};
const apiUrl = 'https://localhost:44397/api/datawin/turmas';

@Injectable({
  providedIn: 'root'
})

export class TurmaService {

  constructor(private http: HttpClient) { }

  getTurmas(): Observable<Turma[]>{
    return this.http.get<Turma[]>(apiUrl).pipe(
      tap(turmas => console.log('Retornou as turmas')),
      catchError(this.handleError('getTurmas',[]))
    );
  }
  getTurma(IdTurma:number): Observable<Turma>{
    debugger
    const url = apiUrl + "/" + IdTurma;
    return this.http.get<Turma>(url).pipe(
      tap(_=> console.log(`Retornou turma id=${IdTurma}`)),
      catchError(this.handleError<Turma>(`getTurmas id=${IdTurma}`))
    )
  }
    addTurma(turma: any): Observable<Turma>{
      return this.http.post<Turma>(apiUrl+"/save", turma, httpOptions).pipe(
        tap((turma: Turma) => console.log(`Turma adicionada com w/ id=${turma.IdTurma}`)),
        catchError(this.handleError<Turma>(`addTurma`))
      );
    }

    updateTurma(id: any, turma): Observable<any> {
      const url = `${apiUrl}/${id}`;
      return this.http.put(url, turma, httpOptions).pipe(
        tap(_ => console.log(`atualiza a turma com id=${id}`)),
        catchError(this.handleError<any>('updateTurma'))
      );
    }

    deleteTurma(id: any): Observable<Turma>{
      const url = `${apiUrl}/delete/${id}`;

      return this.http.delete<Turma>(url, httpOptions).pipe(
        tap(_=>console.log(`Turma removida id=${id}`)),
        catchError(this.handleError<Turma>('deleteTurma'))
        );
    }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);

      return of(result as T);
    }
  }
}
