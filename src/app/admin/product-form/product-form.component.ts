import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(private categoryService: CategoryService,
              private productsService: ProductsService,
              private router: Router,
              private route: ActivatedRoute) {
    // this.categories$ = categoryService.getCategories().subscribe(x=> console.log(x));
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productsService.get(this.id).pipe(take(1)).subscribe(p => this.product = p);
    }

  }

  ngOnInit() {
  }

  save(product) {
    if(this.id){
      this.productsService.update(this.id, product);
    } else {
      this.productsService.create(product);
    }

    this.router.navigate(['/admin/products']);
  }

  delete(){
    if (!confirm('Are u sure u want to delete the product?')) {
      return;
    }
    this.productsService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }
}
