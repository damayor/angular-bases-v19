import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'hero-page-component',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  // public name: string = 'ironman'
  // public age: number = 45;

  public nameSignal = signal('Ironman');
  public ageSignal = signal(45);

  getCapitalizedName() {
    this.nameSignal.update( v => v.toUpperCase());
  }

  heroDescription = computed(() => {
    const description = `${this.nameSignal()} - ${this.ageSignal()}`
    return description
  })

  capitalizedName = computed(() => {
    return this.nameSignal().toUpperCase()
  })

  changeHero() {
    this.nameSignal.set('Spiderman');
    this.ageSignal.set(17)
  }

  changeAge() {
    this.ageSignal.set(60);
  }

  resetForm() {
    this.nameSignal.set('Ironman');
    this.ageSignal.set(45);
  }
}
