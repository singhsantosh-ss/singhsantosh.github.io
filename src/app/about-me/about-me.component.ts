import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConnectViaComponent } from '../connect-via/connect-via.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogConnectVia() {
    this.dialog.closeAll();
    this.dialog.open(ConnectViaComponent, {
      disableClose: true,
      panelClass : "card-wrapper"
    });
  }

}
