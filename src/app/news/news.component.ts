import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  // images = [9, 10, 11].map((x) => `../../assets/img/${x}.jpg`);

  sections : {}[] =[
    {'src':'../../assets/img/9.jpg' ,'date':'April 24 2019' ,'title':'Steps Toward Developing A Content Strategy' , 'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tiovolup Conseq uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente ' },
    {'src':'../../assets/img/10.jpg' ,'date':'Dec 24 2019' ,'title':'Looking for Developers? Try This Geeky Community' , 'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tiovolup Conseq uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente ' },
    {'src':'../../assets/img/11.jpg' ,'date':'Jun 24 2019' ,'title':'ow to Spend Less Than an Hour a Day on Email Marketing' , 'content':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tiovolup Conseq uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente ' },
  ]

  posts : {}[]=[
    {"img":'../../assets/img/12.jpg' , 'content' : 'There is no good blog without tim great readability is very importen' , 'country' : 'Viral polaroid ugh'},
    {"img":'../../assets/img/13.png' , 'content' : '6 Reasons to Attend Elevate New York 2015 events one way oft the development' , 'country' : 'labitur qui'},
    {"img":'../../assets/img/14.jpg' , 'content' : 'User Experience As A Ranking Signal Is  Currently Only For Mobile Results' , 'country' : 'Viral polaroid ugh'},
    {"img":'../../assets/img/15.jpg' , 'content' : 'When you start with what’s at stake for the  right to their attention' , 'country' : 'Ei his nonume'},
  ]


  images = [12, 14, 15,9].map((x) => `../../assets/img/${x}.jpg`);

  constructor() { }

  ngOnInit() {
  }

}
