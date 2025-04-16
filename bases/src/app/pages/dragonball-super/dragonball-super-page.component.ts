import { Component,inject} from '@angular/core';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { AddCharacterComponent } from "../../components/dragon-ball/add-character/add-character.component";
import { DragonBallService } from '../../services/dragonball.service';


interface Character {
  id?: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dbz-super-main-page',
  imports: [CharacterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super-page.component.html',

})


export class DragonBallSuperPageComponent {

  public dragonballService = inject(DragonBallService);

}
