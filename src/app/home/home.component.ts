import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  message: string = ''

  message2: string = 'hello world'

  constructor() { }

  receiveMessage($event){
    this.message = $event;
    this.message2 = this.message;
    // alert("here")
    // console.log("updatedHere: " + $event)
  }

  ngOnInit(): void {
    // this.post = this.postService.buscarPostPrincipal();
    // console.log(this.post);
  }

}
