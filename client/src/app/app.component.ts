import { Component,OnInit } from '@angular/core';
import { ElectronService } from "ngx-electron";
import { AppService } from './app.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  food;
  loginForm;
  
  //private _electron:Electron.
  constructor(private _electronService: ElectronService,private appService: AppService,private formBuilder: FormBuilder,) {
    this.createForm();
  }

  lunchWindow() {
    this._electronService.shell.openExternal("www.google.com");
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      name: [''],
      email : [''],
      phone: ['']
    });
  }

  onLoginSubmit() {
    const user = {
      email: this.loginForm.get('email').value,
      phone: this.loginForm.get('phone').value,
      name: this.loginForm.get('name').value
    };
    console.log(user);
    this.appService.getData(user).subscribe(data => {
      console.log(data);
    });
  }
   ngOnInit() {
   console.log("I am initialized."); 
  //  this.appService.getData().subscribe(data => {
  //   console.log(data);
  //   }); 
    
   }
   
  }

