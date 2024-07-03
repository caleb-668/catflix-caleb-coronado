import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  redirectToHome(): void {
    window.location.href = '/home';
  }
  userEmail: string | null = null;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.currentUserEmail$.subscribe(email => {
      this.userEmail = email;
      this.isAdmin = this.authService.isAdmin(email);
    });
  }

  async logOut(): Promise<void> {
    try {
      await this.authService.logOut();
      this.router.navigateByUrl('/');
    } catch (error) {
      console.error(error);
    }
  }
  redirectToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
