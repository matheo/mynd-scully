import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule, LayoutWrapperComponent } from '../layout';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutWrapperComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
  ],
  declarations: [
    HomepageComponent
  ],
  exports: [
    HomepageComponent
  ],
})
export class PagesModule {}
