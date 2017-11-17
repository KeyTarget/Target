import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Target</strong> by <a href="https://github.com/orgs/KeyTarget/dashboard">Key Target</a>.
        </p>
      </div>
    </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
