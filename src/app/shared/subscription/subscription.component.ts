import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  standalone: true,
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {

  constructor(private router: Router) {}

  subscribe() {
    alert("Payment Gateway Integration Required");

    // After payment success:
    localStorage.setItem("subscription", "active");

    this.router.navigate(['/projects']);
  }
}