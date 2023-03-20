import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService, File } from '../services/data.service';
import { FairService } from '../services/fair.service';
import { IpfsService } from '../services/ipfs.service';
import { StorageService } from '../services/storage.service';
import { SwarmService } from '../services/swarm.service';

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
    private fair: FairService) { 
    
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
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  async getFileList() {
    await this.storage.getFiles(this.id).then(data => {
      this.files = data;
    }).catch(() => {});
  }

  async upload(e: any) {
    await this.storage.saveFile({ id: 'gfjhwf564ggg35g46', name: 'my picture 1'}, this.id).then(() => {});
    //await this.getFileList();
  }
}
