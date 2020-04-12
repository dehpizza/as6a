import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
  
})
export class CategoriesComponent implements OnInit {
  categories: Array<{cat:string,num:number}>;
   
  constructor(private ps:PostService) { }

  ngOnInit(): void {
    this.ps.getCategories().subscribe((response)=>{
      this.categories=response;
    })
  }

}
