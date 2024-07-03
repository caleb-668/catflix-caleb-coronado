import { Injectable, inject } from "@angular/core";
import { Auth, UserCredential, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "@angular/fire/auth";
import { BehaviorSubject, retry } from 'rxjs';

export interface Credential {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  readonly authState$ = authState(this.auth);
  private currentUserEmail = new BehaviorSubject<string | null>(null);
  currentUserEmail$ = this.currentUserEmail.asObservable();
  private adminEmail = 'churco1235@gmail.com';

  constructor() {
    this.authState$.subscribe(user => {
      this.currentUserEmail.next(user?.email || null);
    });
  }

  signUpWithEmailAndPassword(credential: Credential): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, credential.email, credential.password);
  }

  signInWithEmailAndPassword(credential: Credential): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, credential.email, credential.password);
  }

  logOut(): Promise<void> {
    return this.auth.signOut().then(() => {
      this.currentUserEmail.next(null);
    });
  }

  signInWithGoogleProvider(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return this.callPopUp(provider);
  }

  signInWithGithubProvider(): Promise<UserCredential> {
    const provider = new GithubAuthProvider();
    return this.callPopUp(provider);
  }

  private async callPopUp(provider: any): Promise<UserCredential> {
    try {
      const result = await signInWithPopup(this.auth, provider);
      return result;
    } catch (error: any) {
      throw error;
    }
  }
  isAdmin(email: string | null): boolean {
    return email === this.adminEmail;
  }
  isAuthenticated(): boolean {
    const user = this.auth.currentUser;
    return user !== null;
  }
}
