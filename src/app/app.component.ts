import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ProgressbarType } from 'ngx-bootstrap/progressbar';
import { zip } from 'rxjs';


 
interface IStack {
  type: ProgressbarType;
  label: string;
  value: number;
  max: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // Use styleUrls instead of styleUrl
  providers: [
    FormBuilder,
    { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }
  ]
})

export class AppComponent {

  // selected?: string;
  constructor(public fbobj:FormBuilder)
  {
    this.randomStacked();

  }
  
  MarvellousForm=this.fbobj.group(
  {
    firstName:['Jay',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z ]*')]],
    lastName:['',[Validators.required,Validators.minLength(2)]],
    email:['',[Validators.required]],
    phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]],
    Address:['',[Validators.required, Validators.minLength(20)]],
    state:['',[Validators.required]],
    City:['',[Validators.required,Validators.minLength(4)]],
    zip:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]*')]],
    comments:['',[Validators.required, Validators.minLength(20)]]
  }
  );
  
  

  type?: string;
  stacked: IStack[] = [];

  randomStacked(): void {
    const types = ['success', 'info', 'warning', 'danger'];
 
    this.stacked = [];
    const n = Math.floor(Math.random() * 4 + 1);
    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * 4);
      const value = Math.floor(Math.random() * 27 + 3);
      this.stacked.push(<IStack>{
        value,
        type: types[index],
        label: value + ' %'
      });
    }
  }


  selected?: string;
  states: string[] = [
    'Maharashtra',
    'Uttar Pradesh',
    'Gujarat',
  ];


}
