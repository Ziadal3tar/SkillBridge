import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-confirm-email',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './confirm-email.component.html',
  styleUrl: './confirm-email.component.scss',
})
export class ConfirmEmailComponent {
  constructor(private _auth: AuthService) {}
  @ViewChildren('codeInput') codeInputs!: QueryList<ElementRef>;
  arrayOfInputs = [0, 1, 2, 3, 4, 5];
  codeArray: string[] = Array(this.arrayOfInputs.length).fill('');
  activeInputIndex: number | null = null;
  @Input() emailVerification: any;
  loading: Boolean = false;
  confirmed: Boolean = false;
  notConfirmed: Boolean = false;

  onlyNumber(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  setActiveInput(index: number) {
    this.activeInputIndex = index;
  }

  removeActiveInput() {
    this.activeInputIndex = null;
  }

  moveToNextInput(event: KeyboardEvent, index: number) {
    const inputValue = (event.target as HTMLInputElement).value;

    if (event.key === 'Backspace' && inputValue.length === 0 && index > 0) {
      this.clearActiveClasses();
      this.codeInputs.toArray()[index - 1].nativeElement.value = '';
      this.codeInputs
        .toArray()
        [index - 1].nativeElement.classList.add('active');
      this.codeInputs.toArray()[index - 1].nativeElement.focus();
    } else if (inputValue.length === 1 && index < this.codeInputs.length - 1) {
      this.clearActiveClasses();
      this.codeInputs.toArray()[index + 1].nativeElement.focus();
      this.codeInputs
        .toArray()
        [index + 1].nativeElement.classList.add('active');
    } else if (
      inputValue.length === 1 &&
      index === this.codeInputs.length - 1
    ) {
      this.clearActiveClasses();
      this.codeInputs.toArray()[index].nativeElement.classList.add('active');
      this.send();
    }
  }

  clearActiveClasses() {
    this.codeInputs.toArray().forEach((input) => {
      input.nativeElement.classList.remove('active');
    });
  }

  send() {
    this.clearActiveClasses();
    this.notConfirmed = false;
    this.confirmed = false;
    this.loading = true;
    let data = {
      email: this.emailVerification,
      code: this.codeArray.join(''),
    };
    this._auth.confirm(data).subscribe(
      (data: any) => {
        console.log(data);
        if (data.data.confirmEmail == 'Email confirmed successfully') {
          this.loading = false;
          this.confirmed = true;
          this.notConfirmed = false;
        }
      },
      (error: any) => {
        this.clearAllInputs();
        this.codeInputs.toArray()[0].nativeElement.focus();
        this.notConfirmed = true;
        this.loading = false;
        this.confirmed = false;
      }
    );
  }
  clearAllInputs() {
    this.codeArray = Array(this.arrayOfInputs.length).fill('');
    this.codeInputs.toArray().forEach((input) => {
      input.nativeElement.value = '';
    });
  }
  change() {
    this.emailVerification = undefined;
    this.loading = false;
    this.confirmed = false;
    this.notConfirmed = false;
  }
}
