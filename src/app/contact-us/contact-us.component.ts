import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
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
  FormContactMe: FormGroup;
  formContactName = new FormControl();
  formContactLastName = new FormControl();
  formContactEmail = new FormControl();
  formContactPhone = new FormControl();
  formContactDescription = new FormControl();

  statusEnvio: any;
  clearFormName:string;

  constructor(
    private FormContactMeBuilder: FormBuilder,
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

    if (confirmMessage) {
      this.requestAPIFirebase.CreatePost(ContactInformation);

      this.statusEnvio = true;

      this.clearFormName = '';
    } else {
      alert('THE REQUEST HAS NOT SENDED!');
    }
  }

  ngOnInit(): void {}
}
