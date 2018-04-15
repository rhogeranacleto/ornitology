import { Component, OnInit, Input } from '@angular/core';
import { Item, IEntrance, IExit } from '../item';
import { MatDialog } from '@angular/material';
import { EntranceComponent } from '../entrance/entrance.component';
import { ExitComponent } from '../exit/exit.component';

@Component({
	selector: 'app-list-item',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListItemComponent implements OnInit {

	@Input() item: Item;

	constructor(
		public dialog: MatDialog
	) { }

	ngOnInit() { }

	add() {

		const dialogRef = this.dialog.open(EntranceComponent, {
			data: {
				item: this.item
			}
		});

		dialogRef.afterClosed().subscribe((result: IEntrance) => {

			console.log(result);
		});
	}

	remove() {

		const dialogRef = this.dialog.open(ExitComponent, {
			data: {
				item: this.item
			}
		});

		dialogRef.afterClosed().subscribe((result: IExit) => {

			console.log(result);
		});
	}
}