import { Component, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isScrolled = false;

  constructor(
    private router: Router,
    private scroller: ViewportScroller,
  ) {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  goToSection(section: string) {
    if (this.router.url === '/') {
      this.scroll(section);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scroll(section);
        }, 200);
      });
    }
  }

  scroll(section: string) {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
