import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DirectoryComponent } from './directory/directory.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent, DirectoryComponent, ProfileComponent]
})
export class PagesModule { }
