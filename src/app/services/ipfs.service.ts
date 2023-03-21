import { Injectable } from '@angular/core';
import { Web3Storage } from 'web3.storage';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class IpfsService {

  client: any;

  constructor(private storage: StorageService) { 
    
  }

  async upload(file: any) {
    let token = "";
    await this.storage.getIPFSToken().then(data => token = data);
    this.client = new Web3Storage({ token: token});

    return await this.client.put([file.blob], {
      name: file.name,
      maxRetries: 3,
    });
  }

  async download(cid: any) {
    let token = "";
    await this.storage.getIPFSToken().then(data => token = data);
    this.client = new Web3Storage({ token: token});
    
    const response = await this.client.get(cid);
    const files = await response?.files();

    if(files) {
      const blob = new Blob(files, { type: files[0].type });
      const url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = files[0].name;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    }
  }
}
