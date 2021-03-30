import { Component } from '@angular/core';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog';
import { AboutMeComponent } from './about-me/about-me.component';
import { ConnectViaComponent } from './connect-via/connect-via.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'singhsantosh.github.io';

  constructor(public dialog: MatDialog
    ) {}
}
