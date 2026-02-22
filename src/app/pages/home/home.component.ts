import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { CareerComponent } from '../career/career.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,PortfolioComponent,ServicesComponent,AboutComponent, CareerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private title: Title, private meta: Meta) {}

ngOnInit() {
  this.title.setTitle('Home - Your Brand');
  this.meta.updateTag({ name: 'description', content: 'Best services in Mumbai' });
}


  features = [
    { title: 'Fast Development', desc: 'Delivery-focused teams using modern stacks' },
    { title: 'Reliable Engineering', desc: 'Tested, maintainable, scalable systems' },
    { title: 'Beautiful Design', desc: 'UX-led interfaces that delight users' }
  ];

  services = [
    { title: 'Web Development', desc: 'Custom websites & e-commerce', icon: '/assets/images/webdevelopment.jpg' },
    { title: 'Mobile Apps', desc: 'iOS & Android experiences', icon: '/assets/images/mobileapps2.jpg' },
    { title: 'Product Design', desc: 'Research, UX, UI & prototyping', icon: '/assets/images/productdesign1.webp' }
  ];

  portfolio = [
    { name: 'Shopify Plus App', tag: 'E-Commerce', img: '/assets/companyLogo_1.png' },
    // { name: 'FinTech Dashboard', tag: 'SaaS', img: '/assets/companyLogo_1.png' },
    // { name: 'Healthcare App', tag: 'Mobile', img: '/assets/companyLogo_1.png' }
  ];

  testimonials = [
    { quote: 'They launched our MVP in 8 weeks and exceeded expectations.', author: 'Sarah K, CEO' },
    { quote: 'Great team, high quality and excellent communication.', author: 'Michael B, CTO' }
  ];

  pricing = [
    { name: 'Starter', price: '$2.5k', bullets: ['Discovery', 'Prototype', '2 weeks support'] },
    { name: 'Growth', price: '$8k', bullets: ['Design & Build', '3 months support', 'Analytics'] },
    { name: 'Scale', price: '$20k', bullets: ['Full product', 'Dedicated team', 'SLA'] }
  ];

  newsletterEmail = '';

  onSubscribe() {
    if (!this.newsletterEmail) {
      alert('Please enter an email.');
      return;
    }
    console.log('Subscribe:', this.newsletterEmail);
    alert('Thanks — we’ll be in touch!');
    this.newsletterEmail = '';
  }
}
