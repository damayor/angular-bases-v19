import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 29,
  address: 'Bogota, Colombia'
}


const client2 = {
  name: 'Juanita',
  gender: 'female',
  age: 23,
  address: 'Mosquera, Colombia'
}



@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //i18n Select

  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if(this.client() == client1)
    {
      this.client.set(client2) ;
      return;
    }

    this.client.set(client1);
  }

  //I18n Plural

  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos # clientes esperando',
    other: 'tenemos # clientes esperando',
  }

  clients = signal(['David', 'Melisa', 'Laura', 'Mauricio', 'Erika', 'Ximena', 'Lucia', 'Natalia', 'Andrea', ])

  deleteCliente() {
    this.clients.update(prev => prev.slice(1));
  }

  // KeyValue Pipe

  profile = {
    name: 'David',
    gender: 'male',
    age: 31,
    address: 'Berlin, Alemania'
  }

  //Async Pipe
  //trabaja con promesas

  promiseValue: Promise<string> = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Tebemos data de la promesa')
      console.log('promesa finalizada')
    }, 3500)
  })

  myObservableTimer = interval(3000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap: ', value))
  )


}
