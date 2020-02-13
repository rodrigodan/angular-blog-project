import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostServiceService } from 'src/app/services/post-service.service';




@Component({
  selector: 'app-post-principal',
  templateUrl: './post-principal.component.html',
  styleUrls: ['./post-principal.component.css']
})
export class PostPrincipalComponent implements OnInit {

  post: Post = new Post();

  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
    this.post = this.postService.buscarPostPrincipal();
    console.log(this.post);

  }

}
