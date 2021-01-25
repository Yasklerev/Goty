import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { GotyComponent } from './pages/goty/goty.component';

// Components Module
import { ComponentsModule } from './components/components.module';

// Angularfire
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent, StartComponent, GotyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Components Module
    ComponentsModule,

    HttpClientModule,

    // Angularfire
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
