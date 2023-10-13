import { Component } from '@angular/core';
import { LocalStorage } from '../add-works-component/LocalStorage';
import { Content } from '../add-works-component/Content';

@Component({
  selector: 'app-works-component',
  templateUrl: './works-component.component.html',
  styleUrls: ['./works-component.component.css']
})
export class WorksComponent {

  storage_Object: LocalStorage;

  storedData: Content[];

  constructor(){
    this.storage_Object = new LocalStorage();
    this.storedData = this.storage_Object.getContentFromStorage;
  }
  
}
