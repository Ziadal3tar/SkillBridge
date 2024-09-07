import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {
  tap:any = 'Profile'
  openOptions:boolean=false
  data:any[]=[
    {dataName:'First Name',dataValue:''},
    {dataName:'Last Name',dataValue:''},
    {dataName:'User Name',dataValue:''},
    {dataName:'Phone',dataValue:''},
  ]
  Skill:any
  func(){
    console.log(this.data[0].dataValue);

  }
}
