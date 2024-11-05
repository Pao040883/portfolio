import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(public languageService: LanguageService){}

  getYear() {
    return new Date().getFullYear();
  }

}
