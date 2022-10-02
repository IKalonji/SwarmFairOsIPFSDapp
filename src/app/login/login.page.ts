import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import UAuth from '@uauth/js'
import { InAppDataService } from '../services/in-app-data.service';
import { User } from 'src/models/user.model';

const uauth = new UAuth({
  clientID: "a892174c-662d-46f2-9059-37e2a786da24",
  redirectUri: "https://mobile-dstorage.vercel.app/login",
});

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string = "";
  password:string= "";
  confirmedPassword:string= "";

  user:User=null;

  constructor(private router: Router, 
    private loading: LoadingController, 
    private alertController: AlertController,
    private inAppStore: InAppDataService) { 
      this.getUserIfValid();
   }

  ngOnInit() {
  }

  async getUserIfValid(){
    await this.inAppStore.getUser().then(value => {
      console.log(value)
      if(value != null){
        let userDetails: any = value;
        this.user = {username: userDetails.username, pass: userDetails.pass};
      }
    });
  }

  login(){
    this.loader("Logging in. Please wait.")
    setTimeout(() =>
      {
        if(this.username == this.user.username && this.password == this.user.pass){
          this.router.navigate(["/home"])
        }else {
          this.invalidLogin();
        }
        
      },3000)
  }

  signUp(){
    if(this.password == this.confirmedPassword){
      this.inAppStore.setUser({username:this.username, pass: this.password})
      this.router.navigate(["/home"])
    }
    
  }

  async loader(message: string){
    let load = await this.loading.create(
      {
        message: message,
        duration: 2500
      }
    );

    await load.present();
  }

  async invalidLogin(){
    let alert = await this.alertController.create({
      header: "Invalid Login",
      message: "Please check your username, email and password",
      buttons: ["OK"]
    });

    await alert.present();
  }

  // Not implemented for the beta version.

  // async loginWithUnstoppable(){
  //   try{
  //     const authorization = await uauth.loginWithPopup()
  //     console.log(authorization)
  //     this.userService.setUsername(authorization.idToken.sub)
  //     this.router.navigate(["/home"])
  //   }catch(error){
  //     console.log(error);
  //     this.invalidLogin();
  //   }
    
  // }

}
