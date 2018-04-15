import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IExit } from '../item';
import { environment } from '../../../environments/environment';

@Injectable()
export class ExitService {

	constructor(private http: HttpClient) { }

	create(exit: IExit) {

		return this.http.post<IExit>(environment.api + '/exit', exit).toPromise();
	}
}