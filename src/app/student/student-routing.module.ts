import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:"",
    component: ListComponent
  },
  {
    path:"list",
    component: ListComponent
  },
  {
    path:"add",
    component: AddComponent
  },
  {
    path:"edit",
    component: EditComponent
  },
  {
    path:"delete",
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
