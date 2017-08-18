import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ViewEncapsulation } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { NavComponent } from './common/nav/nav.component';
import { MenuComponent } from './common/menu/menu.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home List' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
