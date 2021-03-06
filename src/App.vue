<template lang="pug">
#app
  Hero
  Introduction
  PortfolioItem(
    :portfolioItemMediaLeft='true', 
    portfolioItemHeading='Commodore Limited Edition', 
    portfolioItemContent='Each carline is built up with a selection of components. We use Fabricator as an integrated pattern library. Each time a new component is created, Fabricator automatically adds it to the pattern library. The client can then go into the pattern libarary and choose what sort of components they would like to use for the next project.', 
    portfolioItemVideo='https://holden.com.au/resources/media/videos/commodore/2017/2017-01-commodore-svp-overview-hero.mp4', 
    portfolioItemPoster='http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715724/portfolio/commodore-motorsport.jpg', 
    portfolioItemIcon='↛', 
    portfolioItemHref='https://holden.com.au/cars/commodore/limited-edition'
  )
  PortfolioItem(
    :portfolioItemMediaLeft='false', 
    portfolioItemHeading='Commodore Carline', 
    portfolioItemContent='The carline project would define a set of responsive components which would form the building blocks for all Holden carline pages moving forward. This gave a consistent feel to each carline.', 
    portfolioItemVideo='https://holden.com.au/resources/media/videos/commodore/2017/2017-01-commodore-overview-hero.mp4', 
    portfolioItemPoster='http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715420/Portfolio/commodore-redline.jpg', 
    portfolioItemIcon='➳', 
    portfolioItemHref='https://www.holden.com.au/cars/commodore'
  )
  PortfolioItem(
    :portfolioItemMediaLeft='true', 
    portfolioItemHeading='Colorado Carline', 
    portfolioItemContent='Each carline is built up with a selection of components. We use Fabricator as an integrated pattern library. Each time a new component is created, Fabricator automatically adds it to the pattern library. The client can then go into the pattern libarary and choose what sort of components they would like to use for the next project.', 
    portfolioItemVideo='https://holden.com.au/resources/media/videos/colorado/2017/2017_02_colorado_overview_performance.mp4', 
    portfolioItemPoster='http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715420/Portfolio/colorado-ltz.jpg', 
    portfolioItemIcon='⇝', 
    portfolioItemHref='https://www.holden.com.au/cars/colorado'
  )
  PortfolioItem(
    :portfolioItemMediaLeft='false', 
    portfolioItemHeading='Colorado Accessories', 
    portfolioItemContent='For this project we really wanted to show off the product with a looping video as the centre piece of the design. Over six videos were shot for each site section to showcase each Accessory type. We took the best 6-10 second cut of each to autoplay at the top of each page.', 
    portfolioItemVideo='https://holden.com.au/resources/videos/Holden0616Towing_Loop_V01.mp4', 
    portfolioItemPoster='http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715724/portfolio/colorado-accessories2.jpg', 
    portfolioItemIcon='⇝', 
    portfolioItemHref='https://www.holden.com.au/accessories/colorado'
  )
  // <router-view></router-view>
  Foot
</template>

<script>
  import Hero from './components/organisms/Hero'
  import Introduction from './components/organisms/Introduction'
  import Portfolio from './components/Portfolio'
  import PortfolioItem from './components/organisms/PortfolioItem'
  import Foot from './components/organisms/Foot'

  export default {
    name: 'app',
    components: {
      Hero,
      Introduction,
      Portfolio,
      PortfolioItem,
      Foot
    }
  }
</script>

<style>

  /* Variables */
  :root {
    --global-font-size:    18px;
    --global-line-height:  1.8;
    --tablet-up:           64.063em;
    --desktop-up:          106.3em;
    --spacing:             calc(var(--global-font-size) * 1.5);
    --spacing-small:       calc(var(--spacing) / 2);
    --spacing-medium:      calc(var(--spacing) * 2);
    --spacing-large:       calc(var(--spacing) * 4);
    --spacing-xlarge:      calc(var(--spacing) * 6);
    --transition:          .4s;
    --white:               #fff;
    --black:               #000;
    --grey:                #a3a1a1;
  }

  @font-face {
    font-family: 'maison';
    src: 
      url('~./assets/fonts/MaisonNeue-Book.eot?#iefix') format('embedded-opentype'),  
      url("~./assets/fonts/MaisonNeue-Book.woff") format("woff"), 
      url("~./assets/fonts/MaisonNeue-Book.ttf") format("truetype"), 
      url("~./assets/fonts/MaisonNeue-Book.svg") format("svg");
    font-weight: 400;
    font-style: normal; 
  }

  @font-face {
    font-family: 'maison';
    src: 
      url('~./assets/fonts/MaisonNeue-Medium.eot?#iefix') format('embedded-opentype'),  
      url("~./assets/fonts/MaisonNeue-Medium.woff") format("woff"), 
      url("~./assets/fonts/MaisonNeue-Medium.ttf") format("truetype"), 
      url("~./assets/fonts/MaisonNeue-Medium.svg") format("svg");
    font-weight: 500;
    font-style: normal; 
  }

  @font-face {
    font-family: 'maison';
    src: 
      url('~./assets/fonts/MaisonNeue-Bold.eot?#iefix') format('embedded-opentype'),  
      url("~./assets/fonts/MaisonNeue-Bold.woff") format("woff"), 
      url("~./assets/fonts/MaisonNeue-Bold.ttf") format("truetype"), 
      url("~./assets/fonts/MaisonNeue-Bold.svg") format("svg");
    font-weight: 600;
    font-style: normal; 
  }



  /* Base */
  html {
    box-sizing: border-box;
    color: #000;
    font-family: 'maison', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: calc(var(--global-line-height) * var(--global-font-size));
    min-height: 100%;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, dd, ol, ul,
  figure,
  hr,
  fieldset, legend {
    margin:  0;
    padding: 0;
  }

  img {
    max-width: 100%;
    font-style: italic;
    vertical-align: middle;
  }

  img[width],
  img[height] {
    max-width: none;
  }



  /* Scaffold */
  .page { 
    margin-right: auto;
    margin-left: auto;
    padding-left: var(--spacing);
    padding-right: var(--spacing);
    max-width: var(--desktop-up);
  }

  .layout {
    font-size: 0;
    list-style: none;
    margin: 0;
    margin-left: calc(-1 * var(--spacing));
    padding: 0;
  }

    .layout--flush {
      margin-left: 0;
    }

    .layout--flush > .layout__item {
      padding-left: 0;
    }

    .layout--reverse {
      flex-direction: row-reverse;
    }

  .layout__item {
    box-sizing: border-box;
    display: inline-block;
    padding-left: var(--spacing);
    vertical-align: top;
    width: 100%;
  }

  .one-whole    { width: 100%; }
  .one-half     { width: 50%; }
  .one-third    { width: calc(1 / 3 * 100%); }
  .one-fourth   { width: calc(1 / 4 * 100%); }
  .one-fifth    { width: calc(1 / 5 * 100%); }
  .one-sixth    { width: calc(1 / 6 * 100%); }
  .one-seventh  { width: calc(1 / 7 * 100%); }
  .one-eigth    { width: calc(1 / 8 * 100%); }
  .one-ninth    { width: calc(1 / 9 * 100%); }
  .one-tenth    { width: calc(1 / 10 * 100%); }
  .one-eleventh { width: calc(1 / 11 * 100%); }
  .one-twelth   { width: calc(1 / 12 * 100%); }

  /* Tablet + Breakpoint */
  @media only screen and (min-width: 64.063em) { 
    .one-whole-m\+    { width: 100%; }
    .one-half-m\+     { width: 50%; }
    .one-third-m\+    { width: calc(1 / 3 * 100%); }
    .one-fourth-m\+   { width: calc(1 / 4 * 100%); }
    .one-fifth-m\+    { width: calc(1 / 5 * 100%); }
    .one-sixth-m\+    { width: calc(1 / 6 * 100%); }
    .one-seventh-m\+  { width: calc(1 / 7 * 100%); }
    .one-eigth-m\+    { width: calc(1 / 8 * 100%); }
    .one-ninth-m\+    { width: calc(1 / 9 * 100%); }
    .one-tenth-m\+    { width: calc(1 / 10 * 100%); }
    .one-eleventh-m\+ { width: calc(1 / 11 * 100%); }
    .one-twelth-m\+   { width: calc(1 / 12 * 100%); }
  }



  /* Typography */
  h1, h2, h3, h4, h5, h6    { font-weight: normal; }
  h1, h2, h3, h4, h5, h6, p { margin: 0; padding: 0; }

  h1, .h1 { font-size: 2.25rem; }
  h2, .h2 { font-size: 1.75rem; }
  h3, .h3 { font-size: 1.5rem; }
  h4, .h4 { font-size: 1.25rem; }
  h5, .h5 { font-size: 1.125rem; }
  h6, .h6 { font-size: 1rem; }
  p  { font-size: 1rem; }

  a { color: inherit; cursor: pointer; text-decoration: none; }



  /* Animations */
  .fade-enter-active, .fade-leave-active {
    transition: opacity var(--transition);
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }



  /* Helpers */

  .ai-c { align-items: center; }
  .as-c { align-self: center; }

  .bc-black { background-color: var(--black); }

  .hover-white,
  .hover-grey { 
    transition: color var(--transition); 
  }

    .hover-white:hover { color: var(--white); }
    .hover-grey:hover  { color: var(--grey); }

  .grey  { color: var(--grey); }
  .white { color: var(--white); }

  .d-b  { display: block; }
  .d-i  { display: inline; }
  .d-ib { display: inline-block; }
  .d-f  { display: flex; }
  .d-if { display: inline-flex; }

  @media only screen and (min-width: 64.063em) {
    .d-ib-m\+  { display: inline-block; }
  }

  .fd-rr { flex-direction: row-reverse; }

  .fw-4 { font-weight: 400; }
  .fw-5 { font-weight: 500; }
  .fw-6 { font-weight: 600; }

  .fw-w { flex-wrap: wrap; }

  .jc-sb { justify-content: space-between; }

  .ls-1 { letter-spacing: .1rem; }
  .ls-8 { letter-spacing: .8rem; }

  .p-a { position: absolute; }
  .p-f { position: fixed; }
  .p-r { position: relative; }

  .ta-c { text-align: center; }
  .ta-l { text-align: left; }
  .ta-r { text-align: right; }
  .tt-u { text-transform: uppercase; }

  .z-0  { z-index: 0; }
  .z-1  { z-index: 1; }
  .z-2  { z-index: 2; }
  .z-3  { z-index: 3; }
  .z-4  { z-index: 4; }



  /* Spacing */
  .m-0 { margin: 0; }
  .m-1 { margin: var(--spacing-small); }
  .m-2 { margin: var(--spacing); }
  .m-3 { margin: var(--spacing-medium); }
  .m-4 { margin: var(--spacing-large); }
  .m-5 { margin: var(--spacing-xlarge); }

  .mb-0 { margin-bottom: 0; }
  .mb-1 { margin-bottom: var(--spacing-small); }
  .mb-2 { margin-bottom: var(--spacing); }
  .mb-3 { margin-bottom: var(--spacing-medium); }
  .mb-4 { margin-bottom: var(--spacing-large); }
  .mb-5 { margin-bottom: var(--spacing-xlarge); }

  .mt-0 { margin-top: 0; }
  .mt-1 { margin-top: var(--spacing-small); }
  .mt-2 { margin-top: var(--spacing); }
  .mt-3 { margin-top: var(--spacing-medium); }
  .mt-4 { margin-top: var(--spacing-large); }
  .mt-5 { margin-top: var(--spacing-xlarge); }

  .mh-0 { margin-left: 0; }
  .mh-1 { margin-left: var(--spacing-small); margin-right: var(--spacing-small); }
  .mh-2 { margin-left: var(--spacing); margin-right: var(--spacing); }
  .mh-3 { margin-left: var(--spacing-medium); margin-right: var(--spacing-medium); }
  .mh-4 { margin-left: var(--spacing-large); margin-right: var(--spacing-large); }
  .mh-5 { margin-left: var(--spacing-xlarge); margin-right: var(--spacing-xlarge); }

  .mv-0 { margin-top: 0; }
  .mv-1 { margin-top: var(--spacing-small); margin-bottom: var(--spacing-small); }
  .mv-2 { margin-top: var(--spacing); margin-bottom: var(--spacing); }
  .mv-3 { margin-top: var(--spacing-medium); margin-bottom: var(--spacing-medium); }
  .mv-4 { margin-top: var(--spacing-large); margin-bottom: var(--spacing-large); }
  .mv-5 { margin-top: var(--spacing-xlarge); margin-bottom: var(--spacing-xlarge); }

  .p-0 { padding: 0; }
  .p-1 { padding: var(--spacing-small); }
  .p-2 { padding: var(--spacing); }
  .p-3 { padding: var(--spacing-medium); }
  .p-4 { padding: var(--spacing-large); }
  .p-5 { padding: var(--spacing-xlarge); }

  .pr-0 { padding-right: 0; }
  .pr-1 { padding-right: var(--spacing-small); }
  .pr-2 { padding-right: var(--spacing); }
  .pr-3 { padding-right: var(--spacing-medium); }
  .pr-4 { padding-right: var(--spacing-large); }
  .pr-5 { padding-right: var(--spacing-xlarge); }

  .pl-0 { padding-left: 0; }
  .pl-1 { padding-left: var(--spacing-small); }
  .pl-2 { padding-left: var(--spacing); }
  .pl-3 { padding-left: var(--spacing-medium); }
  .pl-4 { padding-left: var(--spacing-large); }
  .pl-5 { padding-left: var(--spacing-xlarge); }

  .pb-0 { padding-bottom: 0; }
  .pb-1 { padding-bottom: var(--spacing-small); }
  .pb-2 { padding-bottom: var(--spacing); }
  .pb-3 { padding-bottom: var(--spacing-medium); }
  .pb-4 { padding-bottom: var(--spacing-large); }
  .pb-5 { padding-bottom: var(--spacing-xlarge); }

  .pt-0 { padding-top: 0; }
  .pt-1 { padding-top: var(--spacing-small); }
  .pt-2 { padding-top: var(--spacing); }
  .pt-3 { padding-top: var(--spacing-medium); }
  .pt-4 { padding-top: var(--spacing-large); }
  .pt-5 { padding-top: var(--spacing-xlarge); }

  .ph-0 { padding-left: 0; }
  .ph-1 { padding-left: var(--spacing-small); padding-right: var(--spacing-small); }
  .ph-2 { padding-left: var(--spacing); padding-right: var(--spacing); }
  .ph-3 { padding-left: var(--spacing-medium); padding-right: var(--spacing-medium); }
  .ph-4 { padding-left: var(--spacing-large); padding-right: var(--spacing-large); }
  .ph-5 { padding-left: var(--spacing-xlarge); padding-right: var(--spacing-xlarge); }

  .pv-0 { padding-top: 0; }
  .pv-1 { padding-top: var(--spacing-small); padding-bottom: var(--spacing-small); }
  .pv-2 { padding-top: var(--spacing); padding-bottom: var(--spacing); }
  .pv-3 { padding-top: var(--spacing-medium); padding-bottom: var(--spacing-medium); }
  .pv-4 { padding-top: var(--spacing-large); padding-bottom: var(--spacing-large); }
  .pv-5 { padding-top: var(--spacing-xlarge); padding-bottom: var(--spacing-xlarge); }

</style>
