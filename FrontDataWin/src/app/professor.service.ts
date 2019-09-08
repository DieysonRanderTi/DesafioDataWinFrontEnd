import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Professor } from 'src/Model/professor';
import { catchError, tap } from 'rxjs/operators';


const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'https://localhost:44397/api/datawin/professores';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  getProfessores(): Observable<Professor[]>{
    return this.http.get<Professor[]>(apiUrl)
    .pipe(tap(professores => console.log('Retornou os professores')),
    catchError(this.handleError('getProfessores', []))
    );
  }
  getProfessor(idProfessor:number): Observable<Professor>{
    const url =`${apiUrl}/${idProfessor}`;
    return this.http.get<Professor>(url).pipe(
      tap(_=> console.log(`Retornou professor id=${idProfessor}`)),
      catchError(this.handleError<Professor>(`getProfessores id=${idProfessor}`))
    )
  }
    addProfessor(professor): Observable<Professor>{
      return this.http.post<Professor>(apiUrl, professor, httpOptions).pipe(
        tap((professor: Professor) => console.log(`professor adicionado com w/ id=${professor.idProfessor}`)),
        catchError(this.handleError<Professor>(`addProfessor`))
      );
    }

    deleteProfessor(id): Observable<Professor>{
      const url = `${apiUrl}/delete/${id}`;

      return this.http.delete<Professor>(url, httpOptions).pipe(
        tap(_=>console.log(`professor removido id=${id}`)),
        catchError(this.handleError<Professor>('deleteProfessor'))
        );
    }
    
  

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);

      return of(result as T);
    }
  }
}