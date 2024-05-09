import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root',
})

export class FuncionariosService {
private apiUrl = 'http://localhost:8080/funcionarios/detalhes';

constructor(private http: HttpClient) {}

getFuncionarioDetails(): Observable<any> {
      return this.http.get<any[]>(this.apiUrl);
  }

  excluirFuncionario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  editarFuncionario(id: number, funcionario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, funcionario);
  }

}
