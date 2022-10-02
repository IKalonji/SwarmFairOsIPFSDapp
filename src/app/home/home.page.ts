import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Slides } from 'src/models/slide.models';
import { FairOS} from 'fairos-js';
import { DrivePageComponent } from '../drive-page/drive-page.component';
import { ConfigPageComponent } from '../config-page/config-page.component';
import { InAppDataService } from '../services/in-app-data.service';
import { User } from 'src/models/user.model';

const swarm = require("swarm-js").at("http://swarm-gateways.net");
const fairOS = new FairOS({
  providerUrl: "https://fairos.fairdatasociety.org/v1",
})


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  slidesOptions = {
    slidesPerView: 1.5
  }

  slides = Slides

  currentProvider:string = "";

  user: User;

  constructor(private modalController: ModalController,
    private alertController: AlertController,
    private inAppStore: InAppDataService) {
      this.user = this.inAppStore.user;
    }

  ngOnInit(): void {
    this.showBetaMsg()
  }

  async showBetaMsg(){
    let alertMessage = await this.alertController.create({
      header: "Beta Notice",
      message: "Please note that PocketDrive is in beta and as such persistence of documents stored cannot be guaranteed"
    })
    alertMessage.present()
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
