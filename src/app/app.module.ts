import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommentServiceService } from './comment-service.service';

import { AppComponent } from './app.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCommentComponent,
    DeleteCommentComponent,
    EditCommentComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [CommentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
