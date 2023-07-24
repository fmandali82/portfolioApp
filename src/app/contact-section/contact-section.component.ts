import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {

  sendEmail() {

    const mailToUrl = `mailto:sam.b.ranasinghe@gmail.com`;
    window.open(mailToUrl);
    
  }

}
