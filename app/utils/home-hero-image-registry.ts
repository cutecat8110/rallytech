import {
  homePageImageRegistry,
  type HomePageImageAsset,
  type HomePageImageSourceKey,
  type HomePageImageSlotRegistry
} from '~/utils/home-page-image-registry'

export type HomeHeroImageSourceKey = HomePageImageSourceKey
export type HomeHeroImageAsset = HomePageImageAsset
export type HomeHeroImageRegistry = HomePageImageSlotRegistry

export const homeHeroImageRegistry = homePageImageRegistry[
  'home-hero'
] as HomeHeroImageRegistry
