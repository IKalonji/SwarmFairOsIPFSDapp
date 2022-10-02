import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { FairOS } from 'fairos-js';
import { environment } from 'src/environments/environment';


const swarm = require("swarm-js").at("http://swarm-gateways.net");
const fairOS = new FairOS({
  providerUrl: "https://fairos.fairdatasociety.org/v1",
})

@Component({
  selector: 'app-drive-page',
  templateUrl: './drive-page.component.html',
  styleUrls: ['./drive-page.component.scss'],
})
export class DrivePageComponent implements OnInit {

  @Input() drive: string;

  files: any[] = [];

  constructor(private modalController: ModalController,
    private loading: LoadingController,
    private toast: ToastController,
    private actionsheet: ActionSheetController,
    private alertController: AlertController) { }

  ngOnInit() {
    
  }

  async closeDrive(){
    console.log("close drive")
    await this.modalController.dismiss();
  }

  newUpload(){
    this.showActionSheet();
  }

  fileProvided(file:any){
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
        duration: 6000
      }
    );
    // await this.actionsheet.dismiss()
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

    this.closeDrive()
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
    switch (this.drive){
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
        header: this.drive,
        buttons:[
          {
            text: "Upload file",
            icon: "document-outline",
            handler: () => {
              console.log('upload file clicked');
              document.getElementById('fileupload').click();
            }
          },
          {
            text: "Upload folder",
            icon: "folder-outline",
            handler: () => {
              console.log('upload folder clicked');
              document.getElementById('folderupload').click();
            }
          }
        ],
      }
    );
    await actionsheet.present();
  }

  downloadFile(file:any){
    console.log("download file " + file)
    this.alertController.create({
      header: "Download not allowed in debug mode",
      message: "Please use beta release version of Mobile DStorage from the Android Play Store",
  }).then(alert => alert.present())
}

deleteFile(file:any){
  console.log("delete file " + file)
  //insert code to delete file from in app store
  this.alertController.create({
    header: "File deleted",
    message: "File successfully deleted",
}).then(alert => alert.present())
}

}

export interface fileObject {
  name:string,
  provider:string
}

