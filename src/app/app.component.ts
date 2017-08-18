import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: ["'../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class AppComponent {
  title = 'Opencart Website';
}
