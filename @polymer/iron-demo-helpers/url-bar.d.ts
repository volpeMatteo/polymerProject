/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   url-bar.js
 */

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * `url-bar` is a helper element that displays a simple read-only URL bar if
 * and only if the page is in an iframe. In this way we can demo elements that
 * deal with the URL in our iframe-based demo environments.
 *
 * If the page is not in an iframe, the url-bar element is not displayed.
 *
 * ### Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--url-bar` | Mixin applied to the entire element | `{}`
 */
interface UrlBarElement extends LegacyElementMixin, HTMLElement {
  readonly url: string|null|undefined;
  inIframe: boolean|null|undefined;
  path: string|null|undefined;
  query: string|null|undefined;
  hash: string|null|undefined;
}

export {UrlBarElement};

declare global {

  interface HTMLElementTagNameMap {
    "url-bar": UrlBarElement;
  }
}
