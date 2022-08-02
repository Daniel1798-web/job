import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showJobs: boolean = false;
  showEm: boolean = false;
  showInfo:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  buscarJob(e:any){
    this.showJobs = e;
    this.showInfo = false;
    this.showEm = false;
  }

  buscarEm(e:any){
    this.showEm = e;
    this.showJobs = false;
    this.showInfo = false;

  }

  buscarInformacion(e:any){
    this.showInfo = e;
    this.showJobs = false;
    this.showEm = false;

  }

}
