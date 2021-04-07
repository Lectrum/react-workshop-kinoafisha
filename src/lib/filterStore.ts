/* Core */
import { makeAutoObservable } from 'mobx';

/* Instruments */
import { UFilter } from '../types';

class FilterStore {
    selectedFilter: UFilter = 'upcoming';

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedFilter(nextFilter: UFilter) {
        this.selectedFilter = nextFilter;
    }

    get getSelectedFilter() {
        return this.selectedFilter;
    }
}

export const filterStore = new FilterStore();
