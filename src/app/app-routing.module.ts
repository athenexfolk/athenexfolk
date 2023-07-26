import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "gallery",
    component: GalleryPageComponent
  },
  {
    path: "about",
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
