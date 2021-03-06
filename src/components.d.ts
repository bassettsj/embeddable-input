/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface EntFreelancer {
    'value': string;
  }
  interface EntFreelancerAttributes extends StencilHTMLAttributes {
    'onFreelancerchange'?: (event: CustomEvent) => void;
    'value'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'EntFreelancer': Components.EntFreelancer;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'ent-freelancer': Components.EntFreelancerAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLEntFreelancerElement extends Components.EntFreelancer, HTMLStencilElement {}
  var HTMLEntFreelancerElement: {
    prototype: HTMLEntFreelancerElement;
    new (): HTMLEntFreelancerElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'ent-freelancer': HTMLEntFreelancerElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'ent-freelancer': HTMLEntFreelancerElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
