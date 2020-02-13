import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable()
export class PostServiceService {

  constructor() { }

  salvar(post: Post){
    console.log(post);
  }
}
