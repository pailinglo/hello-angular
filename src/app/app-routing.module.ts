import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { AuthGuard } from './auth/auth.guard';
import { NewComponent } from './new/new.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"}, //set default route to sign-in page
  {path:"sign-in",component:SignInComponent},
  {path:"home",component:HomeComponent},
  { path:"browse",
    //canActivate:[AuthGuard],
    component:BrowseComponent
    // ,
    // children:[
    //   {path:'',canActivateChild:[AuthGuard]}
      
    // ]
  },
  {path: 'new',component:NewComponent},
  {path: 'search',component:SearchComponent},
  // {path: 'search/:searchText',component:SearchComponent}, // not used.
  {path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  //{path:"**",component:PageNotFoundComponent} //for anything else, show page-not-found

];

@NgModule({
  //When registered at the root, the module should be used as follows
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
