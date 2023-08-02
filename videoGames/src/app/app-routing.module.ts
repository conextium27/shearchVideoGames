import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { IndexComponent } from './views/index/index.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'wish-list', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
