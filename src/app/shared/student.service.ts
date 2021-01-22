import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import {Student} from './student.model';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent!:Student;
  students!: Student[];

  readonly baseURL='http://localhost:3000/students';

  constructor(public http : HttpClient) { }

  postStudent(stu:Student) {
    return this.http.post(this.baseURL, stu);
  }

  getStudentList() {
    return this.http.get(this.baseURL);
  }

  getStudentID(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putStudent(stu: Student) {
    return this.http.put(this.baseURL + `/${stu._id}`, stu);
  }

  deleteStudent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}