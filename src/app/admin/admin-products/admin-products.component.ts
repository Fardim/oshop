import { query } from '@angular/core/src/render3/query';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;
  constructor(private productsService: ProductsService) { 
    this.subscription = productsService.getAll().subscribe(p=> this.filteredProducts = this.products = p);
  }

  ngOnInit() {
  }

  filter(query:string){
    this.filteredProducts = (query)? 
                            this.products.filter(d=> d.title.toLowerCase().includes(query.toLowerCase())) : 
                            this.products;
  }
}
