import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ExitComponent } from './item/exit/exit.component';
import { ListItemComponent } from './item/list/list.component';
import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';
import { EntranceComponent } from './item/entrance/entrance.component';
import { appRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatListModule, MatSidenavModule, MatIconModule, MatMenuModule, MatCheckboxModule, MatDividerModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule } from '@angular/material';

describe('AppComponent', () => {

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				ItemComponent,
				CategoryComponent,
				ListItemComponent,
				EntranceComponent,
				ExitComponent
			],
			imports: [
				BrowserModule,
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
			]
		}).compileComponents();
	}));

	it('should create the app', async(() => {

		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it(`should have as title 'Ornitologia'`, async(() => {

		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('Ornitologia');
	}));

	// it('should render title in a h1 tag', async(() => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.debugElement.nativeElement;
	// 	expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
	// }));
});
