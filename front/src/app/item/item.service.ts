import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { environment } from '../../environments/environment';

@Injectable()
export class ItemService {

	constructor(private http: HttpClient) { }

	create(item: Item) {

		return this.http.post<Item>(environment.api + '/item', item).toPromise();
	}

	getAll() {

		return this.http.get<Item[]>(environment.api + '/items').toPromise();
	}
}
