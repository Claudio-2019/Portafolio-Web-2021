import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment  } from "../environments/environment.prod";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TecnologiesComponent } from './tecnologies/tecnologies.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutUsComponent,
    TecnologiesComponent,
    PortafolioComponent,
    ContactUsComponent,
    FooterComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [
    {provide:APP_BASE_HREF,useValue:'/Home'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
