import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-secundario',
  templateUrl: './post-secundario.component.html',
  styleUrls: ['./post-secundario.component.css']
})
export class PostSecundarioComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
    this.posts = this.postService.buscarTodos().slice(1);
  }

}
