import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteCreateComponent} from "./view/comptes/compte-create/compte-create.component";
import { ClientCreateComponent} from "./view/clients/client-create/client-create.component";

const routes: Routes = [
  { path: 'login', component: CompteCreateComponent },
  { path: 'signup', component: ClientCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
