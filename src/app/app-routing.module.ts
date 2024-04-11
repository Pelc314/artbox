import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtystyczneObrazyComponent } from './artystyczne-obrazy/artystyczne-obrazy.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'main', component: AppComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'artystyczneoprawy', component: ArtystyczneObrazyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };

