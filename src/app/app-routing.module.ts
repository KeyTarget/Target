import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from '@app/pages/components/search/search.component';
import { DirectoryComponent } from '@app/pages/components/directory/directory.component';
import { ProfileComponent } from '@app/pages/components/profile/profile.component';

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
