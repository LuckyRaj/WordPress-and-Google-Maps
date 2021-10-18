import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  postId: number = 0;
  postDetails: any;
  errorMsg: any;
  
  constructor(private wordPressService: WordpressService, private ngxSpinner: NgxSpinnerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      //Get Post ID from URL
      this.postId = params['id']
      this.getPost(this.postId);
    })
    
  }

  getPost(id: number){
    this.ngxSpinner.show();
    this.wordPressService.getSinglePost(id).subscribe( data => {
      this.postDetails = data;
      this.ngxSpinner.hide();
    },
    (error) => {
      this.errorMsg = error.message
      this.ngxSpinner.hide();
    }
    );
  }

}
