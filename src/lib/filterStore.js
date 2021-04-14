/* Core */
import { makeAutoObservable } from 'mobx';

class FilterStore {
    filter = 'upcoming';

    constructor() {
        makeAutoObservable(this);
    }

    setFilter(nextFilter) {
        this.filter = nextFilter;
    }
}

export const filterStore = new FilterStore();
