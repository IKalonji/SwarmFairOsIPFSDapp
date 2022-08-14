import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UseServiceService } from '../services/use-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName:string = "";
  userEmail:string = "";
  userPassword:string = "";

  user:any = {};

  constructor(private router: Router, 
    private loading: LoadingController, 
    private userService: UseServiceService, 
    private alertController: AlertController) { 

    this.user = this.userService.getUser();
   }

  ngOnInit() {
  }

  login(){
    console.log("Login clicked");
    console.log(this.userName, this.userEmail, this.userPassword);
    this.loader("Logging in. Please wait.")
    setTimeout(() =>
      {
        if(this.userName == this.user.username && this.userEmail == this.user.email && this.userPassword == this.user.password){
          this.router.navigate(["/home"])
        }else {
          this.invalidLogin();
        }
        
      },3000)
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
}
