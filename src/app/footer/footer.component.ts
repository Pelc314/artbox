import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { Layout, ResponsiveLayout } from '../services/responsiveLayout.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  mobileNumber = '+48 604 912 792';
  phoneNumber = '(0 71) 345 22 22';
  email = 'biuro@artbox.com.pl';

  currentLayout$: Observable<Layout> = this.responsiveLayoutService.layout$;

  constructor(private readonly toastService: ToastService, private readonly responsiveLayoutService: ResponsiveLayout) { }

  handleShowMap(): void { //nie łatwiej by było dać statyczny link jako <a href="..."></a> ?
    const artboxAddress = "/Artbox.+Dudkowska+K."
    const mapsUrl = "https://www.google.com/maps?q=" + encodeURIComponent(artboxAddress)
    window.open(mapsUrl, "_blank")
  }

  handleClick(): void {
    this.toastService.show('Skopiowano do schowka', 'Zamknij');
  }
}
