import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { GotyComponent } from './pages/goty/goty.component';

// Components Module
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent, StartComponent, GotyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Components Module
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
