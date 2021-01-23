import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GotyComponent } from './pages/goty/goty.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'goty', component: GotyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
