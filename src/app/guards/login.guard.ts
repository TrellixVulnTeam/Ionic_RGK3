import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: Storage
  ){}

  async canActivate(){
    this.storage.create();
    const aux= await this.storage.get("isUserLoggedIn");
    if(aux){
      return true;
    }
    else{
      this.router.navigateByUrl('/login');
    }
    return false;
  }
  
}
