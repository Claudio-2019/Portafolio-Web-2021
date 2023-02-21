import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { TecnologiesComponent } from './tecnologies/tecnologies.component';

const routes: Routes = [

  {path:'Contact-Me',component:ContactUsComponent},
  {path:'Web-Proyects',component:PortafolioComponent},
  {path:'My-Technology-Strenght',component:TecnologiesComponent},
  {path:'About-Me',component:AboutUsComponent},
  {path:'**',redirectTo:'/About-Me'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
