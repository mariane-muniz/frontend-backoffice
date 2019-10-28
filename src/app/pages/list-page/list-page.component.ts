import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { TableService } from 'src/app/services/table.service';
import { ListData } from 'src/app/dtos/ListData';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.sass']
})
export class ListPageComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  count: number = 10;
  pageSize: number = 10;
  pageSizeOptions: string = "5, 10, 15, 20";
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private tableService: TableService) {
    this.tableService.getTableDescription("product").subscribe((data: ListData) => {
      this.count = data.count;
      this.setColumns(data);
      this.setDataSource(data);
    });
  }

  ngOnInit(): void {
    // this.dataSource.sort = this.sort;
  }

  private setColumns(data: ListData): void {
    let labels = data.labels;
    let array = Object.keys(labels).map(e=>labels[e]);
    this.displayedColumns = array;
  }

  private setDataSource(data: ListData): void {

  }
}
