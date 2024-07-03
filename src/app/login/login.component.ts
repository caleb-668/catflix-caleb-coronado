import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService, Credential } from '../service/auth.service';
import { Router } from '@angular/router';
import { ButtonProviders } from './button-providers/button-providers.component';

interface SignUp {
  names: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

interface SignIn {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, ButtonProviders],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  generateSpaceLayer(size: string, selector: string, totalStars: number, duration: string) {
    const COLOR: string[] = ["#fff", "#fff2", "#fff4", "#fffc"];
    const layer: string[] = [];
    for (let i = 0; i < totalStars; i++) {
      const color = COLOR[Math.floor(Math.random() * COLOR.length)];
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
    }
    const container = document.querySelector(selector) as HTMLElement;
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
  }

  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  @ViewChild('register', { static: true }) registerBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('login', { static: true }) loginBtn!: ElementRef<HTMLButtonElement>;

  form: FormGroup<SignUp>;
  formT: FormGroup<SignIn>;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private _router: Router) {
    this.form = this.formBuilder.group({
      names: this.formBuilder.control('', {
        validators: Validators.required,
        nonNullable: true
      }),
      email: this.formBuilder.control('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true
      }),
      password: this.formBuilder.control('', {
        validators: Validators.required,
        nonNullable: true
      })
    });

    this.formT = this.formBuilder.group({
      email: this.formBuilder.control('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true
      }),
      password: this.formBuilder.control('', {
        validators: Validators.required,
        nonNullable: true
      })
    });
  }

  ngOnInit(): void {
    this.registerBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.add('active');
    });

    this.loginBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.remove('active');
    });


    this.generateSpaceLayer("2px", ".space-1", 200, "25s");
    this.generateSpaceLayer("4px", ".space-2", 100, "20s");
    this.generateSpaceLayer("6px", ".space-3", 25, "15s");
  }

  async signUp(): Promise<void> {
    if (this.form.invalid) return;

    const credential: Credential = {
      email: this.form.value.email || "",
      password: this.form.value.password || ""
    };
    try {
      const userCredentials = await this.authService.signUpWithEmailAndPassword(credential);
      console.log(userCredentials);
      this._router.navigateByUrl('/home');
    } catch (error) {
      console.error(error);      
    }
  }

  async signIn(): Promise<void> {
    if (this.formT.invalid) return;
    
    const credential: Credential = {
      email: this.formT.value.email || "",
      password: this.formT.value.password || ""
    };
    /* AQUI SE OBTIENE EL USER INGRESADO console.log(credential);*/    
  try {
      await this.authService.signInWithEmailAndPassword(credential);
      this._router.navigateByUrl('/home');
    } catch (error) {
      console.error(error);
    }
  }
  
}
