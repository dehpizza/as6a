import { Component, OnInit } from '@angular/core';
import {BlogPost} from '../../BlogPost';
import {PostService} from '../post.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {
  posts: Array<BlogPost>;
  constructor(private ps:PostService) { }

  ngOnInit(): void {
    this.ps.getPosts(1,null,null).subscribe((response)=>{
      this.posts = response.slice(0,3);
    })
  }

}
