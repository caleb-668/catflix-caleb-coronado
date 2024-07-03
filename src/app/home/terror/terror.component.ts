import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terror',
  standalone: true,
  imports: [],
  templateUrl: './terror.component.html',
  styleUrl: './terror.component.css'
})
export class TerrorComponent {
  constructor(private router: Router) {}

  pelis(url: string): void {
    this.router.navigate(['/watch'], { queryParams: { videoUrl: url } });
  }
}
