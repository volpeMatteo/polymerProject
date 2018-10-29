import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-input/iron-input.js';

class AppMessage extends PolymerElement {
  static get template() {
    return html`
      <style>
        :div {
          align: center;
        }
      </style>
     <div align="center">
     Inserisci Nome: <iron-input bind-value="{{Nome}}"><input is="iron-input" placeholder="Insert Nome"></iron-input>
     <h1>Polymer Saluta <b>{{Nome}}!!!</b> 👋</h1>
     </div>
    `;
  }
  static get properties() {
    return {
      Nome: {
        type: String,
        value: '',
      },
    };
  }
}
window.customElements.define('app-message', AppMessage);
