
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sortoption: string = 'mostRecent';
  showFavorites: boolean = false;
  isBlogRoute: boolean = false; // Determines if the current route is Blog

  @Output() searchEvent = new EventEmitter<string>();
  @Output() sortChangeEvent = new EventEmitter<string>();
  @Output() addBlogEvent = new EventEmitter<void>();
  @Output() toggleFavoritesEvent = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateRoute(this.router.url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateRoute(event.urlAfterRedirects);
      }
    });
  }

  private updateRoute(url: string): void {
    this.isBlogRoute = url.includes('/blog');
  }

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchEvent.emit(target.value);
  }

  onSortChange(sortOption: string): void {
    this.sortChangeEvent.emit(sortOption);
  }

  addBlog(): void {
    this.addBlogEvent.emit();
  }

  toggleFavorites(): void {
    this.showFavorites = !this.showFavorites;
    this.toggleFavoritesEvent.emit(this.showFavorites);
  }
}
