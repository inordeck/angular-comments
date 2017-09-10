import { Component } from '@angular/core';
import { CommentServiceService } from './comment-service.service';
import { Comment } from './comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommentServiceService]
})

export class AppComponent {

  comments = [];

  constructor (
  	private commentServiceService: CommentServiceService
  	) {}

  ngOnInit() {
  	this.comments = this.commentServiceService.getAllComments();
  }

}
