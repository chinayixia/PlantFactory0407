import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'contrl', loadChildren: './contrl/contrl.module#ContrlPageModule' },
  { path: 'collect', loadChildren: './collect/collect.module#CollectPageModule' },
  { path: 'alarm', loadChildren: './alarm/alarm.module#AlarmPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'time', loadChildren: './history/time/time.module#TimePageModule' },
  { path: 'contrl-time', loadChildren: './contrl-time/contrl-time.module#ContrlTimePageModule' },
  { path: 'contrl-condition', loadChildren: './contrl-condition/contrl-condition.module#ContrlConditionPageModule' },
  { path: 'water', loadChildren: './water/water.module#WaterPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
