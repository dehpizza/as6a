import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../BlogPost';
import { Observable } from 'rxjs';

const perPage: number = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<BlogPost[]> {
    const perPage = Number.MAX_SAFE_INTEGER.toString();

    let params = {
      page: "1",
      perPage: perPage
    }

    return this.http.get<BlogPost[]>(`https://dry-caverns-08798.herokuapp.com/api/posts`, { params });
  }

  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`https://dry-caverns-08798.herokuapp.com/api/posts`, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://dry-caverns-08798.herokuapp.com/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://dry-caverns-08798.herokuapp.com/api/posts/${id}`);
  }

  getPosts(page:number,tag:string,category:string):Observable<Array<BlogPost>>{
    let params = (tag == null?"":"&tag="+tag) + (category == null?"":"&category="+category);
    return this.http.get<Array<BlogPost>>(`https://dry-caverns-08798.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`+params);
  }

  getPostById(id:string):Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://dry-caverns-08798.herokuapp.com/api/posts/${id}`);
  }

  getCategories():Observable<{cat: string, num: number}[]>{
    return this.http.get<{ cat: string, num: number }[]>("https://dry-caverns-08798.herokuapp.com/api/categories");
  }

  getTags():Observable<string[]>{
    return this.http.get<string[]>("https://dry-caverns-08798.herokuapp.com/api/tags");
  }
}
