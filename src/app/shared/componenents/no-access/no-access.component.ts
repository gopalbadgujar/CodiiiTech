import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-access',
  standalone: true,
  imports: [],
  templateUrl: './no-access.component.html',
  styleUrl: './no-access.component.css'
})
export class NoAccessComponent {

  constructor(private router: Router) {}

goHome() {
  this.router.navigate(['/']);
}
goToContact() {
  this.router.navigate(['/contact']);
}
}
