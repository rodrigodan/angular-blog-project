import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  message:string = "Rodrigooooo"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage(){
    
    this.messageEvent.emit(this.message);
  }

  ngOnInit(): void {
  }

}
