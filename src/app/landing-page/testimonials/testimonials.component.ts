import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChildren('scrollAnimated') animatedElements!: QueryList<ElementRef>;
  currentIndex: number = 0;
  intervalId: any;

  reports = [
    {
      name: 'V. Schuster', position: 'Team Partner', image: './../../../assets/img/image_schuster.png'
    },
    {
      name: 'E.Eichinger', position: 'Team Partner', image: './../../../assets/img/image_eichinger.png'
    },
    {
      name: 'I.Nuber', position: 'Frontend Engineer', image: './../../../assets/img/image_nuber.png'
    },
  ];

  constructor(public languageService: LanguageService) {
  }

  ngOnInit() {
    // this.startAutoSwitch();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSwitch() {
    this.intervalId = setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.reports.length;
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.reports.length) % this.reports.length;
  }

  selectTestimonial(index: number) {
    this.currentIndex = index;
    this.resetInterval();
  }

  resetInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.startAutoSwitch();
  }

  isActive(index: number): boolean {
    return index === this.currentIndex;
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
    }, { threshold: 0.1 }); // Optionaler Threshold für präziseres Verhalten

    this.animatedElements.forEach(element => {
      observer.observe(element.nativeElement);
    });
  }

}
