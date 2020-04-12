import { Component, OnInit, Input} from '@angular/core';
import {BlogPost} from '../../BlogPost';
import {PostService} from '../post.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  posts: Array<BlogPost>;
  constructor(private ps:PostService) { }

  ngOnInit(): void {
    this.ps.getPosts(1,null,null).subscribe((response)=>{
      this.posts = response.slice(0,3);
    })
  }

}
