import { EinfachComponent } from './einfach/einfach.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { InternationalComponent } from './international/international.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    path: "International",
    component: InternationalComponent
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
