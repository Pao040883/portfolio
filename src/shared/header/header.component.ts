import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule, NavigationComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggledMenu = false;

  constructor(public languageService: LanguageService) {}

  switchLanguage(language: string) {   
    this.languageService.changeLanguage(language);
    this.languageService.actualLanguage = language;
  }

  toggleMenu() {
    this.toggledMenu = !this.toggledMenu;
  }
}
