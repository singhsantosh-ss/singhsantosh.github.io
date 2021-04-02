import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog';
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

  panelOpenState = false;


  onNavigateUpwork(){
    window.open("https://www.upwork.com/freelancers/~014b21313f1f1b504f", "_blank");
  }

  onNavigateGmail(){
    window.open("mailto:singhsantosh.edu.in@gmail.com", "_blank");
  }

  onNavigateGitHub(){
    window.open("https://github.com/singhsantosh-ss", "_blank");
  }

  onNavigateLinkedIn(){
    window.open("https://www.linkedin.com/in/santosh-singh-714b50124/", "_blank");
  }

  onNavigateTwitter(){
    window.open("https://twitter.com/ssinghsantosh", "_blank");
  }

  onNavigateSkype(){
    window.open("skype:singhsantosh.edu.in?chat", "_blank");
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
}
