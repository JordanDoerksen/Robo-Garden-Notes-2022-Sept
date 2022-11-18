import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestBookPageComponent } from './pages/guest-book-page/guest-book-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'guestbook',component:GuestBookPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
