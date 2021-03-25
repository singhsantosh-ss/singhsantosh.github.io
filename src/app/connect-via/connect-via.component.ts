import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect-via',
  templateUrl: './connect-via.component.html',
  styleUrls: ['./connect-via.component.css']
})
export class ConnectViaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
  
}
