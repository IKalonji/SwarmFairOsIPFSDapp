import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  tab = "swarm";

  ipfs = "";
  batchId = "";
  url = "";

  constructor(private storage: StorageService, private alertController: AlertController) { }

  async ngOnInit() {
    this.changeTab(this.tab);
    await this.storage.getIPFSToken().then(data => {
      this.ipfs = data;
    }).catch(async e => {
      await this.showAlert("IPFS Token", e);
    });

    await this.storage.getSwarmBatchId().then(data => {
      this.batchId = data;
    }).catch(async e => {
      await this.showAlert("Swarm Postage Batch Id", e);
    });

    await this.storage.getSwarmUrl().then(data => {
      this.url = data;
    }).catch(async e => {
      await this.showAlert("Swarm Url", e);
    });
  }

  async updateIPFSToken() {
    await this.storage.setIPFSToken(this.ipfs).then(async () => {
      await this.showAlert("Update Token", "IPFS Token updated successfully...")
    }).catch(async e => {
      await this.showAlert("Update Alert", e);
    });
  }

  async removeIPFSToken() {
    await this.storage.removeIPFSToken().then(async () => {
      await this.showAlert("Remove Token", "IPFS Token removed successfully...");
      this.ipfs = "";
    }).catch(async e => {
      await this.showAlert("Remove Alert", e);
    });
  }

  async updateSwarmBatchId() {
    await this.storage.setSwarmBatchId(this.batchId).then(async () => {
      await this.showAlert("Update Swarm Postage Batch Id", "Postage Batch Id updated successfully...")
    }).catch(async e => {
      await this.showAlert("Update Alert", e);
    });
  }

  async removeSwarmBatchId() {
    await this.storage.removeSwarmBatchId().then(async () => {
      await this.showAlert("Remove Batch Id", "Postage Batch Id removed successfully...");
      this.batchId = "";
    }).catch(async e => {
      await this.showAlert("Remove Alert", e);
    });
  }

  async updateSwarmUrl() {
    await this.storage.setSwarmUrl(this.url).then(async () => {
      await this.showAlert("Update Swarm Url", "Url updated successfully...")
    }).catch(async e => {
      await this.showAlert("Update Alert", e);
    });
  }

  async removeSwarmUrl() {
    await this.storage.removeSwarmUrl().then(async () => {
      await this.showAlert("Remove Url", "Url removed successfully...");
      this.url = "";
    }).catch(async e => {
      await this.showAlert("Remove Alert", e);
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
    //document.getElementById('fair').style.borderBottom = 'none';
    document.getElementById(tab).style.borderBottom = '2px solid var(--ion-color-tertiary)';
    this.tab = tab;
  }

}
