import { Routes } from '@angular/router';

// Layouts
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';
import { LandingComponent } from './pages/landing/landing.component';
export const AppRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'apps',
        loadChildren: './apps/apps.modules#AppsModule'
      },
      {
        path: 'ui-elements',
        loadChildren: './ui-elements/ui-elements.modules#UiElementsModule'
      },
      {
        path: 'forms',
        loadChildren: './forms/forms.modules#Forms_Module'
      },
      {
        path: 'tables',
        loadChildren: './tables/tables.modules#TablesModule'
      },
      {
        path: 'charts',
        loadChildren: './charts/charts.modules#Charts_Module'
      },
      {
        path: 'maps',
        loadChildren: './maps/maps.modules#MapsModule'
      },
      {
        path: 'extras',
        loadChildren: './extras/extras.modules#ExtrasModule'
      }
    ]
  },
  {
    path: '',
    component: AuthenticationLayoutComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './extras/authentication.modules#AuthenticationModule'
      }
    ]
  }
];

