import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostPayload } from './create-post/post-payload';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {
  private url: string = 'http://localhost:8080/api/auth/posts';

  constructor(private httpClient: HttpClient) { }

  createPost(postPayload: PostPayload){
    return this.httpClient.post(this.url, postPayload);
  }
}
