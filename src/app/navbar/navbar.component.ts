import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'
import { Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLayoutHandsetPortrait = false;
  isLayoutHandsetLandscape = false;
  isLayoutLarge = false;
  isLayoutMedium = false;

  constructor(private responsive: BreakpointObserver) {

  }

  ngOnInit() {
    this.responsive.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.Large,
      Breakpoints.Medium
    ])
      .subscribe(result => {
        const layoutBreakpoints = result.breakpoints;
        if (layoutBreakpoints[Breakpoints.HandsetPortrait]) {
          console.log("screens matches handset portait ");
          
          this.isLayoutHandsetPortrait = true;
          this.isLayoutHandsetLandscape = false;
          this.isLayoutLarge = false;
          this.isLayoutMedium = false;
        }
        else if (layoutBreakpoints[Breakpoints.HandsetLandscape]) {
          console.log("screens matches HandsetLandscape");

          this.isLayoutHandsetPortrait = false;
          this.isLayoutHandsetLandscape = true;
          this.isLayoutLarge = false;
          this.isLayoutMedium = false;
        }
        else if (layoutBreakpoints[Breakpoints.Large]) {
          console.log("screens matches Large ");

          this.isLayoutHandsetPortrait = false;
          this.isLayoutHandsetLandscape = false;
          this.isLayoutLarge = true;
          this.isLayoutMedium = false;
        }
        else if (layoutBreakpoints[Breakpoints.Medium]){
          console.log("screens matches Medium ");

          this.isLayoutHandsetPortrait = false;
          this.isLayoutHandsetLandscape = false;
          this.isLayoutLarge = false;
          this.isLayoutMedium = true;
        }
      })
  }

  handleArtystyczneOprawy() {
    console.log('artystyczne oprawy clicked');
  }
}

