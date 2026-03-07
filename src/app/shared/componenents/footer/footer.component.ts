import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrivacyComponent } from '../../../features/home/pages/privacy/privacy.component';
import { CommingSoonComponent } from '../comming-soon/comming-soon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule, PrivacyComponent, CommingSoonComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  showPrivacy = false;
  currentYear = new Date().getFullYear();

  togglePrivacy() {
    this.showPrivacy = !this.showPrivacy;
  }

  // Scroll to top manually (for logo click)
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
