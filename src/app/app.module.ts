import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, 
  MatSlideToggleModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatCardModule, MatChipsModule,
    MatStepperModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule,
    MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,MatProgressBarModule,

  MatProgressSpinnerModule, MatRippleModule, MatSidenavModule, MatSnackBarModule, MatSortModule,
  MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, MatCommonModule
} from '@angular/material'

import { PortalModule } from '@angular/cdk/portal';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ConnectViaComponent } from './connect-via/connect-via.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ConnectViaComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    TechnicalSkillsComponent
  ],
  entryComponents: [
    AboutMeComponent,
    ConnectViaComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    TechnicalSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatBadgeModule,
    MatBottomSheetModule, 
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatStepperModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatCommonModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    FlexLayoutModule
  ],
 
  exports: [ AboutMeComponent ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
