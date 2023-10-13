import { Component } from '@angular/core';
import { LocalStorage } from '../add-works-component/LocalStorage';
import { Content } from '../add-works-component/Content';

@Component({
  selector: 'app-delete-works-component',
  templateUrl: './delete-works-component.component.html',
  styleUrls: ['./delete-works-component.component.css']
})
export class DeleteWorksComponent {

  storage_Object: LocalStorage;

  storedData: Content[];

  constructor(){
    this.storage_Object = new LocalStorage();
    this.storedData = this.storage_Object.getContentFromStorage;
  }

  onDelete(index: number) {
    this.storedData.splice(index,1)
    this.storage_Object.updateContent(this.storedData)
  }
  
}
