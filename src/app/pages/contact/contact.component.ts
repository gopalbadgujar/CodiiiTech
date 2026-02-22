import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  loading = false;


  constructor(private title: Title, private meta: Meta, private notification: NotificationService
  ) { }

  ngOnInit() {
    this.title.setTitle('Home - Your Brand');
    this.meta.updateTag({ name: 'description', content: 'Best services in Mumbai' });
  }


  form = {
    name: '',
    email: '',
    mobile: '',
    address: '',
    message: ''
  };

  submitForm() {
    this.loading = true;

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScqzlcWaYl8Jnx5o9hrj4NPfXpmunt63VRpNum1Mqyc7_mblg/formResponse';

    const formData = new FormData();
    formData.append('entry.1434008827', this.form.name);
    formData.append('entry.1327517062', this.form.email);
    formData.append('entry.497248504', this.form.mobile);
    formData.append('entry.262763108', this.form.address);
    formData.append('entry.666453298', this.form.message);

    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    }).then(() => {
      this.loading = false;
      this.notification.success('Thank you for contacting CodiiiTech!');
      // Reset form
      this.form = {
        name: '',
        email: '',
        mobile: '',
        address: '',
        message: ''
      };
    }).catch(() => {
      this.loading = false;
      this.notification.error('Something went wrong. Please try again.');
    });
  }
}
