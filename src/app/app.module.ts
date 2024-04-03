import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { TripComponent } from './pages/trip/trip.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    BreadcrumbComponent,
    NewsletterComponent,
    AboutUsComponent,
    ContactUsComponent,
    PackagesComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    NoopAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass     : 'toast-top-right',
      preventDuplicates : true,
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
