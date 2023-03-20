import { Component, Input, OnInit } from '@angular/core';
import { Drive } from 'src/app/services/data.service';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss'],
})
export class DriveComponent  implements OnInit {

  @Input() drive?: Drive;

  constructor() { }

  ngOnInit() {}

}
