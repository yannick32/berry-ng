import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostPayload } from './post-payload';
import {CreatePostService} from '../create-post.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postPayload: PostPayload;
  createPostForm: FormGroup;
  title = new FormControl('');
  content = new FormControl('');

  constructor(private createPostService: CreatePostService,
    private router: Router) {
    this.createPostForm = new FormGroup({
      title: this.title,
      content: this.content
    });
    this.postPayload = {
      id: '',
      title: '',
      content: '',
      username: ''
    }
  }

  ngOnInit(): void {
  }

  createPost(){
    this.postPayload.title = this.createPostForm.get('title').value;
    this.postPayload.content = this.createPostForm.get('content').value;
    this.createPostService.createPost(this.postPayload).subscribe(data => {
      this.router.navigateByUrl('/')
    }, error => {
      console.log('Creating post failed');
    });
  }


}
