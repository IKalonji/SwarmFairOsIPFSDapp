import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {
  
  
  deleteFile(file: any) {
    this.files.splice(this.files.indexOf(file), 1);
  }

  files: any[] = [];

  constructor() { }

  getFiles(){
    return this.files;
  }

  addFile(file:any){
    this.files.push(file);
  }
}
