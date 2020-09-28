import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayload } from './create-post/post-payload';
import { OriginConfig } from "./origin-config";

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {
  private url: string = OriginConfig.origin + '/api/posts';

  constructor(private httpClient: HttpClient) { }

  createPost(postPayload: PostPayload){
    return this.httpClient.post(this.url, postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>(this.url + '/all');
  }
}
