import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { DataService, Drive } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;
  @ViewChild(IonModal) account!: IonModal;
  name!: string;
  message!: string;

  isLoginOpen = true;
  isRegisterOpen = false;

  constructor(private data: DataService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.account.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  getDrives(): Drive[] {
    return this.data.getDrives();
  }

  openDrive(id: number) {
    this.router.navigate(['home/drive', {id: id}]);
  }

  async login() {
    this.isLoginOpen = false;
  }

  async register() {
    this.isRegisterOpen = false;
  }

  openLogin() {
    this.isRegisterOpen = false;
    this.isLoginOpen = true;
  }

  openRegister() {
    this.isLoginOpen = false;
    this.isRegisterOpen = true;
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok']
    });
    await alert.present();
  }

}
