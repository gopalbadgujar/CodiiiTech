import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent {
  @Input() isPreview = false;

  showFullPolicy = false;

  expandPolicy() {
    this.showFullPolicy = true;
  }

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Home - Your Brand');
    this.meta.updateTag({ name: 'description', content: 'Best services in Mumbai' });
  }

}
