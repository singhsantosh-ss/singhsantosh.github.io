import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor(public dialog: MatDialog
    ) {}

  openDialog() {
    this.dialog.open(AppComponent);
  }
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me/about-me.component.html',
  styleUrls: ['./about-me/about-me.component.css']
})
export class AboutMeComponent {}
