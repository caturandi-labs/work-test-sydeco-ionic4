import { Injectable } from '@angular/core';
export interface Article{
  id?: number; 
  title: string;
  date: string;
  content: string;
  image : string;
}
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[];
  constructor() {
    this.articles = [
      {
        id: 1,
        title: 'Join and Visit Sydeco At INDODEFENCE EXPO & FORUM 2018',
        date: '23 September 2019',
        content: `INDO DEFENCE 2018 EXPO &amp; FORUM is the 8th Indonesia’s official tri-service defence event, held concurrently with Indo Marine 2018 Expo &amp; Forum and Indo Aerospace 2018 Expo &amp; Forum, the expo will be the biggest Indonesian’s No.1 Tri-Service Defence Industry Event. This event from 7th to 10th of November, 2018 held at Jakarta International Expo Kemayoran, Jakarta, Indonesia.`,
        image: 'https://news.syde.co/wp-content/uploads/2018/10/sydeco-indodefense-1068x551.jpg'
      },
      {
        id: 2,
        title: 'Event: ConnecTechAsia 2018 di Marina Bay, Singapore',
        date: '24 September 2019',
        content: `Indonesia yang diwakili oleh Kementrian Perindustrian RI akan menfasilitasi 15 perusahaan teknologi telekomunikasi, pembayaran digital dan media penyiaran mengikuti ajang pameran ini. Mereka akan memamerkan beragam inovasi lokal diantaranya, cloud, Internet of Things dan e-commerce.`,
        image: 'https://news.syde.co/wp-content/uploads/2018/06/meet-sydeco-di-connectechasia-2018-696x227.jpg'
      }
    ]
  }

  getAllData() {
    return  this.articles;
  }
}
