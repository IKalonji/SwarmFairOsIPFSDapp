import { Component } from '@angular/core';
import { ActionSheetController, LoadingController, ToastController } from '@ionic/angular';
// import { create } from "ipfs-http-client"
import { environment } from 'src/environments/environment';
import { Slides } from 'src/models/slide.models';
import { FairOS } from 'fairos-js';

const swarm = require("swarm-js").at("http://swarm-gateways.net");
const fairOS = new FairOS({
  providerUrl: "https://fairos.fairdatasociety.org/v1",
})


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slidesOptions = {
    slidesPerView: 1.5
  }

  slides = Slides

  files: fileObject[] = [];

  currentProvider:string = "";

  constructor(private loading: LoadingController,
    private toast: ToastController,
    private actionsheet: ActionSheetController) {}

  cardClicked(provider:string){
    this.currentProvider = provider;
    console.log(this.currentProvider);
    this.showActionSheet();
  }

  fileProvided(file:any){
    this.files.push({name:file.target.files[0].name, provider:this.currentProvider})
    let newFile = file.target.files[0]
    console.log(file.target.files[0].name)
    this.showLoader('File uploading...', 'File successfully uploaded.')
    this.uploadToProvider(newFile)
    console.log(this.files)
  }

  public async showLoader(loadingText: string, toastText: string){
    let showDownload = await this.loading.create(
      {
        message: loadingText,
        duration: 4000
      }
    );
    await this.actionsheet.dismiss()
    await showDownload.present();

    setTimeout(async ()=>{
      let toast = await this.toast.create(
        {
          message: toastText,
          duration: 2000
        }
      );
      await toast.present()
    }, 4500)
  }

  getClient(): any {
    // @ts-ignore
    return create(`${environment.ipfs}:5001/api/v0`)
  }

  public async uploadFileToIPFS(data: any): Promise<string> {
    let url = ''
    const client = this.getClient()

    try {
      const added = await client.add(data)
      url = `${environment.ipfs}/ipfs/${added.path}`
    } catch (error) {
      console.log(error)
    }

    return url
  }

  public async uploadFileToSwarm(data: any) {
    swarm.upload({pick: data}).then(alert)
  }

  public async uploadFileToFairOS(data: any){
    const user = await fairOS.userLogin({
      user_name: "test_user",
      password: "123456",
    });
    const pod = await user.podNew({
      pod_name: "test_pod",
      password: "123456",
    });
    const dir = await pod.makeDir({
      dir_path: "test_dir",
    });
    const buffer = Buffer.from("test file", "utf-8")

    const file = await dir.uploadFile({
          file_buffer: buffer,
          file_name: "test.txt",
          dfs_compression: "gzip",
          block_size: "1Mb",
        });
    }

  public async uploadToProvider(file:any){
    switch (this.currentProvider){
      case "FairOS":
        this.uploadFileToFairOS(file);
        break;
      case "IPFS":
        this.uploadFileToIPFS(file);
        break;
      case "Swarm":
        this.uploadFileToSwarm(file);
    }
      
  }

  async showActionSheet(){
    let actionsheet = await this.actionsheet.create(
      {
        header: this.currentProvider,
        buttons:[
          {
            text: "Upload file",
            icon: "cloud-upload-outline",
            handler: () => {
              console.log('Clicked');
              document.getElementById('fileupload').click();
            }
          },
          {
            text: "Download file",
            icon: "cloud-download-outline",
            handler: () => {
              this.showLoader('File downloading...', 'File successfully downloaded.')
            }
          },
          {
            text: "Share file",
            icon: "share-outline",
            handler: () => {
              this.showLoader('Getting files...', 'No files found!');
            }
          }
        ],
      }
    );
    await actionsheet.present();
  }

}

export interface fileObject {
  name:string,
  provider:string
}
