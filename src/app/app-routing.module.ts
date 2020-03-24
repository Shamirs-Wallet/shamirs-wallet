import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'select-word-length',
    loadChildren: () => import('./pages/select-word-length/select-word-length.module').then( m => m.SelectWordLengthPageModule)
  },
  {
    path: 'select-security',
    loadChildren: () => import('./pages/select-security/select-security.module').then( m => m.SelectSecurityPageModule)
  },
  {
    path: 'write-cards',
    loadChildren: () => import('./pages/write-cards/write-cards.module').then( m => m.WriteCardsPageModule)
  },
  {
    path: 'read-cards',
    loadChildren: () => import('./pages/read-cards/read-cards.module').then( m => m.ReadCardsPageModule)
  },
  {
    path: 'words',
    loadChildren: () => import('./pages/words/words.module').then( m => m.WordsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
