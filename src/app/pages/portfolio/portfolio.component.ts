import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private title: Title, private meta: Meta) {}

ngOnInit() {
  this.title.setTitle('Home - Your Brand');
  this.meta.updateTag({ name: 'description', content: 'Best services in Mumbai' });
}


}
