import { Component } from '@angular/core';
import { ElectronService } from "ngx-electron";
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  //private _electron:Electron.
  constructor(private _electronService: ElectronService,private appService: AppService) {}

  lunchWindow() {
    this._electronService.shell.openExternal("www.google.com");
  }

   ngOnInit() {
   console.log("I am initialized.")
	    this.appService.getData().subscribe(
	      data => { this.foods = data},
	      err => console.error(err),
	      () => console.log('done loading foods')
	    );
   }
   
  }

