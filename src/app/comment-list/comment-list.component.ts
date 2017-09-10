import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Comment } from '../comment.model'
import { CommentServiceService } from '../comment-service.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit {

	comments: Comment[];

	subscription: Subscription;

	constructor(
		private commentServiceService: CommentServiceService
	) { }

	ngOnInit() {
		this.subscription = this.commentServiceService.commentChanged
			.subscribe(
				(comments: Comment[]) => {
					this.comments = comments;
				});
			this.comments = this.commentServiceService.getAllComments();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
