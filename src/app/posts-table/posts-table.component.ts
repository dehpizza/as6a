import { Component, OnInit, Output } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { BlogPost } from '../../BlogPost';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {

  blogPosts: Array<BlogPost>=[];

  constructor(private postserivce: PostService, private router: Router) { }

  rowClicked(e, id){
    this.router.navigate(['admin/post', id]);
    console.log(e);
  }

  ngOnInit(): void {
    this.postserivce.getAllPosts().subscribe(data=>this.blogPosts=data);
    console.log("Successfully copied date from PostService.");
    console.log(this.blogPosts[8]._id);
    console.log("Test");
  }

}
