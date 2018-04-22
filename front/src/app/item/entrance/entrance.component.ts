
import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Item } from '../item';
import { EntranceService } from './entrance.service';

@Component({
	selector: 'app-entrance-component',
	templateUrl: 'entrance.component.html',
	styleUrls: ['entrance.component.css']
})
export class EntranceComponent {

	amount = 0;

	value = 0;

	totalValue = 0;

	date = new Date();

	location = '';

	myControl: FormControl = new FormControl();

	filteredOptions: Observable<string[]>;

	options = [];

	unitary = true;

	showValue = 0;

	constructor(
		public dialogRef: MatDialogRef<EntranceComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { item: Item },
		public entranceService: EntranceService
	) {

		this.filteredOptions = this.myControl.valueChanges
			.pipe(
				startWith(''),
				map(val => this.filter(val))
			);

		this.entranceService.getAllLocations().then(locations => {

			this.options = locations;
		});
	}

	onNoClick(): void {

		this.dialogRef.close();
	}

	ok() {

		this.entranceService.create({
			itemId: this.data.item.id,
			amount: this.amount,
			value: +this.value,
			totalValue: +this.totalValue,
			date: this.date,
			location: this.location
		}).then(entrance => {

			this.dialogRef.close(entrance);
		});
	}

	addAmount() {

		this.updateAmount(this.amount + 1);
	}

	removeAmount() {

		this.updateAmount(this.amount - 1);
	}

	filter(val: string): string[] {

		return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
	}

	changeUnitary() {

		this.unitary = !this.unitary;

		if (this.unitary) {

			this.showValue = this.value;
		} else {

			this.showValue = this.totalValue;
		}
	}

	updateValue(value: number) {

		if (this.unitary) {

			this.value = value;
			this.totalValue = value * this.amount;
		} else {

			this.totalValue = value;
			this.value = value / this.amount;
		}

		this.showValue = value;
	}

	updateAmount(amount: number) {

		this.amount = +amount;

		if (this.amount < 0) {

			this.amount = 0;
		}

		this.updateValue(this.showValue);
	}
}