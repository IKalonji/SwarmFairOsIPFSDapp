import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpfsService {

  constructor() { }

  downloadFile(CID:string) {
    //insert code to get the file from tatum IPFS endpoint
  }

  uploadFile(file:any){
    //insert code to post file to IPFS tatum
  }
}
