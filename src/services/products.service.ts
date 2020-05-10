import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { Product } from '../models/product';

@Injectable()
export class ProductService {
    constructor(private http:HttpClient) {}

    getProducts() {
        let productUrl = "api/products.json";
        return this.http.get(productUrl)
    }

    getProductDetails(id: Number) {
        return this.getProducts()
        .pipe(
            map((products: any[]) => //todo -- add type here. It should not be any
                products.find(p => p.id === id)
            )
        );
    }
}

