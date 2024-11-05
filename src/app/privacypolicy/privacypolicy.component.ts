import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-privacypolicy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.scss'
})
export class PrivacypolicyComponent {
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
