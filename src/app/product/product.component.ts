import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  constructor(private routeInfo: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.routeInfo.data.subscribe(
      (data: { product: Product }) =>
      this.product = data.product
    )
  }
}



// 第5讲之前保留的内容
// export class ProductComponent implements OnInit {

//   productType: string = '';
//   productId: number;
//   constructor(private routeInfo: ActivatedRoute) {

//   }

//   // 使用快照模式的写法
//   /*
//   ngOnInit() {
//     this.productType = this.routeInfo.snapshot.queryParams.type;
//     console.log(this.productType);
//     this.productId = this.routeInfo.snapshot.params.id;
//     console.log(this.productId);
//   }
//   */

//   // 使用订阅模式的写法
//   ngOnInit() {
//     console.log('ngOnInit 被触发...')
//     this.routeInfo.queryParams.subscribe(
//       (params: Params) => {
//         console.log('获得新的 queryParams:');
//         console.log(params);
//         this.productType = params.type;

//       });
//     this.routeInfo.params.subscribe(
//       (params: Params) => {
//         console.log('获得新的 params:');
//         console.log(params);
//         this.productId = params.id
//       });
//   }
// }
