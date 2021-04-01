import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule, LayoutWrapperComponent } from '../layout';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutWrapperComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    LayoutModule,
  ],
  declarations: [
    HomepageComponent,
    NotFoundComponent
  ],
  exports: [
    NotFoundComponent
  ],
})
export class PagesModule {}
