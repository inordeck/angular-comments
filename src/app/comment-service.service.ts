import { Injectable } from '@angular/core';
import { Comment } from './comment.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommentServiceService {

	commentChanged = new Subject<Comment[]>();

	private commentId: number;

	private comments = [
		{ id: 1, comment: 'is it working?', author: 'billy' },
		{ id: 2, comment: 'ok, how about now?', author: 'bob' },
		{ id: 3, comment: 'well hold my beer and watch this...', author: 'joe' },
	]

	constructor() { }

	getAllComments() {
		return this.comments.slice();
	}

	addComment(newComment, newAuthor) {
		let newest = {id: this.commentId, comment: newComment, author: newAuthor};
		this.commentId++;
		this.comments.push(newest);
		return newest;
	}

	deleteComment(commentId) {
		this.comments.splice(commentId, 1);
		this.commentChanged.next(this.comments.slice());
	}

	editComment(commentId, editedComment, editedAuthor) {
		if (editedComment) {
			this.comments[commentId].comment = editedComment;
		}
		if (editedAuthor) {
			this.comments[commentId].author = editedAuthor;
		}
	}

}
