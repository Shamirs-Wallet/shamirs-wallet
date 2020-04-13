import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConditionsGuard } from './guards/conditions.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  {
    path: 'select-word-length',
    loadChildren: () => import('./pages/select-word-length/select-word-length.module').then(m => m.SelectWordLengthPageModule)
  },
  {
    path: 'select-security',
    loadChildren: () => import('./pages/select-security/select-security.module').then(m => m.SelectSecurityPageModule)
  },
  {
    path: 'manage-cards',
    loadChildren: () => import('./pages/manage-cards/manage-cards.module').then(m => m.ManageCardsPageModule),
    canActivate: [ConditionsGuard]
  },
  {
    path: 'words',
    loadChildren: () => import('./pages/words/words.module').then(m => m.WordsPageModule)
  },  {
    path: 'finish',
    loadChildren: () => import('./pages/finish/finish.module').then( m => m.FinishPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
