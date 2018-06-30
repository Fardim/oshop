import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;
  constructor(private productsService: ProductsService) { 
    this.products$ = productsService.getAll();
  }

  ngOnInit() {
  }

}
