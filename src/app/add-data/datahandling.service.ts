import { Injectable } from '@angular/core';
import { dataTemplate } from '../add-data/add-data';

@Injectable({
  providedIn: 'root'
})
export class DatahandlingService {
  private datalist: dataTemplate[] = []
  constructor() {
    this.datalist.push(...this.datalist, { id: 0, name: 'testDefult1', Designation: 'testDefult11', Experience: 'testDefult111' })
  }

  getData(): dataTemplate[] {
    return this.datalist;
  }
  setData(list: dataTemplate) {
    this.datalist.push(list)
  }
  deletdata(id: number): void {
    console.log(id)
    this.datalist = this.datalist.filter(datalist => datalist.id !== id);
    console.log(this.datalist);

  }
  editdata(id: number): void {
    this.datalist = this.datalist.filter(datalist => datalist.id !== id);
    // console.log(id)

  }
  getid() {
    return this.datalist.length
  }
}
