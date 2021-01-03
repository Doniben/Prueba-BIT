import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  URL_API = 'http://localhost:4000/api/courses/';

  courses: Course[];
  constructor(private http: HttpClient) {
    this.courses = [];
    // this.emptyCourse = [];
  }

  getCourses() {
    return(this.http.get<Course[]>(this.URL_API));
  }

  createCourse(course: Course) {
    return this.http.post(this.URL_API, course);
  }

  deleteCourse(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`)
  }
}
