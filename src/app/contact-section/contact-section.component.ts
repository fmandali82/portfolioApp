import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {

  @Input() contacts: any = {
    linkedin: "wcbjowbcuw",
    github: "bwovurwv"
  };

  senderEmail: string = '';
  emailContent: string = '';

  sendEmail() {
    console.log('Sender Email:', this.senderEmail);
    console.log('Email Content:', this.emailContent);

    const mailToUrl = `mailto:sam.b.ranasinghe@gmail.com`;
    window.open(mailToUrl);
  }
}
