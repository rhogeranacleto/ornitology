import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Category } from './category';

@Injectable()
export class CategoryService {

	constructor(private http: HttpClient) { }

	create(category: Category) {

		return this.http.post<Category>(environment.api + '/category', category).toPromise();
	}

	getAll() {

		return this.http.get<Category[]>(environment.api + '/categories').toPromise();
	}
}
