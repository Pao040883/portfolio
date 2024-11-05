import { provideRouter, Routes, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

export const routes: Routes = [
    {path: "", component: LandingPageComponent, title:"Portfolio - Patrick Offermanns"},
    {path: "legalnotice", component: LegalnoticeComponent, title:"Impressum - Patrick Offermanns"},
    {path: "privacypolicy", component: PrivacypolicyComponent, title:"Datenschutz - Patrick Offermanns"}
];

export const routerProviders = [
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // Stellt die Scroll-Position wieder her
        anchorScrolling: 'enabled', // Ermöglicht das Scrollen zu Ankern
      })
    )
  ];