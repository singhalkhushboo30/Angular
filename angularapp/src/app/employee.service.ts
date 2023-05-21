import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Employee} from './employee';
import { tap, catchError } from 'rxjs/operators';
import {throwError as observableThrowError,  Observable } from 'rxjs';


@Injectable()
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private _url:string="/assets/data/employees.json";
  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this._url)
                    .catch(this.errorHandler); //errorHandleer method taken as argument and called when an exception occurs.

  }
  /*getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this._url)
                    .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler))
  }*/
  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "Server error");
  }
 /* getEmployees(){
    return [{"id":1,
    "name":"Ishani",
    "department":"HR"},
    {"id":2,
    "name":"Isha",
    "department":"Development"},
    {"id":3,
    "name":"Mahi",
    "department":"Technical Support"}];
  }
  */
  
}
