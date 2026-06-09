class Counter {
    static count: number = 0;

    increment() {
        Counter.count++;
    }

    decrement() {
        Counter.count--;
    }

    getCount() {
        return Counter.count;
    }
}

const instance1 = new Counter();
