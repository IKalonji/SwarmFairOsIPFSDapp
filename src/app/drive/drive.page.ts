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
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getFileList(): File[] {
    let files: File[] = [];
    this.storage.getFiles(this.id).then(data => files = data).catch(e => {});
    return [];
  }

  async upload() {
    await this.storage.saveFile({ id: 'gfjhwf564ggg35g46', name: 'my picture'}, this.id);
  }

}
