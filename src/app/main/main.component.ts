import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
imports: [RouterOutlet]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
subpages = ['homepage','artystyczneoprawy'];
}
