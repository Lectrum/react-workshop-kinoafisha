/* Core */
import { makeAutoObservable } from 'mobx';

/* Instruments */
import { Filter } from '../types';

class FilterStore {
    selectedFilter: Filter = 'latest';

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedFilter(nextFilter: Filter) {
        this.selectedFilter = nextFilter;
    }

    get getSelectedFilter() {
        return this.selectedFilter;
    }
}

export const filterStore = new FilterStore();
