import { AngularFireObject } from 'angularfire2/database';
import { AppUser } from './../models/app-user';
import { UserService } from './user.service';
import { Observable} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurd implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate() : Observable<boolean>{
    // return this.auth.user$.pipe(map(user=>{
    //   return this.userService.get(user.uid)..map((appuser:AppUser)=> { return appuser.isAdmin } );
    // }))
    // https://stackoverflow.com/questions/47422348/error-ts2345-angular-angularfire2-checking-if-user-isadmin
    
    // return this.auth.user$.pipe(switchMap(user => this.userService.get(user.uid)))
    //   .pipe(map((appuser:AppUser)=> appuser.isAdmin))
    return this.auth.appUser$
      .pipe(map((appuser:AppUser)=> appuser.isAdmin))
  }
}
