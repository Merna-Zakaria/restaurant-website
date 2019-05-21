import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootstrap-html5-sass-project';

  constructor(private translate: TranslateService) {
    // translate.use('en').then(() => {
    //   console.log(translate.data);
    // });
  }

  setLang(lang: string) {
    this.translate.use(lang);
    if(lang==='ar'){
      document.body.setAttribute('dir', 'rtl')
     
    }
    else{
      document.body.setAttribute('dir', 'ltr')
    }
  }

}
