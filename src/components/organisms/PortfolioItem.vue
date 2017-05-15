
<template>
  <div class="portfolio">

    <div class="page">

      <div 
        class="layout  layout--flush  d-f  fw-w  mb-4" 
        :class="{'layout--reverse': portfolioItemMediaLeft}"
      >

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
          <div class="portfolio__media">
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

              <div class="portfolio__media__content">
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
  import ButtonText from '@/components/molecules/ButtonText'

  export default {
    name: 'portfolio',
    components: {
      ButtonText
    },
    props: {
      portfolioItemMediaLeft: { default: true },
      portfolioItemHeading: { default: 'PH Heading' },
      portfolioItemContent: { default: 'PH Content' },
      portfolioItemVideo: { default: 'https://holden.com.au/resources/media/videos/commodore/2017/2017-01-commodore-svp-overview-hero.mp4' },
      portfolioItemPoster: { default: 'http://res.cloudinary.com/dvjpaoffl/image/upload/w_1000,c_fill,f_auto,q_auto:best/v1491715724/portfolio/commodore-motorsport.jpg' },
      portfolioItemIcon: { default: '↛' },
      portfolioItemHref: { default: '' }
    }
  }
</script>



<style>

  .portfolio__media {
    position: relative;
    clip-path: polygon(3% 0%, 100% 6%, 97% 96%, 0% 100%);
  }

    .layout--reverse .portfolio__media {
      clip-path: polygon(0% 0%, 6% 100%, 95% 95%, 92% 10%);
    }

  .portfolio__media__content {
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

    .portfolio__media__content:hover {
      opacity: 1;
    }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .fadeIn {
    animation-name: fadeIn;
  }



  .portfolio__media,
  .portfolio__media video {
    transition: transform var(--transition);
  }

  .portfolio__media {
    overflow: hidden;
  }

    .portfolio__media:hover {
      transform: scale(.97);
    }

    .portfolio__media video:hover {
      transform: scale(1.1);
    }

</style>
