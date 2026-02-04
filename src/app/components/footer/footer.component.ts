import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from '../../pages/privacy/privacy.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule, PrivacyComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  showPrivacy = false;
  currentYear = new Date().getFullYear();

  togglePrivacy() {
    this.showPrivacy = !this.showPrivacy;
  }
}
