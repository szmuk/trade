import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/core/models/comment';

@Component({
  selector: 'app-comments-list-item',
  templateUrl: './comments-list-item.component.html',
  styleUrls: ['./comments-list-item.component.scss'],
})
export class CommentsListItemComponent implements OnInit {
  @Input() comment: Comment;
  constructor() { }

  ngOnInit() { }

}
