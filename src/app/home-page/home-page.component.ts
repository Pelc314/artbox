import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Layout, ResponsiveLayout } from '../services/responsiveLayout.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  currentLayout$: Observable<Layout> = this.responsiveLayoutService.layout$;

  constructor(private readonly responsiveLayoutService: ResponsiveLayout) { }
}
