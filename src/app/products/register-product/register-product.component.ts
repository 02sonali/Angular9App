/**

  Example of a template driven form

**/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent implements OnInit {
  registrationFields= {name: "", price: "", description: "", availableQuantity:0, status:"active"};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registrationFields);
  }

}
