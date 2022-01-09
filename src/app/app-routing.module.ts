import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FortuneComponent } from './fortune/fortune.component';

const routes: Routes = [
  {
    path: '',
    component: FortuneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
