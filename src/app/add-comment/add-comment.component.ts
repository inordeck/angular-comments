import { Component, OnInit } from '@angular/core';
import { CommentServiceService } from '../comment-service.service';
import { Comment }  from '../comment.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})

export class AddCommentComponent implements OnInit {

	commented: string;
	commentor: string;

	constructor(
		private commentServiceService: CommentServiceService
	) { }

	addNewComment(newComment, newAuthor) {
		if (newComment && newAuthor) {
			let brandNewComment = this.commentServiceService.addComment(newComment, newAuthor);
			this.commented = null;
			this.commentor = null;
		} else {
			alert('comment and author are required to add comment');
		}
	}

	ngOnInit() {
	}

}
