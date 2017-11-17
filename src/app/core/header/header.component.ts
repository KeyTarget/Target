import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a routerLink="/" class="navbar-item">Target</a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-end">
            <a routerLink="/" class="navbar-item">Search</a>
            <a routerLink="/directory" class="navbar-item">Directory</a>
            <a routerLink="/profile" class="navbar-item">Profile</a>
            <a class="navbar-item">Logout</a>
          </div>
        </div>

        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
