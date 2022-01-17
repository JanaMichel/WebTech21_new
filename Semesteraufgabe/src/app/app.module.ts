import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EinfachComponent } from './einfach/einfach.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { FooterComponent } from './footer/footer.component';
import { InternationalComponent } from './international/international.component';
import { CreateComponent } from './create/create.component';
import { KrustentiereComponent } from './krustentiere/krustentiere.component';
import { SuessspeisenComponent } from './suessspeisen/suessspeisen.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EinfachComponent,
    ToolbarComponent,
    StartseiteComponent,
    FooterComponent,
    InternationalComponent,
    CreateComponent,
    KrustentiereComponent,
    SuessspeisenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
