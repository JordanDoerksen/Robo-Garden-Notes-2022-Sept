import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestBookPageComponent } from './pages/guest-book-page/guest-book-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'guestbook',component:GuestBookPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
