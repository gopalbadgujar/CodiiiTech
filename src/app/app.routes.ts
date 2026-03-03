import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { CareerComponent } from './pages/career/career.component';
import { CommingSoonComponent } from './shared/componenents/comming-soon/comming-soon.component';
import { NoAccessComponent } from './shared/no-access/no-access.component';
import { authGuard } from './guards/auth.guard';
import { SubscriptionComponent } from './shared/subscription/subscription.component';
import { subscriptionGuard } from './guards/subscription.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:slug', component: CommingSoonComponent },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then(m => m.AdminComponent),
    canActivate: [authGuard]
  },
  {
    path: 'no-access',
    component: NoAccessComponent
  },
  {
  path: 'subscription',
  component: SubscriptionComponent
},
{
  path: 'projects',
  component: PortfolioComponent,
  canActivate: [subscriptionGuard]
},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'career', component: CareerComponent },
  { path: 'comming-soon', component: CommingSoonComponent },
  { path: '**', redirectTo: '' }
];
