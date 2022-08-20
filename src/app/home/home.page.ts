import { Component } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
// import { create } from "ipfs-http-client"
import { environment } from 'src/environments/environment';
import { Slides } from 'src/models/slide.models';
import { FairOS } from 'fairos-js';
import { DrivePageComponent } from '../drive-page/drive-page.component';
import { ConfigPageComponent } from '../config-page/config-page.component';
import { UseServiceService } from '../services/use-service.service';

const swarm = require("swarm-js").at("http://swarm-gateways.net");
const fairOS = new FairOS({
  providerUrl: "https://fairos.fairdatasociety.org/v1",
})


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slidesOptions = {
    slidesPerView: 1.5
  }

  slides = Slides

  currentProvider:string = "";

  user:string = "";

  constructor(private modalController: ModalController,
    private alertController: AlertController,
    private userService: UseServiceService) {
      this.user = this.userService.getUsername();
    }

  openDrive(drive:string){
    this.modalController.create({
      component: DrivePageComponent,
      componentProps: {
        drive: drive
      },
    }).then(modal => {
      modal.present();
    }).catch(err => {
      console.log(err)
    }
    );
  }

  openConfig(){
    this.modalController.create({
      component: ConfigPageComponent,
    }).then(modal => {
      modal.present();
    }).catch(err => {
      console.log(err)
    }
    );
  }

  openExploreApps(){
    this.alertController.create({
      header: "Explore dApps",
      message: "Mirco dapps on Mobile DStorage are not yet available.",
      buttons: ["OK"]
  }).then(alertdisplay => {
      alertdisplay.present();
  }).catch(err => {
      console.log(err)
  })
  }

}
