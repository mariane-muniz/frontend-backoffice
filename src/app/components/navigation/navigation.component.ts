import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {

  features: string[] = ["MasterData", "B2B", "B2C", "Back Office", "WebService", "Market Place", "Analytics", "Android App", "Loyalty"];
  customerIsLogged: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private titleService: Title) {
    this.titleService.setTitle('Administrator');
  }
}
