// import { DBZService } from './../services/dbz.service';
// import { Character } from './../interfaces/character.interface';
import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { AddCharacterComponent } from "../../components/dragon-ball/add-character/add-character.component";


interface Character {
  id?: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dbz-super-main-page',
  imports: [NgClass, CharacterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super-page.component.html',

})


export class DragonBallSuperPageComponent {

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
    }
  ])


  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  })




  addCharacter(character: Character) {
    this.characters.update( (list) => [...list, character]);
    console.log('llamado desde el padre')

  }




}
