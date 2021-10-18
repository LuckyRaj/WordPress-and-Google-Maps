import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { WordpressService } from 'src/app/services/wordpress.service';



export interface WordPoressPosts {
  id: number;
  slug: string;
  status: string;
  title: string;
  creationDate: string;
}

const ELEMENT_DATA: WordPoressPosts[] = [
  {id: 1, slug: 'Hydrogen', status: 'test', title: 'Hello', creationDate: '2021-10-15'},
  {id: 2, slug: 'Hydrogen', status: 'test', title: 'Hello', creationDate: '2021-10-15'},
  {id: 3, slug: 'Hydrogen', status: 'test', title: 'Hello', creationDate: '2021-10-15'},
  {id: 4, slug: 'Hydrogen', status: 'test', title: 'Hello', creationDate: '2021-10-15'},
  {id: 5, slug: 'Hydrogen', status: 'test', title: 'Hello', creationDate: '2021-10-15'}
];

@Component({
  selector: 'app-wordpress-posts',
  templateUrl: './wordpress-posts.component.html',
  styleUrls: ['./wordpress-posts.component.scss']
})

export class WordpressPostsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'slug', 'status', 'title', 'creation date'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<any>();
  blogPosts: any;
  errorMsg: any;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  constructor(private wordPressService: WordpressService, private ngxSpinner: NgxSpinnerService, private route: Router) { }

  ngOnInit(){
    //On Page load get All available Posts
    this.getPosts();
  }

  getPosts(){
    this.ngxSpinner.show();
    this.wordPressService.getPosts().subscribe( data => {
      //To get Top 20 posts
      //But this Service always gives only 10 posts
      this.blogPosts = data.slice(0,20);
      this.blogPosts.sort = this.sort;
      this.ngxSpinner.hide();
    },
    (error) => {
      this.errorMsg = error.message
      this.ngxSpinner.hide();
    }
    );
  }

  onclick(event: any){
    // Redirect to Single Post UI
    this.route.navigate(['/posts', event.id])
  }
}
