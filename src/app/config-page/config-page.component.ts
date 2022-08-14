import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Slides } from 'src/models/slide.models';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.scss'],
})
export class ConfigPageComponent implements OnInit {

  providers = Slides;

  constructor(private modalController: ModalController,
    private toastController: ToastController) { }

  ngOnInit() {}

  closeConfig(){
    this.modalController.dismiss();
  }

  saveConfig(){
    this.modalController.dismiss();
    this.toastController.create({
      message: "Configuration changes saved",
      color: "dark",
      duration: 3000
  }).then(toast => {
      toast.present();
  }).catch(err => {
      console.log(err)
  });
  
  }

}
