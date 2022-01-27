import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DonationsComponent } from './donations/donations.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DonationsCardComponent } from './donations-card/donations-card.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DonationsComponent,
    ProgressBarComponent,
    HomeComponent,
    FooterComponent,
    DonationsCardComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
