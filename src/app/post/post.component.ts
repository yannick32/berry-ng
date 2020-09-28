import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatePostService } from '../create-post.service';
import { PostPayload } from '../create-post/post-payload';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId: number;
  post: PostPayload;

  constructor(private router: ActivatedRoute, private postService: CreatePostService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.postId = params['id'];
    })

    this.postService.getPostById(this.postId).subscribe((data:PostPayload) => {
      this.post = data;
    }, (error: any) => {
      console.log("Getting post with id " + this.postId + " failed");
    });
  }

}
