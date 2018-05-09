import { Component } from '@angular/core';
import { ElectronService } from "ngx-electron";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //private _electron:Electron.
  constructor(private _electronService: ElectronService) {}

  lunchWindow() {
    this._electronService.shell.openExternal("www.google.com");
  }
}
