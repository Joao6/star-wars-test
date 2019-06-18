import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { LoginComponent } from './login/login.component';
import { NeedAuthGuard } from './auth.guard';

const routes: Routes = [
  {path:  "", pathMatch:  "full", redirectTo:  "login"},
  {path: "login", component: LoginComponent},
  {path: "details", component: CharacterDetailComponent, canActivate: [NeedAuthGuard]},
  {path: "list", component: ListComponent, canActivate: [NeedAuthGuard]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
