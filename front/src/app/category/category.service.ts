import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Category } from './category';

@Injectable()
export class CategoryService {

	constructor(private http: HttpClient) { }

	getAll() {

		return this.http.get<Category[]>(environment.api + '/categories').toPromise();
	}
}
