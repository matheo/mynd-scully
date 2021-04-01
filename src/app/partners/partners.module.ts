import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { PartnerService } from './services/partner.service';
import { LayoutModule, LayoutWrapperComponent } from '../layout';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutWrapperComponent,
    children: [
      {
        path: ':slug',
        canActivate: [PartnerService],
        resolve: { partner: PartnerService },
        component: DisplayComponent
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
  providers: [PartnerService],
})
export class PartnersModule {}
