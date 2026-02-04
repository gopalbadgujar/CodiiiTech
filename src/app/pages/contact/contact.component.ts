import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  loading = false;

  form = {
    name: '',
    email: '',
    mobile: '',
    address: '',
    message: ''
  };

  submitForm() {
    if (this.loading) return;

    this.loading = true;

    fetch(
      'https://script.google.com/macros/s/AKfycbx8sjwjRx7ix8A8lv_VWX3K-tVw0CPZ3pG3Ol1djWmMWmhefxJqdkHhyMwfnd6caz166w/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.form)
      }
    )
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        alert('Thank you! We will contact you soon.');
        this.resetForm();
      })
      .catch(error => {
        console.error('Contact form error:', error);
        alert('Something went wrong. Please try again.');
      })
      .finally(() => {
        this.loading = false;
      });
  }

  private resetForm() {
    this.form = {
      name: '',
      email: '',
      mobile: '',
      address: '',
      message: ''
    };
  }
}
