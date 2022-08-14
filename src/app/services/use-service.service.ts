import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseServiceService {

  debugUsername:string = "debug_user";
  debugEmail:string = "debug@test.com";
  debugPassword:string = "debug_password";

  constructor() { }

  getUser(){
    return {
      username: this.debugUsername,
      email: this.debugEmail,
      password: this.debugPassword
    }
  }


}
