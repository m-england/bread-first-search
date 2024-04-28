import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BakedGoodsService } from '../baked-goods.service';
import { BakedGood } from '../data.service';

@Component({
    selector: 'app-good-add',
    templateUrl: './good-add.component.html',
    styleUrl: './good-add.component.css'
})
export class GoodAddComponent {
    @Output() addGood = new EventEmitter<Partial<BakedGood>>();
    public form!: FormGroup;

    constructor(private bakedGood: BakedGoodsService, private router: Router, private fb: FormBuilder) {
        this.form = this.fb.group({
            name: [''],
            description: [''],
            totalTime: [''],
            recipeLink: ['']
        });
    }

    addClicked() {
        const goodToAdd = {
            ...this.form.value,
            pictures: ['baking_40.jpg']

        }
        this.bakedGood.create(goodToAdd).subscribe(() => this.router.navigate(['']));
    }
}
