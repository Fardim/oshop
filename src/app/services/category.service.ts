import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/render3/query';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    // this.items = this.db.list('/categories', ref => ref.orderByChild('name'))
    //   .snapshotChanges().pipe(map(changes => {
    //     changes.map(c => ({key: c.key, ...c.payload.val() }));
    //   }));

    this.items = this.db.list('/categories', ref => ref.orderByChild('name'))
      .snapshotChanges().pipe(map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val() }));
      }));

    return this.items;
  }
}
