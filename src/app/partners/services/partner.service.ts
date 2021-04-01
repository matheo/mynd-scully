import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Partner } from '../../sanity';

@Injectable()
export class PartnerService implements CanActivate, Resolve<Partner> {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const { slug } = route.params;

    // show 404 page if it doesn't exists
    const url = this.router.createUrlTree(['not-found'])
    return of(true);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Partner> {
    const { slug } = route.params;

    return of({
      slug,
      name: 'Roofstock',
      logo: 'assets/logos/roofstock.svg',
    });
  }
}
