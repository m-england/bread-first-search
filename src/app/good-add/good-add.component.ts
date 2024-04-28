import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BakedGoodsStore } from '../baked-goods.store';
import { BakedGood } from '../data.service';

@Component({
    selector: 'app-good-add',
    templateUrl: './good-add.component.html',
    styleUrl: './good-add.component.css',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class GoodAddComponent {
    @Output() addGood = new EventEmitter<Partial<BakedGood>>();
    public form!: FormGroup;

    readonly store = inject(BakedGoodsStore);

    constructor(private router: Router, private fb: FormBuilder) {
        this.form = this.fb.group({
            name: [''],
            description: [''],
            totalTime: [''],
            recipeLink: ['']
        });
    }

    async addClicked() {
        const goodToAdd = {
            ...this.form.value,
            pictures: ['baking_40.jpg']

        };

        await this.store.addGood(goodToAdd);
        this.router.navigate(['']);
    }
}
