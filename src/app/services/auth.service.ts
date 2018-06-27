import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) { 
    this.user$ = this.afAuth.authState;
  }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  ngOnInit(){
    // this.afAuth.auth.getRedirectResult().then(result => {
    //   if (result.user) {
    //     console.log(result);
    //     let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    //     this.router.navigate([returnUrl || '/']);
    //   }});
  }
}
