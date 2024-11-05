import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../shared/services/language.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-legalnotice',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './legalnotice.component.html',
  styleUrl: './legalnotice.component.scss'
})
export class LegalnoticeComponent implements OnInit {
  constructor(
    private viewportScroller: ViewportScroller,
    private languageService: LanguageService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    }, 0);
  }
}
