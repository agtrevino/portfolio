import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeTwoComponent } from './home-two/home-two.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home-two' },
  // { path: '', component: HomeOneComponent },
  { path: '', component: HomeTwoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
