import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  // Dropdown filters
  selectedDepartment: string = 'all';
  selectedLocation: string = 'all';

  constructor(private title: Title, private meta: Meta) {}

ngOnInit() {
  this.title.setTitle('Home - Your Brand');
  this.meta.updateTag({ name: 'description', content: 'Best services in Mumbai' });
}
  // Job data
  jobs: Job[] = [
    {
      title: 'Frontend Developer',
      department: 'frontend',
      location: 'mumbai',
      type: 'Full-Time',
      description: 'Looking for a skilled frontend developer with experience in Angular, React, or Vue. Must be passionate about UI/UX and building scalable web applications.'
    },
    {
      title: 'Backend Developer',
      department: 'backend',
      location: 'remote',
      type: 'Full-Time',
      description: 'We are seeking a backend developer experienced in Node.js, Express, and MongoDB. You will design APIs and work on cloud-based applications.'
    },
    {
      title: 'UI/UX Designer',
      department: 'design',
      location: 'navi-mumbai',
      type: 'Contract',
      description: 'Creative designer with experience in Figma, Adobe XD, and prototyping tools. Work closely with developers to create beautiful, user-friendly designs.'
    },
    {
      title: 'DevOps Engineer',
      department: 'devops',
      location: 'mumbai',
      type: 'Full-Time',
      description: 'Responsible for CI/CD, cloud infrastructure, and monitoring systems. Experience with AWS, Docker, Kubernetes is a must.'
    },
    {
      title: 'QA Engineer',
      department: 'qa',
      location: 'remote',
      type: 'Full-Time',
      description: 'Ensure the quality of web and mobile applications by writing automated tests and performing manual testing.'
    },
    {
      title: 'Project Manager',
      department: 'pm',
      location: 'mumbai',
      type: 'Full-Time',
      description: 'Manage multiple projects, coordinate between teams, and ensure timely delivery. Agile/Scrum experience preferred.'
    }
  ];

  googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf8LcOE7wuwC0FRQ6RyTF6lYTGbZf8C4iJYyTGrimqx13PPPA/viewform?usp=publish-editor';

openForm() {
  window.open(this.googleFormUrl, '_blank');
}
  // Filter logic
  get filteredJobs(): Job[] {
    return this.jobs.filter(job => {
      const matchesDept = this.selectedDepartment === 'all' || job.department === this.selectedDepartment;
      const matchesLoc = this.selectedLocation === 'all' || job.location === this.selectedLocation;
      return matchesDept && matchesLoc;
    });
  }
}
