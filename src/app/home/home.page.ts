import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonCheckbox, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { DataService, Drive } from '../services/data.service';
import { StorageService } from '../services/storage.service';

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

  checked = false;

  isLoginOpen = true;
  isRegisterOpen = false;
  isLoggedIn: boolean = false;

  constructor(private data: DataService, 
    private router: Router, 
    private alertController: AlertController,
    private storage: StorageService) { }

  async ngOnInit() {
    await this.storage.isAuto().then(data => {
      if(data) {
        this.isLoggedIn = true;
        this.isLoginOpen = false;
        this.checked = true;
      }
    });
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

  async openDrive(id: number) {
    if(this.isLoggedIn) {
      this.router.navigate(['home/drive', {id: id}]);
    } else {
      await this.showAlert('Failed', 'Please sign in to access drives.');
    }
  }

  async login(username: any, password: any, auto: boolean) {
    this.data.showSpinner();
    await this.storage.signIn(username as string, password as string, auto).then(async data => {
      this.isLoggedIn = data;
      this.isLoginOpen = false;
    }).catch(async e => {
      await this.showAlert("Failed", e);
      this.isLoginOpen = true;
    }).finally(() => {
      this.data.hideSpinner();
    });
  }

  async register(username: any, password: any, confirm: any) {
    if(password != confirm) {
      await this.showAlert('Failed', 'Error: Password does not match!');
      return;
    }
    await this.storage.setUser({ username: username, password: password, auto: false}).then(async data => {
      if(data) {
        await this.showAlert("Success ", "User signed up successfully...");
        this.isLoggedIn = true;
        this.isRegisterOpen = false;
      } else {
        this.openLogin();
        await this.showAlert("Failed ", "An account already exists, please sign in.");
      }
    }).catch(async e => {
      await this.showAlert("Failed", e);
    });
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
