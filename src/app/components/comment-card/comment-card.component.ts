import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../types/comment.type';
import { User } from 'src/app/types/user.type';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {
  @Input() comments:Comment[];
  @Input() users:User[];
  @Output() like = new EventEmitter<Comment>();
  @Output() reComment = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit(): void {
  }

  likeComment (comment:Comment) {
    this.like.emit(comment)
  }

  recomment(comment:Comment) {
    this.reComment.emit(comment)
  }

}
