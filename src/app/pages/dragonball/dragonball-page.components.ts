// import { DBZService } from './../services/dbz.service';
// import { Character } from './../interfaces/character.interface';
import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


interface Character {
  id?: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dbz-main-page',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',

})


export class DragonBallPageComponent {

  // constructor( private dbzService: DBZService) {  }

  name = signal('')
  power = signal(0)

  characters = signal<Character[]>([
    {
      id: 123,
      name:'Krillin',
      power: 2000
    },
    {
      id: 145,
      name: 'Goku',
      power: 9000
    },
    {
      id: 234,
      name: 'Vegeta',
      power: 8000
    },
    {
      id: 890,
      name: 'Yamcha',
      power: 500
    }
  ])


  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  })


  // get characters(): Character[] {
  //   return [...this.dbzService.characters];
  // }

  // deleteCharacterById(id: string) {
  //   this.dbzService.deleteCharacterById(id);
  // }

  addCharacter() {
    if( !this.name() || !this.power() || this.power() <= 0 ) {
      return;
    }

    const newCharacter : Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update( (list) => [...list, newCharacter]);
    this.resetFields()

  }

  resetFields() {
    this.name.set('')
    this.power.set(0)
  }


}
