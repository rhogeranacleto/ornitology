import { Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';

export const appRoutes: Routes = [
	{
		path: 'category',
		component: CategoryComponent
	},
	{
		path: '',
		component: ItemComponent,
		pathMatch: 'full'
	}
	// { path: '**', component: PageNotFoundComponent }
];