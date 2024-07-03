import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estrenos',
  standalone: true,
  imports: [],
  templateUrl: './estrenos.component.html',
  styleUrl: './estrenos.component.css'
})
export class EstrenosComponent {
  constructor(private router: Router) {}

  pelis(url: string): void {
    this.router.navigate(['/watch'], { queryParams: { videoUrl: url } });
  }
}
