import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEntrance } from '../item';
import { environment } from '../../../environments/environment';

@Injectable()
export class EntranceService {

	constructor(private http: HttpClient) { }

	create(entrance: IEntrance) {

		return this.http.post<IEntrance>(environment.api + '/entrance', entrance).toPromise();
	}
}