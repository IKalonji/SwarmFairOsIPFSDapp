import { Injectable } from '@angular/core';
import { Bee } from "@ethersphere/bee-js";
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SwarmService {

  bee: any;

  constructor(private storage: StorageService) { }

  async initBee() {
    this.bee = new Bee(await this.storage.getSwarmUrl());
  }

  async upload(file: any) {
    const postageBatchId = await this.storage.getSwarmBatchId();
    await this.initBee();
    return await this.bee.uploadFile(postageBatchId, file.blob);
  }

  async download(cid: string) {
    await this.initBee();
    return await this.bee.downloadFile(cid);
  }
}
