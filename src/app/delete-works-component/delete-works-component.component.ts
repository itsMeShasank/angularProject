import {Component, OnInit} from '@angular/core';
import { LocalStorage } from '../add-works-component/LocalStorage';
import { Content } from '../add-works-component/Content';
import {WorksService} from "../service/works.service";
import {Work} from "../Work";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-works-component',
  templateUrl: './delete-works-component.component.html',
  styleUrls: ['./delete-works-component.component.css']
})
export class DeleteWorksComponent implements OnInit{

  works: Work[] = [];


  ngOnInit(): void {
    this.getWorks();
  }

  constructor(private workService: WorksService,
              private router: Router){
  }

  onDelete(index: number) {
    console.log(index);
    this.workService.deleteContent(index).subscribe(data => {
      this.getWorks();
    },error => console.log(error));
  }

  private getWorks() {
    this.workService.getAllWorks().subscribe(data => {
      this.works = data;
    });
  }
}
