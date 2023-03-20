import { Component, Input, OnInit } from '@angular/core';
import { File } from 'src/app/services/data.service';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss'],
})
export class FileItemComponent  implements OnInit {

  @Input() file?: File

  constructor() { }

  ngOnInit() {}

}
