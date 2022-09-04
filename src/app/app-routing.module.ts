import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pre-auth', pathMatch: 'full' },
  {
    path: 'pre-auth',
    loadChildren: () => import('./pre-auth/pre-auth.module').then((m) => m.PreAuthModule) 
  },
  {
    path: 'post-auth',
    loadChildren: () => import('./post-auth/post-auth.module').then((m) => m.PostAuthModule),
  },
  { path: '**', redirectTo: 'pre-auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
