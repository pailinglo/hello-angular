import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BrowseComponent } from './browse/browse.component';
import { TruncatePipe } from './truncate.pipe';
import { ProductModule } from './product/product.module';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProductService } from './product/product.service';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NewComponent } from './new/new.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    PageNotFoundComponent,
    HomeComponent,
    MenuComponent,
    BrowseComponent,
    TruncatePipe,
    PaginatorComponent,
    ShellComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    NewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule
  ],
  providers: [
    TruncatePipe,
    ProductService
  ],
  exports:[
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
