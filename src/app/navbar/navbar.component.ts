import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'
import { Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private responsive: BreakpointObserver) {

  }

  ngOnInit() {
    this.responsive.observe([Breakpoints.HandsetLandscape,
    Breakpoints.HandsetPortrait, 
    Breakpoints.Large])
      .subscribe(result => {
        const layoutBreakpoints = result.breakpoints;
        if (layoutBreakpoints[Breakpoints.HandsetPortrait]) {
          console.log("screens matches handset portait ");
        }
        if (layoutBreakpoints[Breakpoints.HandsetLandscape]) {
          console.log("screens matches HandsetLandscape");
        }
        if (layoutBreakpoints[Breakpoints.Large]) {
          console.log("screens matches Large ");
        }
      })
  }

  handleArtystyczneOprawy() {
    console.log('artystyczne oprawy clicked');
  }
}

