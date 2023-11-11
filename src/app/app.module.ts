import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './sidebar/menu/menu.component';
import { NavBarHeaderComponent } from './sidebar/nav-bar-header/nav-bar-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    NavBarHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
