import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ContactMeModel } from 'src/Models/ContactMe';
import { ContactMeService } from 'src/Services/contact-me.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  //Contact Me Form
  FormContactMe: UntypedFormGroup;
  formContactName = new UntypedFormControl();
  formContactLastName = new UntypedFormControl();
  formContactEmail = new UntypedFormControl();
  formContactPhone = new UntypedFormControl();
  formContactDescription = new UntypedFormControl();

  statusEnvio: any;
  clearFormName:string;

  constructor(
    private FormContactMeBuilder: UntypedFormBuilder,
    private requestAPIFirebase: ContactMeService
  ) {
    this.FormContactMe = this.FormContactMeBuilder.group({
      formContactName: ['', Validators.required],
      formContactLastName: ['', Validators.required],
      formContactEmail: ['', Validators.required],
      formContactPhone: ['', Validators.required],
      formContactDescription: ['', Validators.required],
    });
  }

  CreatePostJob() {
    const ContactInformation: ContactMeModel = {
      name: this.FormContactMe.get('formContactName').value,
      lastName: this.FormContactMe.get('formContactLastName').value,
      emailAddress: this.FormContactMe.get('formContactEmail').value,
      phone: this.FormContactMe.get('formContactPhone').value,
      description: this.FormContactMe.get('formContactDescription').value,
    };

    const confirmMessage = confirm(
      'DO YOU WANT TO SEND THE REQUEST TO OUR TEAM?'
    );

    
  }

  ngOnInit(): void {}
}
