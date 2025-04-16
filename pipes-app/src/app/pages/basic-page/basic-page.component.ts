import { AvailableLocale, LocaleService } from './../../services/locale.service';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  nameLower = signal('david')
  nameUpper = signal('DAVID')
  fullName = signal('dAviD mAYo')

  customDate = signal(new Date())
  localeService = inject(LocaleService);

  tickingDateEffect = effect((onCleanup) => {

    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick')
    }, 1000);

    onCleanup(() => clearInterval(interval));
  })

  changeLocale(locale: AvailableLocale) {
    console.log({locale})
    this.localeService.changeLocale(locale);
  }

}
