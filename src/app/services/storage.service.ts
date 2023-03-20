import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { File } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private SwarmStore = "swarm";
  private IPFSStore = "ipfs";
  private FairStore = "fair";

  constructor(private storage: Storage) { 
    
  }

  async saveFile(file: File, store: number) {
    switch(store) {
      case 0:
        await this.saveSwarm(file);
        break;
      case 1:
        await this.saveIPFS(file);
        break;
      case 2:
        await this.saveFair(file);
        break;
      default:
        return;
    }
  }

  async getFiles(store: number): Promise<File[]> {
    let files: File[] = []
    switch(store) {
      case 0:
        await this.getSwarm().then(data => files = data);
        break;
      case 1:
        await this.getIPFS().then(data => files = data);
        break;
      case 2:
        await this.getFair().then(data => files = data);
        break;
      default:
        return [];
    }
    return files;
  }

  private async saveSwarm(file: File) {

  }

  private async getSwarm(): Promise<File[]> {
    return [];
  }

  private async saveIPFS(file: File) {
    await this.storage.get(this.IPFSStore).then(async (data) => {
      await this.storage.set(this.IPFSStore, data.append(file));
    }).catch(async () => {
      await this.storage.set(this.IPFSStore, [file]);
    })
  }

  private async getIPFS(): Promise<File[]> {
    let files: File[] = [];
    await this.storage.get(this.IPFSStore).then((data) => {
      files = data;
    }).catch();
    return files;
  }

  private async saveFair(file: File) {
    
  }

  private async getFair(): Promise<File[]> {
    return [];
  }
}
