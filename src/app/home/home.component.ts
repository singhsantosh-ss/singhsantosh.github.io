import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ConnectViaComponent } from '../connect-via/connect-via.component';
import { EducationComponent } from '../education/education.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TechnicalSkillsComponent } from '../technical-skills/technical-skills.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
  }

  openDialogAboutMe() {
    this.dialog.closeAll();
    this.dialog.open(AboutMeComponent, {
      disableClose: true,
      panelClass: "card-wrapper",
    });
  }


  openDialogConnectVia() {
    this.dialog.closeAll();
    this.dialog.open(ConnectViaComponent, {
      disableClose: true,
      panelClass : "card-wrapper"
    });
  }

  openDialogworkExperience() {
    this.dialog.closeAll();
    this.dialog.open(WorkExperienceComponent, {
      disableClose: true,
      panelClass : "card-wrapper"
    });
  }

  openDialogworkProjects() {
    this.dialog.closeAll();
    this.dialog.open(ProjectsComponent, {
      disableClose: true,
      panelClass : "card-wrapper"
    });
  }

  openDialogworkEducation() {
    this.dialog.closeAll();
    this.dialog.open(EducationComponent, {
      disableClose: true,
      panelClass : "card-wrapper"
    });
  }

  openDialogworkTechnicalSkills() {
    this.dialog.closeAll();
    this.dialog.open(TechnicalSkillsComponent, {
      disableClose: true,
      panelClass : "card-wrapper"
    });
  }
  
}
