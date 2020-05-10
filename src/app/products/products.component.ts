import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',

/** demonstration to use local variable approach when you have template as parent and you want to pass something to the child  */
      //   template: `<div>
      //   <app-search (searchEvent)="onSearch($event)" #search></app-search>
      //   <button class="btn btn-secondary" (click)="search.reset()">Reset</button> // you can also access search.searchText here
      //   <table class="table">
      //       <thead>
      //         <tr>
      //           <th scope="col">Id</th>
      //           <th scope="col">Name</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //           <tr *ngFor='let product of products'>
      //               <td>{{product.id}}</td>
      //               <td><a [routerLink]="['/products', product.id]">{{product.name}}</a></td>
      //           </tr>
      //       </tbody>
      //   </table>
      // </div>`,

/***************************************************************************** */
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:any = [];
  filteredProducts:any = [];
  errorMessage = '';

  /*** demonstrating getter and setter here ****/
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  /**********************************************/


  constructor(private productService: ProductService) { 
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  onSearch(ev) {
    this.listFilter = ev;
  }

 
  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
