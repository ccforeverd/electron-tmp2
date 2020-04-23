/* eslint-disable @typescript-eslint/no-empty-interface */
import Vue, { VNode } from 'vue'
// import 'vuetify/types/lib.d'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
