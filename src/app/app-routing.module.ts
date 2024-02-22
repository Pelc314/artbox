import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtystyczneObrazyComponent } from './artystyczne-obrazy/artystyczne-obrazy.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'artystyczneoprawy', component: ArtystyczneObrazyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };

