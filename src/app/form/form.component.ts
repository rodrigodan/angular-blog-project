import { Component, OnInit } from '@angular/core';

import { Post } from '../models/post.model'
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [PostServiceService]
})
export class FormComponent implements OnInit {

  post: Post = new Post();

  constructor(private postService: PostServiceService) { }


  onSubmit(){
    // console.log(this.post);
    this.postService.salvar(this.post);
  }

  ngOnInit(): void {
  }

}
