import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';

@Component({
  standalone: true,
  selector   : 'app-root',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.scss'],
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, AppHeaderComponent],
})
export class HomeComponent {
}
