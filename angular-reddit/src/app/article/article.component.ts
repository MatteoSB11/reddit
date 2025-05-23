import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
import { Article } from './article.model';

export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  article:Article

  constructor() {
    this.article = new Article('Angular 2','http://angular.io',10);
  }

  voteUp(): Boolean {
    this.article.voteUp(); //Modificato qui 
    return false;
  }

  voteDown():Boolean {
    this.article.voteDown(); //Modificato qui
    return false;
  }

  ngOnInit() {}
}