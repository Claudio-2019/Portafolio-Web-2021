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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
