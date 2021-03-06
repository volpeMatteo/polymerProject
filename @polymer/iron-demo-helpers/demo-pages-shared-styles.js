/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/font-roboto/roboto.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

const template = html`
<dom-module id="demo-pages-shared-styles">
  <template>
    <style>
      body {
        font-family: 'Roboto', 'Noto', sans-serif;
        font-size: 14px;
        margin: 0;
        padding: 24px;
        background-color: #fafafa;
      }

      .horizontal-section-container {
        @apply --layout-horizontal;
        @apply --layout-center-justified;
        @apply --layout-wrap;
      }

      .vertical-section-container {
        @apply --layout-vertical;
        @apply --center-justified;
      }

      .centered {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      demo-snippet.centered-demo {
        --demo-snippet-demo: {
          @apply --layout-horizontal;
          @apply --layout-wrap;
          @apply --layout-center-justified;
        };
      }
    </style>
  </template>
</dom-module>
`;

template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
