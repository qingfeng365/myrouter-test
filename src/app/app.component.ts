import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {

  }

  // 无参数的写法
  /*
  toProductDetail() {
    // 第一种写法
    // this.router.navigateByUrl('/product');
    // 第二种写法
    this.router.navigate(['/product']);

  }
  */

  // 带查询参数的写法
  /*
  toProductDetail() {
    // 第一种写法
    // this.router.navigateByUrl('/product?type=电子产品');
    // 第二种写法
    this.router.navigate(['/product'], { queryParams: { type: '电子产品' } });
  }
  */

  // 带路由参数的写法
  toProductDetail() {
    // 第一种写法
    // this.router.navigateByUrl('/product/2?type=电子产品');
    // 第二种写法
    this.router.navigate(['/product', 2], { queryParams: { type: '电子产品' } });
  }

}
