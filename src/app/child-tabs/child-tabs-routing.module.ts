import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildTabsPage } from './child-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: ChildTabsPage,
    children: [
      {
        path: 'movie',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../movie/movie.module').then((m) => m.MoviePageModule),
          },
        ],
      },
      {
        path: 'actors',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../actors/actors.module').then((m) => m.ActorsPageModule),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/childtabs/movie',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildTabsPageRoutingModule {}
