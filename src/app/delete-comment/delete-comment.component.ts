import { Component, OnInit, Input } from '@angular/core';

import { CommentServiceService } from '../comment-service.service';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.css']
})

export class DeleteCommentComponent implements OnInit {

	@Input() commentId;

	constructor(
		private commentServiceService: CommentServiceService
	) { }

	deleteComment(commentId) {
		this.commentServiceService.deleteComment(commentId);
	}

	ngOnInit() {
	}
	
}
