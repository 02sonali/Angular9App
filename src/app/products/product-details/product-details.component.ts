import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product = {id: 1, name: "Axe", description: "abc"};
  errorMessage = "";
  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    if(id) {
      this.productService.getProductDetails(id)
      .subscribe({
        next: product => {
          console.log(product);
          this.product = product;
        },
        error: err => this.errorMessage = err
      });
    }
  }

}
