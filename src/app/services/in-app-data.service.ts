import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InAppDataService {
  /***
   * InAppData Service used to store the file names of items uploaded for ease of retrival from 
   * fdp, swarm and the cid from IPFS. Also used to store user name and password on device.
   * 
   * Functionality: 
   * On app init, InAppData service is queried to determine if the user has signed up, if not 
   * then user creates a profile, which is stored on device.
   * 
   * On each upload the file name is stored on device, on file listing the file names are retrived and listed.
   * On download the filename retrieved is used in the file service call to download the file and store in the users file system.
   */

  public user: User;
  
  constructor(private inAppStore: Storage) {
    console.log(inAppStore.ready());
  }

  async getUser(): Promise<User>{
    
    await this.inAppStore.get("user").then(m =>{
      let userDetails:any = m;
      if (userDetails != null){
        this.user = {username: m.username, pass: m.pass}
      } else {
        this.user = null;
      }
    });
    console.log("in service " + this.user);
    return this.user;
  }

  async setUser(user: User){
    let result = await this.inAppStore.set("user", user)
  }

  async getIpfsFileNamesAndCID(){

  }

  async getSwarmFileNames(){

  }

  async getFairOsFileNames(){

  }

  async setIpfsFileNamesAndCID(){

  }

  async setSwarmFileNames(){

  }

  async setFairOsFileNames(){
    
  }



}
