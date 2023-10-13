import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { AddWorksComponent } from './add-works-component/add-works-component.component';
import { WorksComponent } from './works-component/works-component.component';
import { DeleteWorksComponent } from './delete-works-component/delete-works-component.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "add-work",
    component: AddWorksComponent
  },
  {
    path: "works",
    component: WorksComponent
  },
  {
    path: "delete",
    component: DeleteWorksComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
