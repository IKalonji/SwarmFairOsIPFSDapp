import { Injectable } from '@angular/core';
import { File } from './data.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private SwarmStore = "swarm";
  private IPFSStore = "ipfs";
  private FairStore = "fair";

  constructor(private storage: Storage) { 
    storage.ready();
    storage.clear()
  }

  async saveFile(file: File, store: number) {
    if(store == 0) {
      await this.saveSwarm(file);
    } else if(store == 1) {
      await this.saveIPFS(file);
    } else if(store == 2) {
      await this.saveFair(file);
    }
  }

  async getFiles(store: number): Promise<File[]> {
    let files: File[] = [];
    if(store == 0) {
      await this.getSwarm().then(data => {
        files = data
      }).catch(e => {
        console.log(e);
      });
    } else if(store == 1) {
      await this.getIPFS().then(data => {
        files = data
      }).catch(e => {
        console.log(e);
      });
    } else if(store == 2) {
      await this.getFair().then(data => {
        files = data
      }).catch(e => {
        console.log(e);
      });
    }
    return files;
  }

  private async saveSwarm(file: File) {

  }

  private async getSwarm(): Promise<File[]> {
    return [];
  }

  async saveIPFS(file: File) {
    await this.storage.get(this.IPFSStore).then(data => {
      alert(data.length);
      let files: File[] = data;
      files.push(file);
      this.storage.set(this.IPFSStore, files);
      alert(data[1])
    }).catch(e => {
      this.storage.set(this.IPFSStore, [file]);
    })
  }

  private async getIPFS(): Promise<File[]> {
    let files: File[] = [];
    await this.storage.get(this.IPFSStore).then((data) => {
      files = data;
    }).catch(e => {
      
    });
    return files;
  }

  private async saveFair(file: File) {
    
  }

  private async getFair(): Promise<File[]> {
    return [];
  }
}
