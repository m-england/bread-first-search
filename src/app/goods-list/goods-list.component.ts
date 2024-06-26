import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, fromEvent, map, startWith, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { BakedGoodsService } from '../baked-goods.service';
import { BakedGood } from '../data.service';

@Component({
    selector: 'app-goods-list',
    templateUrl: './goods-list.component.html',
    styleUrl: './goods-list.component.css'
})
export class GoodsListComponent {
    @ViewChild('searchBox') searchBox!: ElementRef<HTMLInputElement>;
    filteredGoods$!: Observable<BakedGood[]>;

    constructor(private bakedGoods: BakedGoodsService) { }
    ngAfterViewInit(): void {
        this.filteredGoods$ = fromEvent(this.searchBox.nativeElement, 'keyup').pipe(
            map((event: Event) => (event.target as HTMLInputElement).value),
            startWith(''),
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((search: string) =>
                this.bakedGoods.getAll().pipe(
                    map(goods => search ? goods.filter(g => g.name.toLowerCase().includes(search.toLowerCase())) : goods)
                )
            )
        );

    }

    onDelete(id: number) {
        this.bakedGoods.delete(id);
    }

    onRate(bakedGood: BakedGood, newRating: number) {
        bakedGood.rating = newRating;
    }
}
