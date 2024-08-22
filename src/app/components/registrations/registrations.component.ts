import { Component } from '@angular/core';
import { InputRegisterComponent } from '../../repeats/input-register/input-register.component';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-registrations',
  standalone: true,
  imports: [InputRegisterComponent],
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.scss',
})
export class RegistrationsComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  constructor(private _auth: AuthService) {}
  logIn() {
    let data = {
      // userName: this.userName,
      email: this.email,
      password: this.password,
    };
    console.log(data);

    this._auth.login(data)
  }
}
