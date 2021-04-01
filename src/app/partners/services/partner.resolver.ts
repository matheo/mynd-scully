import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Partner } from '../../sanity';

@Injectable()
export class PartnerResolver implements Resolve<Partner> {
  resolve(route: ActivatedRouteSnapshot): Observable<Partner> {
    const { slug } = route.params;

    // TODO show 404 page if it doesn't exists
    return of({
      slug,
      name: 'REX',
      logo: 'assets/logos/rex.png',
    });
  }
}
