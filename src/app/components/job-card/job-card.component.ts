import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  constructor() { }
  jobList=[
    {
      id:0,
      position:"camarero",
      sueldo:200,
      horas:4
    },
    {
      id:1,
      position:"camarero",
      sueldo:200,
      horas:4
    },
    {
      id:2,
      position:"camarero",
      sueldo:200,
      horas:4
    },
    {
      id:3,
      position:"camarero",
      sueldo:200,
      horas:4
    },
    {
      id:4,
      position:"camarero",
      sueldo:200,
      horas:4
    },
    {
      id:5,
      position:"camarero",
      sueldo:200,
      horas:4
    },
    {
      id:6,
      position:"camarero",
      sueldo:200,
      horas:4
    },
    {
      id:7,
      position:"camarero",
      sueldo:200,
      horas:4
    },
  ]
  ngOnInit(): void {
  }



}
