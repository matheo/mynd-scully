import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';
import { LayoutModule, LayoutWrapperComponent } from './layout';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: 'partners',
    loadChildren: () =>
      import('./partners/partners.module').then((m) => m.PartnersModule),
  },
  {
    path: '',
    component: LayoutWrapperComponent,
    children: [
      {
        path: '**',
        component: NotFoundComponent
      },
    ],
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
    ScullyLibModule,
    LayoutModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
