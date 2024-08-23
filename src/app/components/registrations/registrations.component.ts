import { Component } from '@angular/core';
import { InputRegisterComponent } from '../../repeats/input-register/input-register.component';
import { AuthService } from '../../services/auth.service';
import { logIn } from '../../graphql/graphql.queries';
import { Apollo } from 'apollo-angular';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ConfirmEmailComponent } from '../confirm-email/confirm-email.component';
@Component({
  selector: 'app-registrations',
  standalone: true,
  imports: [InputRegisterComponent, CommonModule, ConfirmEmailComponent],
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.scss',
})
export class RegistrationsComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  error: any;
  emailVerification: any;
  ifLogin: Boolean = true;
  loading: Boolean = false;

  constructor(private _auth: AuthService, private Apollo: Apollo) {}
  logIn() {
    let data = {
      email: this.email,
      password: this.password,
    };
    this._auth.login(data).subscribe(
      (result: any) => {
        this.loading = false;

        console.log('Login successful:', result);
        this.error = undefined;
      },
      (error: any) => {
        this.loading = false;

        if (error?.graphQLErrors) {
          let err = {
            message: error.graphQLErrors[0].message,
            code: error.graphQLErrors[0].extensions.code,
          };
          if (error.graphQLErrors[0].message == 'Email not confirmed') {
            this.emailVerification = data.email;
            this._auth.sendCode(data).subscribe((data: any) => {
              console.log(data);
            });
          }
          this.error = err;
        } else {
          console.log('Error:', error);
        }
      }
    );
  }

  signUp() {
    const createUserInput = {
      userName: this.userName,
      email: this.email,
      password: this.password,
    };

    this._auth.signUp({ createUserInput }).subscribe(
      (result: any) => {
        this.loading = false;

        console.log('Sign-up successful:', result);
        this.emailVerification = result.data.createUser.email;
        this.error = undefined;
      },
      (error: any) => {
        this.loading = false;

        if (error?.graphQLErrors) {
          let err = {
            message: error.graphQLErrors[0].message,
            code: error.graphQLErrors[0].extensions.code,
          };
          this.error = err;
        } else {
          console.log('Error:', error);
        }
      }
    );
  }
  auth() {
    this.loading = true;
    if (this.ifLogin) {
      this.logIn();
    } else {
      this.signUp();
    }
  }
  change() {
    this.emailVerification = undefined;
    this.error = undefined;
    this.ifLogin = !this.ifLogin;
    this.userName = '';
    this.email = '';
    this.password = '';
  }
}
