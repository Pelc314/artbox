import { Component } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  mobileNumber = '+48 604 912 792';
  phoneNumber = '(0 71) 345 22 22';

  constructor(private toastService: ToastService) { }

  handleShowMap(): void {
    const artboxAddress = "/Artbox.+Dudkowska+K."
    const mapsUrl = "https://www.google.com/maps?q=" + encodeURIComponent(artboxAddress)
    window.open(mapsUrl, "_blank")
  }

  handleClick(): void {
    this.toastService.show('Skopiowano do schowka','Zamknij');
  }
}
