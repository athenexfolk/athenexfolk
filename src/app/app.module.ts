import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LayoutModule } from '@angular/cdk/layout'
import { AppRoutingModule } from './app-routing.module';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BottomComponent } from './components/bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GalleryPageComponent,
    AboutPageComponent,
    HeaderComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
