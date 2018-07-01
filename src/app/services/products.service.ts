import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { query } from '@angular/core/src/render3/query';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  create(product){
    return this.db.list('/products').push(product);
  }

  getAll(){
    this.products = this.db.list('/products').snapshotChanges().pipe(map(prod => {
      return prod.map(c => ({key: c.payload.key, ...c.payload.val()}));
    }));

    return this.products;
  }

  get(productId){
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId, product){
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId){
    return this.db.object('/products/' + productId).remove();
  }
}
