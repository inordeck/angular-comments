import { Component, OnInit, Input } from '@angular/core';
import { CommentServiceService } from '../comment-service.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})

export class EditCommentComponent implements OnInit {

	@Input() commentId;
	public editing = false;

	constructor(
		private commentServiceService: CommentServiceService
	) { }

	editComment(commentId) {
		if (this.editing) {
			this.editing = false;
		} else {
			this.editing = true;
		}
	}

	updateComment(commentId, editedComment, editedAuthor) {
		this.commentServiceService.editComment(commentId, editedComment, editedAuthor);
		this.editing = false;
	}

	ngOnInit() {

	}

}
