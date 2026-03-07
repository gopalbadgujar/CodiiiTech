import { Routes } from '@angular/router';
import { CommingSoonComponent } from './shared/componenents/comming-soon/comming-soon.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { AboutComponent } from './features/home/pages/about/about.component';
import { ServicesComponent } from './features/home/pages/services/services.component';
import { NoAccessComponent } from './shared/componenents/no-access/no-access.component';
import { SubscriptionComponent } from './shared/componenents/subscription/subscription.component';
import { PortfolioComponent } from './features/home/pages/portfolio/portfolio.component';
import { SubscriptionGuard } from './core/guards/subscription.guard';
import { ContactComponent } from './features/home/pages/contact/contact.component';
import { PrivacyComponent } from './features/home/pages/privacy/privacy.component';
import { CareerComponent } from './features/home/pages/career/career.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:slug', component: CommingSoonComponent },

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
  canActivate: [SubscriptionGuard]
},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'career', component: CareerComponent },
  { path: 'comming-soon', component: CommingSoonComponent },
  { path: '**', redirectTo: '' }
];
