import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  currentIndex = 0;

  testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Founder & CEO at TechStartup India',
      quote: 'CodiiiTech transformed our vision into reality. Their team is professional, dedicated, and delivered beyond our expectations.',
      initials: 'RS',
      color: '#7c3aed',
      project: 'Web Application',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Product Manager at FinTech Solutions',
      quote: 'Outstanding technical expertise and exceptional communication. They made the entire development process smooth and transparent.',
      initials: 'PP',
      color: '#0ea5e9',
      project: 'Mobile App',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      role: 'CTO at E-Commerce Giants',
      quote: 'Best decision we made for our cloud migration. The team showed great understanding of our requirements.',
      initials: 'AK',
      color: '#22c55e',
      project: 'Cloud Migration',
      rating: 4
    }
  ];

  ngOnInit() {
    setInterval(() => {
      this.next();
    }, 6000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

}