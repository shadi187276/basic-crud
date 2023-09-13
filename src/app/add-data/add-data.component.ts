import { Component } from '@angular/core';
import { dataTemplate } from './add-data'
import { DatahandlingService } from './datahandling.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  constructor(private datahandlingService: DatahandlingService) { }
  addNewData(employData: any) {
    let id = this.datahandlingService.getid()
    this.datahandlingService.setData({ id: id, name: employData.controls.name.value, Designation: employData.controls.Designation.value, Experience: employData.controls.Experience.value })
    console.log(this.datahandlingService.getData())
  }
}
