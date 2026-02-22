import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private title: Title, private meta: Meta) {}

ngOnInit() {
  this.title.setTitle('Home - Your Brand');
  this.meta.updateTag({ name: 'description', content: 'Best services in Mumbai' });
}
}
