import { Component } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule], 
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  constructor(private viewportScroller: ViewportScroller, private languageService: LanguageService) {}

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}