import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService, File } from 'src/app/services/data.service';
import { IpfsService } from 'src/app/services/ipfs.service';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss'],
})
export class FileItemComponent  implements OnInit {

  @Input() file?: File

  constructor(private ipfs: IpfsService, 
    private data: DataService,
    private alertController: AlertController) { }

  ngOnInit() {}

  async download(id) {
    this.data.showSpinner();
    await this.ipfs.download(id).catch(async e =>{
      await this.showAlert("Download", e);
    }).finally(() => {
      this.data.hideSpinner();
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

}
