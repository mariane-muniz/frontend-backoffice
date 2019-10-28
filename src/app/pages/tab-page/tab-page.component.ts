import { Component, OnInit } from '@angular/core';
import { TabData } from 'src/app/datas/TabData';

@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.sass']
})
export class TabPageComponent implements OnInit {

  title: string;
  description: string;
  tabs: TabData[] = [];

  constructor() { }

  ngOnInit() {
    this.title = 'Tab title';
    this.description = 'Tab description';

    for (let i=0; i < 5 ;i++) {
        let tab = new TabData();
        tab.label = "Label " + i;
        tab.content = "Content " + i;
        this.tabs.push(tab);
    }
  }
}