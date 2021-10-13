import { Component, OnInit } from '@angular/core';

/* To configure and use the component to use the cart service, 
we need to import the CartService from the cart.service.ts file. 
After this,doing the same steps as before we need to inject the CartService so that the cart component can use it. */
import { CartService } from '../cart.service';

/* Angular's FormBuilder service provides convenient methods for generating controls. As with the other services we’ve used, 
we need to import and inject the service before we can use it. 
Import the FormBuilder service from the @angular/forms package since we will need to use them inside the cart component: */
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // items: Array<Object> = [];
  items: Array<any> = [];

  //
  checkoutForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {

    /* Still in the CartComponent class, define the checkoutForm property to store the form model. To gather the user's name and address, 
    we will set the checkoutForm property with a form model containing name and address fields, using the FormBuilder group() method.
     We will add this between the curly braces, {}, of the constructor. */
    this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
    });
   }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: any){
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}


/* IMPORTANT TO KNOW */
/* from https://stackoverflow.com/questions/43338763/typescript-property-does-not-exist-on-type-object
You probably have allProviders typed as object[] as well. And property country does not exist on object. If you don't care about typing, you can declare both allProviders and countryProviders as Array<any>:
-1-so
let countryProviders: Array<any>;
let allProviders: Array<any>;
--------------------------

-2-oder-so----------------
If you do want static type checking. You can create an interface for the structure and use it:

interface Provider {
    region: string,
    country: string,
    locale: string,
    company: string
}

let countryProviders: Array<Provider>;
let allProviders: Array<Provider>; 
--------------------------*/
