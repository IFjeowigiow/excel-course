import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static ClassName = 'excel__header';
  toHTML() {
    return `
      <input type="text" class="header__input" value="Новая таблица">
      <div>
          <div class="header__button">
              <i class="material-icons">exit_to_app</i>
          </div>
          <div class="header__button">
              <i class="material-icons">delete</i>
          </div>
      </div>
    `;
  }
}
