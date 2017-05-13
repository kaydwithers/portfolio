
<template>
  <div class="portfolio">

    <div class="page">

      <div class="layout  layout--flush  d-f  fw-w  mb-4">

        <div class="layout__item  one-whole  one-half-m+  d-f  ai-c">
          <div class="pr-4">
            <p class="h5  tt-u  ls-1  fw-6  mb-2">
              {{portfolioItemHeading}}
            </p>

            <p class="grey  mb-2">
              {{portfolioItemContent}}
            </p>

            <p class="">
              <ButtonText 
                :linkHref="portfolioItemHref" 
                linkText="Visit site"
                :linkIcon="portfolioItemIcon" 
              />
            </p>
          </div>
        </div>

        <div class="layout__item  one-whole  one-half-m+">
          <div class="portfolio__item">
            <a target="_blank" :href="portfolioItemHref">
              <!-- <img class="d-b  one-whole" src="http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715724/portfolio/commodore-motorsport.jpg"> -->

              <video 
                class="d-b  one-whole" 
                :poster="portfolioItemPoster" 
                preload 
                loop 
                autoplay 
                muted
              >
                <source type="video/mp4" :src="portfolioItemVideo">
              </video>

              <div class="portfolio__item__content">
                <div class="as-c">
                  <p class="white">{{portfolioItemIcon}}</p>
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>



<script>
  import ButtonText from '@/molecules/ButtonText'

  export default {
    name: 'portfolio',
    components: {
      ButtonText
    },
    props: {
      portfolioItemHeading: { default: 'Commodore Limited Edition' },
      portfolioItemContent: { default: 'Each carline is built up with a selection of components. We use Fabricator as an integrated pattern library. Each time a new component is created, Fabricator automatically adds it to the pattern library. The client can then go into the pattern libarary and choose what sort of components they would like to use for the next project.' },
      portfolioItemVideo: { default: 'https://holden.com.au/resources/media/videos/commodore/2017/2017-01-commodore-svp-overview-hero.mp4' },
      portfolioItemPoster: { default: 'http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715724/portfolio/commodore-motorsport.jpg' },
      portfolioItemIcon: { default: '↛' },
      portfolioItemHref: { default: 'https://holden.com.au/cars/commodore/limited-edition' }
    }
  }
</script>



<style>

  :root {

  }

  .portfolio__item {
    position: relative;
  }

  .portfolio__item__content {
    background: rgba(0, 0, 0, .5);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity var(--transition);
    width: 100%;
  }

    .portfolio__item__content:hover {
      opacity: 1;
    }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .fadeIn {
    animation-name: fadeIn;
  }



  .portfolio__item,
  .portfolio__item video {
    transition: transform var(--transition);
  }

  .portfolio__item {
    overflow: hidden;
  }

    .portfolio__item:hover {
      transform: scale(.97);
    }

    .portfolio__item video:hover {
      transform: scale(1.1);
    }

</style>
