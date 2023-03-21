import { Injectable } from '@angular/core';
import { File, User } from './data.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private SwarmStore = "swarm";
  private IPFSStore = "ipfs";
  private FairStore = "fair";

  private IPFSToken = "IPFSToken";

  constructor(private storage: Storage) { 
    storage.ready();
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
      });
    } else if(store == 1) {
      await this.getIPFS().then(data => {
        files = data
      }).catch(e => {
      });
    } else if(store == 2) {
      await this.getFair().then(data => {
        files = data
      }).catch(e => {
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
      let files: File[] = data;
      files.push(file);
      this.storage.set(this.IPFSStore, files);
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

  async setIPFSToken(token: string) {
    await this.storage.set(this.IPFSToken, token);
  }

  async getIPFSToken(): Promise<string> {
    return await this.storage.get(this.IPFSToken);
  }

  async removeIPFSToken() {
    await this.storage.remove(this.IPFSToken)
  }

  async setUser(user: User) {
    await this.storage.set('User', user);
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
    let user = await this.storage.get('user').then(async user => {
      if((user.username == username) && (user.upassword == password)) {
        result = true;
        if(auto) {
          let usr = user;
          usr.auto = auto;
          await this.storage.set('user', usr);
        }
      }
    }).catch(e => {
      throw Error("Invalid Username or Password");
    })
    return result;
  }
}
