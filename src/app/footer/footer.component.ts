import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { ResponsiveLayout } from '../services/responsiveLayout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  subscriptionHandsetPortrait: Subscription = new Subscription;
  subscriptionHandsetLandscape: Subscription = new Subscription;
  subscriptionMedium: Subscription = new Subscription;
  subscriptionLarge: Subscription = new Subscription;
  isLayoutHandsetPortrait: boolean = false;
  isLayoutHandsetLandscape = false;
  isLayoutLarge = false;
  isLayoutMedium = false;
  mobileNumber = '+48 604 912 792';
  phoneNumber = '(0 71) 345 22 22';
  email = 'biuro@artbox.com.pl';

  constructor(private readonly toastService: ToastService, private readonly responsiveLayoutService: ResponsiveLayout) { }

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

  handleShowMap(): void {
    const artboxAddress = "/Artbox.+Dudkowska+K."
    const mapsUrl = "https://www.google.com/maps?q=" + encodeURIComponent(artboxAddress)
    window.open(mapsUrl, "_blank")
  }

  handleClick(): void {
    this.toastService.show('Skopiowano do schowka', 'Zamknij');
  }
}
