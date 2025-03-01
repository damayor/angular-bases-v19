import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html'
})
export class CounterPageComponent {


  counter = 15;

  counterSignal = signal(10);

  increaseBy(value: number) {
    // this.counter += value;

    this.counterSignal.update( current => current + value );
  }

  resetCounter() {
    // this.counter = 0;

    this.counterSignal.set(0)
  }

}
