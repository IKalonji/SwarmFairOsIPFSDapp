import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName:string = "";
  userEmail:string = "";
  userPassword:string = "";

  constructor(private router: Router, private loading: LoadingController) { }

  ngOnInit() {
  }

  login(){
    console.log("Login clicked");
    console.log(this.userName, this.userEmail, this.userPassword);
    this.loader("Logging in. Please wait.")
    setTimeout(() =>
      {this.router.navigate(["/home"])}
      ,3000)
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

}
