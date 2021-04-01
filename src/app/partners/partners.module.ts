import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { PartnerResolver } from './services/partner.resolver';
import { LayoutModule, LayoutWrapperComponent } from '../layout';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutWrapperComponent,
    children: [
      {
        path: ':slug',
        resolve: {
          partner: PartnerResolver
        },
        component: DisplayComponent,
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
  declarations: [DisplayComponent],
  providers: [PartnerResolver],
})
export class PartnersModule {}
