import { Component } from '@angular/core';

import { ToastService } from '../toast.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private toastService: ToastService) { }

  handleArtystyczneOprawy(): void {
    console.log('artystyczne oprawy clicked');
    this.toastService.show('artystyczne oprawy clicked');
  }
}

