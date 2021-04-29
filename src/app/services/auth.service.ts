import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  public user = {
    id: -1,
    username: '',
    password: '',
    avatar: ''
  }

  constructor(private storage: NativeStorage,
    private router: Router) {
  }

  public async logout() {
    this.user = {
      id: -1,
      username: '',
      password: '',
      avatar: ''
    }
    await this.storage.setItem("user", this.user);
    this.router.navigate(["login"]);
  }

  public async login(user: User) {
    this.user = await this.storage.setItem("user", user);
    this.router.navigate(["/"]);
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.isLogged()) {
      this.router.navigate(["welcome"]);
      return false;
    }
    return true;
  }

  isLogged():boolean{
    if(this.user.id!=-1){
      return true;
    }else{
      return false;
    }
  }

  getUser() {
    return this.user;
  }
}
