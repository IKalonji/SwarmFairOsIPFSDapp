import { Injectable } from '@angular/core';
import { File, User } from './data.service';
import { Storage } from '@ionic/storage';
import { use } from 'chai';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private SwarmStore = "swarm";
  private IPFSStore = "ipfs";
  private FairStore = "fair";

  private SwarmBatchId = "SwarmBatchId";
  private SwarmUrl = "SwarmUrl";
  private IPFSToken = "IPFSToken";

  constructor(private storage: Storage) { 
    storage.ready();
  }

  async saveFile(file: File, store: number) {
    if(store == 0) {
      await this.saveSwarm(file);
    } else if(store == 1) {
      await this.saveIPFS(file);
    }/* else if(store == 2) {
      await this.saveFair(file);
    }*/
  }

  async getFiles(store: number): Promise<File[]> {
    let files: File[] = [];
    if(store == 0) {
      await this.getSwarm().then(data => {
        files = data
      }).catch(e => {
      });
    } else if(store == 1) {
      await this.getIPFS().then(data => {
        files = data
      }).catch(e => {
      });
    }/* else if(store == 2) {
      await this.getFair().then(data => {
        files = data
      }).catch(e => {
      });
    }*/
    return files;
  }

  private async saveSwarm(file: File) {
    await this.storage.get(this.SwarmStore).then(data => {
      let files: File[] = data;
      files.push(file);
      this.storage.set(this.SwarmStore, files);
    }).catch(e => {
      this.storage.set(this.SwarmStore, [file]);
    });
  }

  private async getSwarm(): Promise<File[]> {
    let files: File[] = [];
    await this.storage.get(this.SwarmStore).then((data) => {
      files = data;
    }).catch(e => {
      
    });
    return files;
  }

  async saveIPFS(file: File) {
    await this.storage.get(this.IPFSStore).then(data => {
      let files: File[] = data;
      files.push(file);
      this.storage.set(this.IPFSStore, files);
    }).catch(e => {
      this.storage.set(this.IPFSStore, [file]);
    });
  }

  private async getIPFS(): Promise<File[]> {
    let files: File[] = [];
    await this.storage.get(this.IPFSStore).then((data) => {
      files = data;
    }).catch(e => {
      
    });
    return files;
  }

  async setSwarmBatchId(batchId: string) {
    await this.storage.set(this.SwarmBatchId, batchId);
  }

  async setSwarmUrl(url: string) {
    await this.storage.set(this.SwarmUrl, url);
  }

  async getSwarmBatchId(): Promise<string> {
    return await this.storage.get(this.SwarmBatchId);
  }

  async getSwarmUrl(): Promise<string> {
    return await this.storage.get(this.SwarmUrl);
  }

  async removeSwarmBatchId() {
    await this.storage.remove(this.SwarmBatchId);
  }

  async removeSwarmUrl() {
    await this.storage.remove(this.SwarmUrl);
  }

  async setIPFSToken(token: string) {
    await this.storage.set(this.IPFSToken, token);
  }

  async getIPFSToken(): Promise<string> {
    return await this.storage.get(this.IPFSToken);
  }

  async removeIPFSToken() {
    await this.storage.remove(this.IPFSToken);
  }

  async setUser(user: User): Promise<boolean> {
    let result = false;
    await this.storage.get('user').then(async data => {
      if(!data) {
        await this.storage.set('user', user);
        result = true;
      }
    }).catch(async () =>{
      await this.storage.set('user', user);
      result = true;
    });
    return result;
  }

  async isAuto(): Promise<boolean> {
    let result = false;
    await this.storage.get('user').then(user => {
      result = user.auto;
    });
    return result;
  }

  async isUser(): Promise<boolean> {
    let result = false;
    await this.storage.get('user').then(user => {
      if(user) {
        result = true;
      }
    });
    return result;
  }

  async signIn(username: string, password: string, auto: boolean): Promise<boolean> {
    let result = false;
    await this.storage.get('user').then(async user => {
      if((user.username == username) && (user.password == password)) {
        result = true;
        let usr = user;
        usr.auto = auto;
        await this.storage.set('user', usr);
      } else {
        throw Error("Invalid username or password!");
      }
    }).catch(e => {
      throw Error("User not found, please signup!");
    });
    return result;
  }
}
