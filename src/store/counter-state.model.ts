export class CounterState {
    value: number;
    showCounter: boolean;

    constructor(value: number, showCounter: boolean) {
        this.value = value;
        this.showCounter = showCounter;
    }
}