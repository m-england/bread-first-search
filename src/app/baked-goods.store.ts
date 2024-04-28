import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { BakedGood } from './data.service'
import { computed, inject } from '@angular/core';
import { BakedGoodsService } from './baked-goods.service';


type BakedGoodsState = {
    goods: BakedGood[];
    selectedId: number | undefined;
    isLoading: boolean;
    filter: { query: string }
}

const initialState: BakedGoodsState = {
    goods: [],
    selectedId: undefined,
    isLoading: false,
    filter: { query: '' }
};

export const BakedGoodsStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ goods, filter, selectedId }) => ({
        filteredGoods: computed(() => {
            return goods().filter(g => g.name.toLowerCase().includes(filter.query().toLowerCase()));
        }),
        good: computed(() => {
            return goods().find(g => g.id == selectedId());
        })
    })),
    withMethods((store, bakedGoodsService = inject(BakedGoodsService)) => ({
        async loadAll(): Promise<void> {
            patchState(store, { isLoading: true });
            const goods = await bakedGoodsService.getAllProm();
            patchState(store, { goods, isLoading: false });
        },
        updateQuery(query: string): void {
            patchState(store, (state) => ({ filter: { ...state.filter, query } }))
        },
        async loadOne(selectedId: number): Promise<void> {
            patchState(store, { isLoading: true });
            const good = await bakedGoodsService.getProm(selectedId);
            patchState(store, { goods: [good], selectedId, isLoading: false })
        },
        selectId(selectedId: number) {
            patchState(store, (state) => ({ selectedId }))
        },
        async addGood(good: Partial<BakedGood>) {
            const goodToBeAdded: BakedGood = {
                id: 100,
                name: '',
                description: '',
                totalTime: '',
                rating: 0,
                pictures: [],
                ...good
            }
            await bakedGoodsService.createProm(goodToBeAdded);
            patchState(store, { goods: [goodToBeAdded, ...store.goods()] });
        }
    }))
)