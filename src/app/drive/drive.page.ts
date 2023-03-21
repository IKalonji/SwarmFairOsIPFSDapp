import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, RefresherCustomEvent } from '@ionic/angular';
import { DataService, File } from '../services/data.service';
import { FairService } from '../services/fair.service';
import { IpfsService } from '../services/ipfs.service';
import { StorageService } from '../services/storage.service';
import { SwarmService } from '../services/swarm.service';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.page.html',
  styleUrls: ['./drive.page.scss'],
})
export class DrivePage implements OnInit {

  id: any;
  drive: any;
  files: File[] = []

  constructor(
    private route: ActivatedRoute, 
    private data: DataService,
    private storage: StorageService,
    private swarm: SwarmService,
    private ipfs: IpfsService,
    private fair: FairService,
    private alertController: AlertController) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.drive = this.data.getDriveById(this.id).name;
    this.getFileList();
  }

  async refresh(ev: any) {
    await this.getFileList();
  }

  async getFileList() {
    this.data.showSpinner();
    await this.storage.getFiles(this.id).then(data => {
      this.files = data;
    }).catch((e) => {
      this.showAlert("Load Files", e);
    });
    this.data.hideSpinner();
  }

  async upload() {
    const result = await FilePicker.pickFiles();
    const file = result.files[0];
    let message = 'File uploaded successfully...';
    let header = 'File Upload';
    if(file.blob) {
      this.data.showSpinner();
      if(this.id == 0) {

      } else if(this.id == 1) {
        await this.ipfs.upload(file).then(async data => {
          await this.storage.saveFile({ id: data, name: file.name}, this.id).then(() => {}).catch(e => {});
        }).catch(e => {
          message = e;
        });
      } else if(this.id == 2) {

      }
      this.data.hideSpinner();
      this.showAlert(header, message);
    }
    await this.getFileList();
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
