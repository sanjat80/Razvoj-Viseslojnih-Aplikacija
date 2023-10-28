import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STUDENT_GRUPA_URI, STUDENT_URI } from '../constants';
import { Student} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) { }

  public getStudentByGrupa(idGrupe:number):Observable<any>{
    return this.httpClient.get(`${STUDENT_GRUPA_URI}/${idGrupe}`)
  }

  public addStudent(student : Student):Observable<any>{
    student.id=500000;
    return this.httpClient.post(`${STUDENT_URI}`,student);
  }

  public updateStudent(student: Student):Observable<any>{
    return this.httpClient.put(`${STUDENT_URI}`,student);
  }

  public deleteStudent(id:number):Observable<any>{
    return this.httpClient.delete(`${STUDENT_URI}/${id}`);
  }
}
