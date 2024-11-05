import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { ViewportScroller } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  
  @Output() menuSelected = new EventEmitter<void>();

  constructor(
    private viewportScroller: ViewportScroller, 
    public languageService: LanguageService, 
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.viewportScroller.setOffset([0, 150]);
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(fragment);
          }, 100);
        }
      });
  }

  onMenuClick() {
    this.menuSelected.emit();
  }

  switchLanguage(language: string) {   
    this.languageService.changeLanguage(language);
    this.languageService.actualLanguage = language;
  }
}
