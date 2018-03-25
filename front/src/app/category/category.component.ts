import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	showForm = true;

	category: Category;

	categories: Category[];

	categoryForm: FormGroup;

	constructor(
		private categoryService: CategoryService,
		private formBuilder: FormBuilder,
	) { }

	ngOnInit() {

		this.setCategoryes();

		this.categoryForm = this.formBuilder.group({
			name: ['', [Validators.required]]
		});
	}

	toggleShowForm() {

		this.showForm = !this.showForm;
	}

	save() {

		this.categoryService.create(this.category).then(() => {

			this.setCategoryes();
		});
	}

	async setCategoryes() {

		this.categories = await this.categoryService.getAll();

		this.category = new Category();
	}
}
