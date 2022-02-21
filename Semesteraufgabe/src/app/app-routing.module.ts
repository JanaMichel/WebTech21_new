import { EinfachComponent } from './einfach/einfach.component';
import { KrustentiereComponent } from './krustentiere/krustentiere.component';
import { SuessspeisenComponent } from './suessspeisen/suessspeisen.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { InternationalComponent } from './international/international.component';
import { CreateComponent } from './create/create.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {
    path: "",
    component: StartseiteComponent,
    pathMatch: 'full'
  },
  {
    path: "Einfach",
    component: EinfachComponent
  },
  {
    path: "Krustentiere",
    component: KrustentiereComponent
  },
  {
    path: "Suessspeisen",
    component: SuessspeisenComponent
  },
  {
    path: "International",
    component: InternationalComponent
    },
    {
      path: "Detail/:id",
      component: DetailComponent
      },
  {
    path: "RezeptNiederschreiben",
    component: CreateComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
