import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    children: [
      {
        path: '', 
        loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
      },
      {
        path: ':contactId',
        loadChildren: () => import('./contacts/contact-detail/contact-detail.module').then( p => p.ContactDetailPageModule )
      }
    ]
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
