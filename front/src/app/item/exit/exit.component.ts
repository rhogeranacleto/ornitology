
import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Item } from '../item';
import { ExitService } from './exit.service';

@Component({
	selector: 'app-exit-component',
	templateUrl: 'exit.component.html',
	styleUrls: ['exit.component.css']
})
export class ExitComponent {

	amount = 0;

	date = new Date();

	myControl: FormControl = new FormControl();

	constructor(
		public dialogRef: MatDialogRef<ExitComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { item: Item },
		public exitService: ExitService
	) {	}

	onNoClick(): void {

		this.dialogRef.close();
	}

	ok() {

		this.exitService.create({
			itemId: this.data.item.id,
			amount: this.amount,
			date: this.date
		}).then(entrance => {

			this.dialogRef.close(entrance);
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
}