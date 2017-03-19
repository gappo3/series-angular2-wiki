import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PageListComponent } from './pages/page-list/page-list.component'
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pages', component: PageListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)