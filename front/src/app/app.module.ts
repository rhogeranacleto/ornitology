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
	MatListModule,
	MatSidenavModule,
	MatIconModule,
	MatMenuModule,
	MatCheckboxModule,
	MatDividerModule,
	MatDialogModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MAT_DATE_LOCALE,
	MatAutocompleteModule
} from '@angular/material';
import { ItemComponent } from './item/item.component';
import { CategoryService } from './category/category.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemService } from './item/item.service';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routes';
import { CategoryComponent } from './category/category.component';
import { ListItemComponent } from './item/components/list-item';
import { AddItemComponent } from './item/components/add-item';

@NgModule({
	declarations: [
		AppComponent,
		ItemComponent,
		CategoryComponent,
		ListItemComponent,
		AddItemComponent
	],
	imports: [
		BrowserModule,
		environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatToolbarModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		MatOptionModule,
		MatListModule,
		MatSidenavModule,
		MatIconModule,
		MatMenuModule,
		MatCheckboxModule,
		MatDividerModule,
		MatDialogModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatAutocompleteModule,
		FormsModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: false } // <-- debugging purposes only
		)
	],
	providers: [
		HttpClient,
		CategoryService,
		ItemService,
		{
			provide: MAT_DATE_LOCALE,
			useValue: 'pt-BR'
		},
	],
	entryComponents: [
		AddItemComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
