import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePostService } from '../create-post.service';
import { PostPayload } from '../create-post/post-payload';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  posts: Observable<Array<PostPayload>>;

  constructor(private postService: CreatePostService) {

  }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
  }

}
