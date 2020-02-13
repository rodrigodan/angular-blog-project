import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable()
export class PostServiceService {

  constructor() { }



  salvar(post: Post){
    const posts = this.buscarTodos();
    posts.push(post);
    window.localStorage.setItem('posts',JSON.stringify(posts));
    console.log(post);
  }
  buscarTodos(): Post[] {
    return JSON.parse(window.localStorage.getItem('posts')) || [];
  }

  buscarPostPrincipal() : Post {
    const posts = this.buscarTodos();
    // console.log("teste:" + this.post);
    return posts[0];
  }

  buscarPostSecundario() : Post[] {
    const posts = this.buscarTodos();
    // console.log("teste:" + this.post);
    return posts;
  }
}
