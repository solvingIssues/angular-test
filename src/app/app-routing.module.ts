import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './view/upload/upload.component';
import { ImageListComponent } from './view/image-list/image-list.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { HomeComponent } from './view/home/home.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'upload', component: UploadComponent, loadChildren: () => import('./view/upload/upload.module').then(m => m.UploadModule) },
  { path: 'imageList', component: ImageListComponent, loadChildren: () => import('./view/image-list/image-list.module').then(m => m.ImageListModule) },
  { path: '**', component: PageNotFoundComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
