import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { MatDialog } from '@angular/material';
import { AddItemComponent } from './add-item';

@Component({
	selector: 'app-list-item',
	templateUrl: './list-item.html',
	styleUrls: ['./list-item.css']
})
export class ListItemComponent implements OnInit {

	@Input() item: Item;

	constructor(
		public dialog: MatDialog
	) { }

	ngOnInit() { }

	add() {

		const dialogRef = this.dialog.open(AddItemComponent, {
			data: {
				item: this.item
			}
		});

		dialogRef.afterClosed().subscribe(result => {

			console.log(result);
		});
	}
}