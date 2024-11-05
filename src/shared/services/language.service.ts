import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  actualLanguage:string = 'de';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.actualLanguage); 
    this.translate.use(this.actualLanguage); 
  }
  
  changeLanguage(language: string) {
    this.translate.use(language); 
  }

  get currentLang() {
    return this.translate.currentLang;
  }
}
