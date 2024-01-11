import { Component } from '@angular/core';
import { AppHeaderComponent } from 'src/app/components/app-header/app-header.component';

@Component({
  standalone: true,
  selector   : 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls  : ['./page-not-found.component.scss'],
  imports: [
    AppHeaderComponent
  ],
})
export class PageNotFoundComponent {

}
