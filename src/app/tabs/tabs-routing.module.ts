import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import('../pages/feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path: 'tabPerfil',
        loadChildren: () => import('../pages/perfil/perfil.module').then( m => m.PerfilPageModule)
    },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
