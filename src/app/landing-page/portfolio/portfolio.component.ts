import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
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
export class PortfolioComponent implements AfterViewInit {
  @ViewChildren('scrollAnimated') animatedElements!: QueryList<ElementRef>;

  projects = [
    { backgroundImage: './../../../assets/img/el-pollo-loco.png', title: 'El pollo loco', description: "EL_POLLO_LOCO", github: 'https://github.com/Pao040883/el-pollo-loco', live_test: 'https://offermanns.online/el-pollo-loco', languages: 'JavaScript | HTML | CSS' },
    { backgroundImage: './../../../assets/img/join.png', title: 'Join', description: "JOIN", github: 'https://github.com/Pao040883/join-kanban', live_test: 'https://offermanns.online/join', languages: 'JavaScript | HTML | CSS | Firebase ' }
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

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
        } else {
          (entry.target as HTMLElement).classList.remove('visible');
        }
      });
    }, { threshold: 0.1 }); 

    this.animatedElements.forEach(element => {
      observer.observe(element.nativeElement);
    });
  }

}
