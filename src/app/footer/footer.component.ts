import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { Layout, ResponsiveLayout } from '../services/responsiveLayout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  mobileNumber = '+48 604 912 792';
  phoneNumber = '(0 71) 345 22 22';
  email = 'biuro@artbox.com.pl';

  subscription: Subscription = new Subscription;
  currentLayout: Layout = Layout.Large;

  constructor(private readonly toastService: ToastService, private readonly responsiveLayoutService: ResponsiveLayout) { }

  ngOnInit(): void {
    this.subscription = this.responsiveLayoutService.layout$.subscribe(result => {
      this.currentLayout = result;
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
