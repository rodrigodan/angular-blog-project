import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.post = this.postService.buscarPostPrincipal();
    console.log(this.post);
  }

}
