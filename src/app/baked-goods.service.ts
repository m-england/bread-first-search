import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { BakedGood } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class BakedGoodsService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<BakedGood[]>('/api/bakedGoods');
    }

    getAllProm() {
        return lastValueFrom(this.http.get<BakedGood[]>('/api/bakedGoods'));
    }

    get(id: number) {
        return this.http.get<BakedGood>(`/api/bakedGoods/${id}`);
    }

    getProm(id: number) {
        return lastValueFrom(this.http.get<BakedGood>(`/api/bakedGoods/${id}`));
    }

    delete(id: number) {
        return this.http.delete(`/api/bakedGoods/${id}`);
    }

    create(bakedGood: Partial<BakedGood>) {
        return this.http.post('/api/bakedGoods/', { ...bakedGood, id: 100 });
    }

    createProm(bakedGood: BakedGood) {
        return lastValueFrom(this.http.post<BakedGood>('/api/bakedGoods/', bakedGood));
    }
}
