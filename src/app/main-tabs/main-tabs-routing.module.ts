import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTabsPage } from './main-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: MainTabsPage,
    children: [
      {
        path: 'movies',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../movies/movies.module').then((m) => m.MoviesPageModule),
          },
          {
            path: 'childtabs',
            loadChildren: () =>
              import('../child-tabs/child-tabs.module').then(
                (m) => m.ChildTabsPageModule
              ),
          },
        ],
      },
      {
        path: 'ratings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ratings/ratings.module').then(
                (m) => m.RatingsPageModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: 'maintabs/movies',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainTabsPageRoutingModule {}
