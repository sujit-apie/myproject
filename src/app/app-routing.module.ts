import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentModule } from "./student/student.module";

const routes: Routes = [
  // {
  //   path : "",
  //   loadChildren : ()=> StudentModule
  // },
  {
    path : "student",
    loadChildren : ()=> StudentModule
  },
  // {
  //   path : "teacher",
  //   loadChildren : ()=> TeacherModule
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
