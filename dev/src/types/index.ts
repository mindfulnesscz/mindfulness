/* eslint-disable no-unused-vars */


import React from 'react';
import gsap from 'gsap';
import MindCookies from '../helpers/MindCookies';


export interface MindGlobalObject {
  navSmall: React.ReactNode
  navCube: React.ReactNode
  homeUrl: string
  isDevice: string
  templateUrl: string
  templateVersion: string
  MindCookiesHandler: MindCookies
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

