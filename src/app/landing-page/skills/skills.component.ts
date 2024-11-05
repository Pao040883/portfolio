import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../shared/services/language.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('scrollAnimated') animatedElements!: QueryList<ElementRef>;

  constructor(private viewportScroller: ViewportScroller, private languageService: LanguageService) {}

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  images = [
    {
      title: 'HTML',
      img: './../../assets/img/html.png'
    },
    {
      title: 'CSS',
      img: './../../assets/img/css.png'
    },
    {
      title: 'JavaScript',
      img: './../../assets/img/js.png'
    },
    {
      title: 'TypeScript',
      img: './../../assets/img/ts.png'
    },
    {
      title: 'Angular',
      img: './../../assets/img/angular.png'
    },
    {
      title: 'Firebase',
      img: './../../assets/img/firebase.png'
    },
    {
      title: 'GIT',
      img: './../../assets/img/git.png'
    },
    {
      title: 'Rest-Api',
      img: './../../assets/img/rest_api.png'
    },
    {
      title: 'Scrum',
      img: './../../assets/img/scrum.png'
    },
    {
      title: 'Material design',
      img: './../../assets/img/material_design.png'
    },
    {
      title: 'Continually learning',
      img: './../../assets/img/learning.png'
    }
  ];
  
  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
        } else {
          (entry.target as HTMLElement).classList.remove('visible');
        }
      });
    }, { threshold: 0.1 }); // Optionaler Threshold für präziseres Verhalten

    this.animatedElements.forEach(element => {
      observer.observe(element.nativeElement);
    });
  }
}
