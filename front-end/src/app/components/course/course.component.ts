import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { NgForm } from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import { Course } from 'src/app/models/course';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {

  workingShift = [
    {name: 'Mañana'},
    {name: 'Tarde'},
    {name: 'Noche'}
  ];

  campus = [
    {name: 'Bogotá'},
    {name: 'Cali'},
    {name: 'Medellín'},
    {name: 'Bucaramanga'},
    {name: 'Ibagué'}
  ];

  form: FormGroup;

  constructor(public courseService: CourseService) { 
    this.form = new FormGroup({
      name: new FormControl(''),
      duration: new FormControl(''),
      dateStart: new FormControl(''),
      dateFinal: new FormControl(''),
      campus: new FormControl(this.campus[0]),
      workingShift: new FormControl(this.workingShift[0]),
      description: new FormControl(''),
      Image: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe(
      res => {
        this.courseService.courses = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  addCourse() {
    const newCourse: Course = {
    _id: undefined,
    name: this.form.controls.name.value,
    duration: this.form.controls.duration.value,
    dateStart: this.form.controls.dateStart.value,
    campus: this.form.controls.campus.value['name'],
    workingShift: this.form.controls.workingShift.value['name'],
    description: this.form.controls.description.value,
    Image: 'string',
    dateFinal: this.form.controls.dateFinal.value,
    }
    this.courseService.createCourse(newCourse).subscribe(
      res => {
        console.log(res),
        this.getCourses(),
        this.form.reset();
      },
      err => console.error(err)
    );
  }

  deleteCourse(_id: string) {
    const res = confirm('¿Quieres borrar este curso?');
    if (res) {
      this.courseService.deleteCourse(_id).subscribe(
        (res) => this.getCourses(),
        (err) => console.error(err)
      );
    }
  }
}
