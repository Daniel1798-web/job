import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  buscoJob: boolean = false;
  @Output() buscarJob = new EventEmitter<boolean>()
  buscoInfo: boolean = false;
  @Output() buscarInfo = new EventEmitter<boolean>()

  necesito: boolean = false;
  @Output() necesitoEm = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  buscoTr(){
    this.buscoJob = true
    this.buscarJob.emit(this.buscoJob)
  }

  buscoEm(){
    this.necesito = true
    this.necesitoEm.emit(this.necesito)
  }

  buscoIn(){
    this.buscoInfo = true
    this.buscarInfo.emit(this.buscoInfo)
  }

 


}
