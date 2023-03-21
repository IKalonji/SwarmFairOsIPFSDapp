import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  tab = "ipfs";

  ipfs = "";

  constructor(private storage: StorageService, private alertController: AlertController) { }

  ngOnInit() {
    this.changeTab(this.tab);
  }

  async updateIPFSToken() {
    await this.storage.setIPFSToken(this.ipfs).then(async () => {
      this.showAlert("Update Token", "IPFS Token updated successfully...")
    }).catch(async e => {
      this.showAlert("Update Alert", e);
    });
  }

  async removeIPFSToken() {
    await this.storage.removeIPFSToken().then(async () => {
      this.showAlert("Remove Token", "IPFS Token removed successfully...")
    }).catch(async e => {
      this.showAlert("Remove Alert", e);
    });
  }

  

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok']
    });
    await alert.present();
  }

  changeTab(tab: string) {
    document.getElementById('swarm').style.borderBottom = 'none';
    document.getElementById('ipfs').style.borderBottom = 'none';
    document.getElementById('fair').style.borderBottom = 'none';
    document.getElementById(tab).style.borderBottom = '2px solid var(--ion-color-tertiary)';
    this.tab = tab;
  }

}
