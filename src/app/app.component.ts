import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>

  <section class="section">
    <div class="container">
        <router-outlet></router-outlet>
    </div>
  </section>

  <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
