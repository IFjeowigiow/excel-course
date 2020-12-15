import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static ClassName = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    });
  }

  toHTML() {
    return `
    <div class="formula__info">fx</div>
    <div class="formula__input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    console.log('Formula: onInput', event);
  }

  onClick(event) {
    console.log('Formula: onClick', event);
  }
}