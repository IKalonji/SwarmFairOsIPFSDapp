import { Injectable } from '@angular/core';

export interface Drive {
  name: string;
  icon: string;
  id: number;
}

export interface File {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public drives: Drive[] = [
    {
      name: 'Swarm',
      icon: '../assets/swarm.png',
      id: 0
    },
    {
      name: 'IPFS',
      icon: '../assets/ipfs.png',
      id: 1
    },
    {
      name: 'Fair',
      icon: '../assets/fair.svg',
      id: 2
    },
  ];

  constructor() { }

  public getDrives(): Drive[] {
    return this.drives;
  }

  public getDriveById(id: number): Drive {
    return this.drives[id];
  }

  public showSpinner() {
    document.getElementById("spinner").style.display = "block";
  }

  public hideSpinner() {
    document.getElementById("spinner").style.display = "none";
  }
}
