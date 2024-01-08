import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ImageListComponent } from './image-list/image-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'upload', component: UploadComponent, loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule) },
  { path: 'imageList', component: ImageListComponent, loadChildren: () => import('./image-list/image-list.module').then(m => m.ImageListModule) },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
