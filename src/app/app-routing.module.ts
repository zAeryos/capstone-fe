import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path        : '',
    redirectTo  : 'homepage',
    pathMatch   : 'full'
  },
  {
    path        : 'about-us',
    component   : AboutUsComponent
  },
  {
    path        : 'contact-us',
    component   : ContactUsComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
