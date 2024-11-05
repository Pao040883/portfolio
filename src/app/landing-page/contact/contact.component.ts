import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../../shared/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'safeHtml', standalone: true })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, SafeHtmlPipe], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    termsAccepted: false
  };

  constructor(public languageService: LanguageService) {
  }

  mailTest = false;
  showModal = false;

  post = {
    endPoint: 'https://offermanns.online/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.checkValidation(ngForm);
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.showModal = true;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      this.showModal = true;
      ngForm.resetForm();
    }
  }

  checkValidation(ngForm: NgForm) {
    if (!this.contactData.termsAccepted) {
      ngForm.controls['termsAccepted'].markAsTouched();
    }
    if (!this.contactData.name) {
      ngForm.controls['name'].markAsTouched();
    }
    if (!this.contactData.email) {
      ngForm.controls['email'].markAsTouched();
    }
    if (!this.contactData.message) {
      ngForm.controls['message'].markAsTouched();
    }
  }

  closeModal() {
    this.showModal = false;
  }

}
