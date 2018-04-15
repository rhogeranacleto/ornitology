
import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
	selector: 'app-entrance-component',
	templateUrl: 'entrance.component.html',
	styleUrls: ['entrance.component.css']
})
export class EntranceComponent {

	amount = 0;

	value = 0;

	date = new Date();

	location = '';

	myControl: FormControl = new FormControl();

	filteredOptions: Observable<string[]>;

	options = [
		'One',
		'Two',
		'Three'
	];

	constructor(
		public dialogRef: MatDialogRef<EntranceComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {

		this.filteredOptions = this.myControl.valueChanges
			.pipe(
				startWith(''),
				map(val => this.filter(val))
			);
	}

	onNoClick(): void {

		this.dialogRef.close();
	}

	ok() {

		this.dialogRef.close({
			amount: this.amount,
			value: this.value,
			date: this.date,
			location: this.location
		});
	}

	addAmount() {

		this.amount++;
	}

	removeAmount() {

		this.amount--;

		if (this.amount < 0) {

			this.amount = 0;
		}
	}

	filter(val: string): string[] {

		return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
	}
}