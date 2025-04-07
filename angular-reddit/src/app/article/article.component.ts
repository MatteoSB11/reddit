import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  article = {
    title: 'Titolo dell’articolo',
    content: 'Questo è il contenuto dell’articolo.'
  }
}
