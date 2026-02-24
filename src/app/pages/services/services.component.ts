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
      description: 'Web application development services with highly skilled IT professionals.',
      slug: 'web-development'
    },
    {
      title: 'APPLICATION DEVELOPMENT',
      description: 'Mobile app solutions customized for your business.',
      slug: 'application-development'
    },
    {
      title: 'CLOUD COMPUTING',
      description: 'On-demand availability of computing resources.',
      slug: 'cloud-computing'
    },
    {
      title: 'TRAINING AND CONSULTING',
      description: 'Strategic training programs and expert consulting services.',
      slug: 'training-consulting'
    },
    {
      title: 'BPO',
      description: 'Business Process Outsourcing services to streamline operations.',
      slug: 'bpo'
    }
  ];

  goToService(slug: string) {
    this.router.navigate(['/services', slug]);
  }

  

}
