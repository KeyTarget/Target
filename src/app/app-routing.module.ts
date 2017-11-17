import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from '@app/pages/search/search.component';
import { DirectoryComponent } from '@app/pages/directory/directory.component';
import { ProfileComponent } from '@app/pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'directory',
    component: DirectoryComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
