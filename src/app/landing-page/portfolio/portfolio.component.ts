import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../shared/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects = [
    { backgroundImage: './../../../assets/img/el-pollo-loco.png', title: 'El pollo loco', description: "EL_POLLO_LOCO", github: '', live_test: 'https://offermanns.online/el-pollo-loco', languages: 'JavaScript | HTML | CSS' },
    { backgroundImage: './../../../assets/img/join.png', title: 'Join', description: "JOIN", github: '', live_test: 'https://offermanns.online/join', languages: 'JavaScript | HTML | CSS | Firebase ' }
  ];

  isHidden: boolean[] = [];

  constructor(public languageService: LanguageService) {
    this.isHidden = Array(this.projects.length).fill(false);
  }

  showOverlay(index: number) {
    this.isHidden[index] = true;
  }

  hideOverlay(index: number) {
    this.isHidden[index] = false;
  }

}
