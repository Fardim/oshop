import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  // user: firebase.User;

  constructor(public auth: AuthService) { 
    //this.afAuth.authState.subscribe(user=> this.user = user);
    
  }
  logout(){
    this.auth.logout();
  }
}
