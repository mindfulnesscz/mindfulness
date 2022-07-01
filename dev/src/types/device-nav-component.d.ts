/* eslint-disable no-unused-vars */

export interface WmMnavSlide {
  title?        : string
  className     : string
  callSlide     ( slide:HTMLDivElement, back:boolean ):void
  slideLinks    : Array<WmMnavSlideRef>
  children?     : React.ReactNode
}

export interface WmMnavSlideRef {
  name:string
  el: HTMLDivElement
}

export type WmConstants = {
  homeUrl: string
}