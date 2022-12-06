import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AppComponent } from './app.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
// import { AppComponent } from './app.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'viewUser', component: ViewuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
