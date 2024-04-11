import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Layout, ResponsiveLayout } from '../services/responsiveLayout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public layout$: Observable<Layout> = this.responsiveLayoutService.layout$;
  showFiller = false;
  constructor(private readonly responsiveLayoutService: ResponsiveLayout) {}

  handleArtystyczneOprawy() {
    console.log('artystyczne oprawy clicked');
  }
}
