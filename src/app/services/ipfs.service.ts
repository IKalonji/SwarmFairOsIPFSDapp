import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpfsService {

  constructor() { }

  async downloadFile(CID: string) {
    //insert code to get the file from tatum IPFS endpoint
    const id = CID;
    const resp = await fetch(`https://api-eu1.tatum.io/v3/ipfs/${id}`, {
      method: 'GET',
      headers: {
        'x-api-key': 'd7dd4818-7e3b-4656-81ad-05a06b6aa4a3'
      }
    });


    const blob = await resp.blob();
    console.log(blob);


    const data = await resp.text();
    console.log(data);
  }

  async uploadFile(file: any) {
    //insert code to post file to IPFS tatum
    const id = file.name.split('.')[0];
    const res = await fetch(
      `https://api-eu1.tatum.io/v3/ipfs/${id}`,
      {
        method: 'GET',
        headers: {
          'x-api-key': 'a529e629-e787-4e3d-aac8-f02aa7f4f257'
        }
      }
    );
    alert(res.url)
    return res;
  }
}
