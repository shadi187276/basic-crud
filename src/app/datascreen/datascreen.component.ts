import { Component, OnInit } from '@angular/core';
import { DatahandlingService } from '../add-data/datahandling.service';
import { dataTemplate } from '../add-data/add-data';

@Component({
  selector: 'app-datascreen',
  templateUrl: './datascreen.component.html',
  styleUrls: ['./datascreen.component.css']
})
export class DatascreenComponent implements OnInit {
  datalist: dataTemplate[] = []
  constructor(private datahandlingService: DatahandlingService) { }

  ngOnInit(): void {
    this.datalist = this.datahandlingService.getData();
  }

  deletrow(id: number) {
    this.datahandlingService.deletdata(id)
  }
  editdata(id: number) {
    this.datahandlingService.editdata(id)
  }



}
