import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with validators
    this.emailForm = this.fb.group({
      senderEmail: ['', [Validators.required, Validators.email]],
      emailContent: ['', Validators.required]
    });
  }

  sendEmail() {
    const senderEmailControl = this.emailForm.get('senderEmail');
    const emailContentControl = this.emailForm.get('emailContent');

    if (senderEmailControl && emailContentControl) {
      console.log('Sender Email:', senderEmailControl.value);
      console.log('Email Content:', emailContentControl.value);

      // const mailToUrl = `mailto:sam.b.ranasinghe@gmail.com`;
      // window.open(mailToUrl);
    }
    else {
      console.error('Form is not valid.');
    }
  }
}
