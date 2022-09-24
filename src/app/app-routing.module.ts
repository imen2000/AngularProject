//ici on a toutes les routes 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import {MembersFromComponent} from  './members-from/members-from.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'members',
  },
{
  path: 'members',
  pathMatch:'full',
  component: MembersComponent,
},
{
  path: 'create',
  pathMatch:'full',
  component: MembersFromComponent,
},

{
  path: '**',  // ki t7ot ay haja ba3d el localhost:4200/ ywali y7otek fil localhost:4200/members
  pathMatch:'full',
  redirectTo:'members',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
