import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Work} from "../Work";
import {WorksService} from "../service/works.service";

@Component({
  selector: 'app-add-works-component',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-works-component.component.html',
  styleUrls: ['./add-works-component.component.css']
})
export class AddWorksComponent {
  workObject: Work = new Work();

  constructor(private workService: WorksService) {
  }

  submitContent() {
    this.workService.saveContent(this.workObject).subscribe( data =>{
        console.log(data);
      },
      error => console.log(error));
  }

}
