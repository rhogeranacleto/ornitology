import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	item: Item;

	items: Item[];

	showForm = false;

	categories: Category[];

	itemForm: FormGroup;

	constructor(
		private categoryService: CategoryService,
		private formBuilder: FormBuilder,
		private itemService: ItemService
	) { }

	ngOnInit() {

		this.item = new Item();

		this.setCategoryes();

		this.setItems();

		this.itemForm = this.formBuilder.group({
			name: ['', [Validators.required]]
		});
	}

	toggleShowForm() {

		this.showForm = !this.showForm;
	}

	save() {

		this.itemService.create(this.item);
	}

	async setCategoryes() {

		this.categories = await this.categoryService.getAll();
	}

	async setItems() {

		this.items = await this.itemService.getAll();
	}
}
