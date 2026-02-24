import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {


  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.title.setTitle('Home - Your Brand');
    this.meta.updateTag({ name: 'description', content: 'Best services in Mumbai' });
  }

  services = [
    {
      title: 'SOFTWARE DEVELOPMENT',
      description: 'Our software development services cover web, cloud, and mobile applications.',
      slug: 'software-development'
    },
    {
      title: 'WEB DEVELOPMENT',
      description: 'Web application development services with highly skilled IT professionals to build scalable and modern solutions.',
      slug: 'web-development'
    },
    {
      title: 'APPLICATION DEVELOPMENT',
      description: 'Mobile app solutions customized for your business. We create future-readymobile experiences.',
      slug: 'application-development'
    },
    {
      title: 'CLOUD COMPUTING',
      description: 'On-demand availability of computing resources, storage, and processing power without direct management.',
      slug: 'cloud-computing'
    },
    {
      title: 'TRAINING AND CONSULTING',
      description: 'We empower businesses with strategic training programs and expert consulting services designed to enhance skills, optimize performance, and drive sustainable growth. Our tailored solutions help organizations adapt to market changes, improve operational efficiency, and achieve long-term success.',
      slug: 'training-consulting'
    },
    {
      title: 'BPO',
      description: 'Our Business Process Outsourcing (BPO) services streamline your operations byefficiently managing IT resources and business processes aligned with your organizational goals. We ensure cost-effective solutions, improved productivity, and seamless support so you can focus on your core business growth.',
      slug: 'bpo'
    }
  ];

  goToService(slug: string) {
    this.router.navigate(['/services', slug]);
  }

  

}
