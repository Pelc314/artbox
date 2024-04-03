import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Layout, ResponsiveLayout } from '../services/responsiveLayout.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription;
  currentLayout: Layout = Layout.Large;

  constructor(private readonly responsiveLayoutService: ResponsiveLayout) { }

  ngOnInit(): void {
    this.subscription = this.responsiveLayoutService.layout$.subscribe(result => {
      this.currentLayout = result;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
