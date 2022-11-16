/* eslint-disable no-unused-vars */


import React from 'react';
import gsap from 'gsap';
import MindCookies from '../helpers/MindCookies';

declare interface MindGlobalSettings {
  navBreakpoint: number
}

export interface ModalObject {
  ModalBackground: HTMLDivElement
  show ( el:HTMLDivElement ):void
}
export interface MindGlobalObject {
  settings: MindGlobalSettings
  mobileNav: React.ReactNode
  desktopNav: React.ReactNode
  homeUrl: string
  isDevice: string
  templateUrl: string
  templateVersion: string
  MindCookiesHandler: MindCookies
  Modal: ModalObject
}


declare global {
  interface Window {
    gsap: GSAP
    ScrollTrigger: gsap.Plugin
    MobileNav:React.ReactNode
    DesktopNav:React.ReactNode
    MindGlobal:MindGlobalObject
  }
}

export interface WmMnavSlide {
  title?        : string
  className     : string
  callSlide     ( slide:HTMLDivElement, back:boolean ):void
  slideLinks    : Array<WmMnavSlideRef>
  children?     : React.ReactNode
}

export interface WmMnavSlideRef {
  name:string
  el: HTMLDivElement | null
}

export interface WmNavSlideChildren {
  homeUrl: string
}

export interface WmNavSubpage {
  templateUrl: string
  homeUrl? : string
}

