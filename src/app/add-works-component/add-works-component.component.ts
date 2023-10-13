import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Content } from './Content';
import { LocalStorage } from './LocalStorage';
import { WorksComponent } from '../works-component/works-component.component';

@Component({
  selector: 'app-add-works-component',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './add-works-component.component.html',
  styleUrls: ['./add-works-component.component.css']
})
export class AddWorksComponent {

  contentInfo: string;
  author: string;
  details: Content[];

  storage_Object = new LocalStorage();

  constructor() {
    this.details=[],
    this.contentInfo="",
    this.author=""
  }


   applyForm = new FormGroup({
    data: new FormControl(''),
    author: new FormControl('')
    });

    submitContent() {
      this.contentInfo = this.applyForm.value.data ?? ' ';
      this.details.push(new Content(this.contentInfo));
      this.storage_Object.addContentToStroage(this.author,this.contentInfo);
      console.log(this.details);
    }

    get getDetailsList(): Content[] {
      return this.details;
    }
}
