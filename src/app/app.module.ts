import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


// Components
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonationComponent } from './components/donation/donation.component';
import { AuthComponent } from './components/auth/auth.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListComponent } from './components/list/list.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/navigation/nav.component';

// Routing
import { appRoutes } from './routing/routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DonationComponent,
    AuthComponent,
    ProfileComponent,
    ListComponent,
    GalleryComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
