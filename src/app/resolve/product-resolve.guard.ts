import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product';

@Injectable()
export class ProductResolveGuard implements Resolve<Product> {
  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
    const productId = parseInt(route.params.id, 10);
    if (productId === 1) {
      return (<Product>{
        id: 1,
        name: 'iphone7',
        sellerId: 300,
        productType: '手机'
      });
    } else {
      console.log('resolve 失败....')
      this.router.navigate(['/home']);
      return undefined;
    }
  }

}
