import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StudentService} from './Services/student.service';
import { WeatherService } from './Services/weather.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  students: any = [];
  weather: any = [];
  temp:any="";
 constructor(private studentService: StudentService,private weatherService:WeatherService  ) {

 }
 ngOnInit(): void {
  this.studentService.GetStudentData().subscribe(
  (data) => {
  
   this.students= data.students;
  }
  );
 

    this.weatherService.GetStudentData().subscribe(
    (data) => {
    
     this.weather= data.weathers;
     this.temp = data.main;
    }
    );
   
 }
}
