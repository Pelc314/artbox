import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Layout, ResponsiveLayout } from './services/responsiveLayout.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLayout$: Observable<Layout> = this.responsiveLayoutService.layout$;
  constructor(
    private responsiveLayoutService: ResponsiveLayout) { }

}
