
declare interface MindGlobal {
  navSmall: React.ReactNode
  navCube: React.ReactNode
}

declare interface MindfulnessDataObject {
  homeUrl: string
  development: boolean
  isDevice: boolean
}

declare interface Window {
    gsap: GSAP
    ScrollTrigger: gsap.Plugin
    MobileNav:React.ReactNode
    DesktopNav:React.ReactNode
    MindfulnessData:MindfulnessDataObject
  }
