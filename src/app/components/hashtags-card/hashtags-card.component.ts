import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/types/post.type';
import { User } from 'src/app/types/user.type';

@Component({
  selector: 'app-hashtags-card',
  templateUrl: './hashtags-card.component.html',
  styleUrls: ['./hashtags-card.component.scss']
})
export class HashtagsCardComponent implements OnInit {

  @Input() posts:Post[];
  @Input() users:User;
  
  constructor() { }

  ngOnInit(): void {
    console.log('child init',this.posts)
  }

}
