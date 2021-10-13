import { Component, OnInit } from '@angular/core';

// package that have some methods and properties that will help us to grab the value from the URL and use it with some build-in methods
import { ActivatedRoute } from '@angular/router';

// Import the cart service to the product-details.component.ts and Inject the cart service by adding it to the constructor(), define the addToCart() method. This adds the current product to the cart.
import { CartService } from '../cart.service';

import { products } from '../products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:any;

  constructor(
      private route: ActivatedRoute, 
      private cartService: CartService
    ) { }

  /* The addToCart() method does the following:
  Receives the current product.
  Uses the cart service's addToCart() method to add the product to the cart.
  Displays a message that we’ve added a product to the cart. */
  addToCart(product:object) {   /* ??????? Why we dont use addToCart(product: ->>>Product) {this.cartService.addToCart(product); window.alert('Your product has been added to the cart!');} */
  this.cartService.addToCart(product);
  window.alert('Your product has been aded to the cart!'); 
  }
  /* addToCart() function will accept one parameter and it will show you a message that your product has been added to the cart,
   then we will use the function addToCart from the CartService to push that element to the items array. */

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    let id:any = params.get('productId');
    this.product = products[id];
    });

  }

}
