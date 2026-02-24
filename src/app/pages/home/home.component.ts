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
  imports: [CommonModule, RouterModule, FormsModule, PortfolioComponent, ServicesComponent, AboutComponent, CareerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Home - Your Brand');
    this.meta.updateTag({ name: 'description', content: 'Best services in Mumbai' });
  }


  features = [
    {
      title: 'Fast Development',
      desc: 'Delivery-focused teams using modern stacks',
      details: `
      • Agile sprint execution
      • CI/CD automation
      • Modern stack (Angular, Node, Cloud)
      • Performance optimization
    `,
      flow: [
        'Discovery',
        'Architecture',
        'Development',
        'Testing',
        'Deployment'
      ],
      expanded: false
    },
    {
      title: 'Reliable Engineering',
      desc: 'Tested, maintainable, scalable systems',
      details: `
      • Clean architecture
      • Automated testing
      • Code reviews
      • Monitoring & logging
    `,
      flow: [
        'Design Review',
        'Code Standards',
        'QA Automation',
        'Release'
      ],
      expanded: false
    },
    {
      title: 'Beautiful Design',
      desc: 'UX-led interfaces that delight users',
      details: `
      • UX Research
      • Wireframing
      • UI Prototyping
      • User Testing
    `,
      flow: [
        'Research',
        'Wireframe',
        'Prototype',
        'User Testing',
        'Launch'
      ],
      expanded: false
    }
  ];

  toggleFeature(feature: any) {
  this.features.forEach(f => {
    if (f !== feature) f.expanded = false;
  });
  feature.expanded = !feature.expanded;
}

// ----------------------------------------------------------------------------------------------

services = [
  {
    title: 'Web Engineering',
    subtitle: 'Scalable Digital Platforms',
    desc: 'High-performance websites & enterprise-grade applications.',
    icon: '/assets/images/webdevelopment.jpg',
    highlights: [
      'Angular & React Apps',
      'Headless CMS',
      'E-Commerce Architecture',
      'Performance Optimization'
    ],
    tech: ['Angular', 'Node.js', 'AWS'],
    expanded: false
  },
  {
    title: 'Mobile Innovation',
    subtitle: 'Cross-Platform Experiences',
    desc: 'Native-feel iOS & Android applications built for scale.',
    icon: '/assets/images/mobileapps2.jpg',
    highlights: [
      'Flutter & React Native',
      'App Store Deployment',
      'Push & Realtime Systems',
      'Secure API Integration'
    ],
    tech: ['Flutter', 'Firebase', 'Swift'],
    expanded: false
  },
  {
    title: 'Product Design',
    subtitle: 'UX Strategy & Interface Systems',
    desc: 'User-first research driven digital design systems.',
    icon: '/assets/images/productdesign1.webp',
    highlights: [
      'UX Research',
      'Wireframing',
      'Interactive Prototypes',
      'Design Systems'
    ],
    tech: ['Figma', 'Framer', 'Adobe XD'],
    expanded: false
  }
];

toggleService(service: any) {
  this.services.forEach(s => {
    if (s !== service) s.expanded = false;
  });
  service.expanded = !service.expanded;
}

// ----------------------------------------------------------------------------------------------

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
