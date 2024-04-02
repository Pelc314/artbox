import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsiveLayout } from '../services/responsiveLayout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  subscriptionHandsetPortrait: Subscription = new Subscription;
  subscriptionHandsetLandscape: Subscription = new Subscription;
  subscriptionMedium: Subscription = new Subscription;
  subscriptionLarge: Subscription = new Subscription;
  isLayoutHandsetPortrait: boolean = false;
  isLayoutHandsetLandscape = false;
  isLayoutLarge = false;
  isLayoutMedium = false;

  constructor(private readonly responsiveLayoutService: ResponsiveLayout) { }

  ngOnInit(): void {
    this.subscriptionHandsetPortrait = this.responsiveLayoutService.
      isLayoutHandsetPortait$.subscribe(isLayoutHandsetPortrait => {
        this.isLayoutHandsetPortrait = isLayoutHandsetPortrait;
      });

    this.subscriptionHandsetLandscape = this.responsiveLayoutService.
      isLayoutHandsetLandscape$.subscribe(result => {
        this.isLayoutHandsetLandscape = result;
      });

    this.subscriptionMedium = this.responsiveLayoutService.
      isLayoutMedium$.subscribe(result => {
        this.isLayoutMedium = result;
      });

    this.subscriptionLarge = this.responsiveLayoutService.
      isLayoutLarge$.subscribe(result => {
        this.isLayoutLarge = result;
      });
  }

  ngOnDestroy(): void {
    this.subscriptionHandsetPortrait.unsubscribe();
    this.subscriptionHandsetLandscape.unsubscribe();
    this.subscriptionMedium.unsubscribe();
    this.subscriptionLarge.unsubscribe();
  }

  handleArtystyczneOprawy() {
    console.log('artystyczne oprawy clicked');
  }
}

