import { Injectable } from '@angular/core';
import { Bee } from "@ethersphere/bee-js";
import { StorageService } from './storage.service';
import { Browser } from '@capacitor/browser';

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
    const file = await this.bee.downloadFile(cid);
    try {
      if(file) {
        const blob = new Blob(file, { type: file.type });
        const url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = file.name;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      }
    } catch {
      await Browser.open({url: "https://gateway.ethswarm.org/files/" + cid});
    }
    return file;
  }
}
