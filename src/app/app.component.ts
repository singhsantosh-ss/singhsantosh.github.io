import { Component } from '@angular/core';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog';
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
    this.dialog.open(AboutMeComponent, {
      disableClose: true,
      panelClass: "card-wrapper",
    });
  }

  openDialogConnectVia() {
    this.dialog.open(ConnectViaComponent, {
      disableClose: true,
      panelClass : "card-wrapper"
    });
  }

  openDialogworkExperience() {
    this.dialog.open(WorkExperienceComponent, {
      disableClose: true,
      panelClass : "card-wrapper"
    });
  }

}
