import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

getuserslog(parametros: any): Observable<any>{
  const URL = 'http://localhost:3000/users/u/'+parametros.usuario+'/p/'+parametros.password;

  return this.http.get(URL);


}

}
