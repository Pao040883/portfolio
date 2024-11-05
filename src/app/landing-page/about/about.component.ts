import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent implements AfterViewInit {
  @ViewChildren('scrollAnimated') animatedElements!: QueryList<ElementRef>;

  constructor(private languageService: LanguageService) {}

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
