import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './input-register.component.html',
  styleUrl: './input-register.component.scss',
})
export class InputRegisterComponent {
  @Input() data: string = '';
  @Output() dataChange = new EventEmitter<string>();
   @Input()placeholder:any
   @Input()span:any
   @Input()icon:any
   @Input()login:any
   @Input()type:any = 'text'

   @Input()Error:any 
  onFocus(event: any) {
    const parentElement = event.target.parentElement;
    const nextElementSibling = event.target.nextElementSibling;
    nextElementSibling.classList.add('activeIcon');
    parentElement.classList.add('active');
  }

  onBlur(event: any) {
    const parentElement = event.target.parentElement;
    const nextElementSibling = event.target.nextElementSibling;
    parentElement.classList.remove('active');
    nextElementSibling.classList.remove('activeIcon');
  }
  ngOnChanges() {
    this.dataChange.emit(this.data);
  }
}
