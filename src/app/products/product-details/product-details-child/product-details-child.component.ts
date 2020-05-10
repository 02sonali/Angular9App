import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-details-child',
  templateUrl: './product-details-child.component.html',
  styleUrls: ['./product-details-child.component.scss']
})
export class ProductDetailsChildComponent implements OnInit {
  @Input() product: any
  constructor() { }

  ngOnInit(): void {
  }

}
