import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    effect: 'flip'
  };
  
  articles : any = [];
  slides : any = [];

  constructor(
    private articlePrvdr: ArticleService
  ) {
    this.slides = [
      {url: '../../assets/imgs/sydeco.jpg'},
      {url: '../../assets/imgs/sydeco-1.jpg'},
    ];
  }

  ngOnInit() {
    this.getData();
    console.log(this.articles)
  }

  getData() {
    this.articlePrvdr.getAllData().map(article => {
      this.articles.push(article);
    });
  }
}
