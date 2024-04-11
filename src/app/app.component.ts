import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Layout, ResponsiveLayout } from './services/responsiveLayout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  subscription: Subscription = new Subscription;
  currentLayout: Layout = Layout.Large;
  constructor(private responsiveLayout: BreakpointObserver,
    private responsiveLayoutService: ResponsiveLayout) { }

  ngOnInit() {
    this.responsiveLayout.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.Large,
      Breakpoints.Medium
    ])
      .subscribe(result => {
        const layoutBreakpoints = result.breakpoints;
        if (layoutBreakpoints[Breakpoints.HandsetPortrait]) {
          console.log("screens matches handset portait ");

          this.responsiveLayoutService.toggleLayoutHandsetPortrait();
        }
        else if (layoutBreakpoints[Breakpoints.HandsetLandscape]) {
          console.log("screens matches HandsetLandscape");

          this.responsiveLayoutService.toggleLayoutHandsetLandscape();
        }
        else if (layoutBreakpoints[Breakpoints.Large]) {
          console.log("screens matches Large ");

          this.responsiveLayoutService.toggleLayoutLarge();
        }
        else if (layoutBreakpoints[Breakpoints.Medium]) {
          console.log("screens matches Medium ");

          this.responsiveLayoutService.toggleLayoutMedium();
        }
      });

    this.subscription = this.responsiveLayoutService.layout$.subscribe(result => {
      this.currentLayout = result;
      console.log(this.currentLayout);
    });
  }
}
