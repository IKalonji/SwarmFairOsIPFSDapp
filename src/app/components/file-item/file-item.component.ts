import { Component, Input, OnInit } from '@angular/core';
import { File } from 'src/app/services/data.service';
import { IpfsService } from 'src/app/services/ipfs.service';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss'],
})
export class FileItemComponent  implements OnInit {

  @Input() file?: File

  constructor(private ipfs: IpfsService) { }

  ngOnInit() {}

  async download(id) {
    await this.ipfs.download(id);
  }

}
