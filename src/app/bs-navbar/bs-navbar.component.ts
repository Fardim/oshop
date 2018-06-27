import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  // user: firebase.User;
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) { 
    //this.afAuth.authState.subscribe(user=> this.user = user);
    this.user$ = this.afAuth.authState;
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
