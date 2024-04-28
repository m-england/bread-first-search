import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BakedGood } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class BakedGoodsService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<BakedGood[]>('/api/bakedGoods');
    }

    delete(id: number) {
        return this.http.delete(`/api/bakedGoods/${id}`);
    }

    create(bakedGood: Partial<BakedGood>) {
        return this.http.post('/api/bakedGoods/', { ...bakedGood, id: 100 });
    }
}
