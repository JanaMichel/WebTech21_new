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
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';


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
    SuessspeisenComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
