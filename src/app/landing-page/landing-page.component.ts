import { Component, ɵɵdeferOnViewport } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { TranslateService } from '@ngx-translate/core';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroComponent, AboutComponent, SkillsComponent, PortfolioComponent, TestimonialsComponent, ContactComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
    this.translate.use('de'); 
  }
}
