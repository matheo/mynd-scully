import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Partner } from '../../sanity';

@Injectable()
export class PartnerService implements CanActivate, Resolve<Partner> {

  mockedPartners: Partner[] = [
    {
      slug: 'rex',
      name: 'REX',
      logo: 'assets/logos/rex.png',
    },
    {
      slug: 'roofstock',
      name: 'Roofstock',
      logo: 'assets/logos/roofstock.svg',
    }
  ];

  constructor(private router: Router) {}

  get(slug: string): Partner | undefined {
    return this.mockedPartners.find(partner => partner.slug === slug);
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const { slug } = route.params;

    if (!this.get(slug)) {
      // show 404 page if it doesn't exists
      return of(this.router.createUrlTree(['not-found']));
    }

    return of(true);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Partner> {
    const { slug } = route.params;

    return of(this.get(slug) as Partner);
  }
}
