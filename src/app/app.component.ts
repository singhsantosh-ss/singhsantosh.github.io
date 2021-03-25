import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutMeComponent } from './about-me/about-me.component';
import { ConnectViaComponent } from './connect-via/connect-via.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor(public dialog: MatDialog
    ) {}

  openDialogAboutMe() {
    this.dialog.open(AboutMeComponent);
  }

  openDialogConnectVia() {
    this.dialog.open(ConnectViaComponent, {
      // height: '400px',
      // width: '600px',
    });
  }

  openDialogworkExperience() {
    this.dialog.open(WorkExperienceComponent);
  }

}
