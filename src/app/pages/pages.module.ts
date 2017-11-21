import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '@app/pages/components/search/search.component';
import { DirectoryComponent } from '@app/pages/components/directory/directory.component';
import { ProfileComponent } from '@app/pages/components/profile/profile.component';
import { DirectoryService } from '@app/pages/services/directory.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DirectoryService
  ],
  declarations: [SearchComponent, DirectoryComponent, ProfileComponent]
})
export class PagesModule { }
