import {Component, OnInit} from '@angular/core';
import {WorksService} from "../service/works.service";
import {Work} from "../Work";

@Component({
  selector: 'app-works-component',
  templateUrl: './works-component.component.html',
  styleUrls: ['./works-component.component.css']
})
export class WorksComponent implements OnInit{

  works: Work[] = [];
  constructor(private worksService: WorksService){}

  ngOnInit(): void {
    this.getWorks();
  }

  private getWorks() {
    this.worksService.getAllWorks().subscribe(data => {
      this.works = data;
    });
    console.log(this.works);
  }
}
