import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatToolbarModule,
	MatButtonModule,
	MatInputModule,
	MatFormFieldModule,
	MatOptionModule,
	MatSelectModule,
	MatListModule
} from '@angular/material';
import { ItemComponent } from './item/item.component';
import { CategoryService } from './category/category.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemService } from './item/item.service';

@NgModule({
	declarations: [
		AppComponent,
		ItemComponent
	],
	imports: [
		BrowserModule,
		environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		MatOptionModule,
		HttpClientModule,
		ReactiveFormsModule,
		MatListModule
	],
	providers: [
		HttpClient,
		CategoryService,
		ItemService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
