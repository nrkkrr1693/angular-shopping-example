import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems =[];
  checkoutForm;
  error;

  constructor(private cartservice:CartService,
              private formBuilder:FormBuilder) {

                this. cartitems = this.cartservice.getItems();
                this. checkoutForm = this.formBuilder.group({
                  name:'',
                  address:''
                })
               }

  onSubmit(customerdata){

    console.warn('Your Order has been Submitted.'+customerdata);
    this.cartitems = this.cartservice.clearCart();
    this.checkoutForm.reset();

  }


  ngOnInit() {
    
  }

}