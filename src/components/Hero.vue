
<template>
  <div class="hero  p-r  z-1">

    <div class="hero__particles  p-r  z-3">
      <particles />
    </div>

    <div class="hero__overlay  p-r  z-1">
    </div>

    <div class="hero__video">
      <iframe 
        class="z-1"
        id="ytplayer" 
        src="https://www.youtube.com/embed/c5rWB_fS5ao?controls=0&enablejsapi=1&modestbranding=0&cc_load_policy=1&showinfo=0&rel=0&loop=1&iv_load_policy=3&playlist=c5rWB_fS5ao" 
        frameborder="0"
      >
      </iframe>
    </div>

    <div class="hero__header  p-r  z-4">
      <div class="page">
        <div class="layout">
          <div class="layout__item">
            <hero-header />
          </div>
        </div>
      </div>
    </div>

    <div class="hero__content  p-r  z-3  tt-u  ls-8">
      <h1 class="fw-6">
        {{heading}}
      </h1>

      <h2 class="tt-u">
        {{headingSub}}
      </h2>
    </div>

    <div class="hero__footer  p-r  z-3  mv-2">
      <div class="page">
        <div class="layout">
          <div class="layout__item">
            <hero-footer />
          </div>
        </div>
      </div>
    </div>

    <!-- videos
      c5rWB_fS5ao - Aurora
      NM2wtte1JRE - ISS
      8OiWoUNZ8kM - ISS
    -->

  </div>
</template>



<script>

  import HeroHeader from './HeroHeader'
  import HeroFooter from './HeroFooter'
  import Particles from '@/molecules/Particles'

  export default {
    name: 'hero',
    components: {
      HeroHeader,
      HeroFooter,
      Particles
    },

    data () {
      return {
        heading: 'Kayd Withers',
        headingSub: 'Front End Developer'
      }
    }
  }

</script>



<style>

.hero__header {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
}

.hero__footer {
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
}

  /* is-active */
  #ytplayer {
    opacity: 0;
  }

  #ytplayer.is-active {
    opacity: 1;
  }



  /* Hero */
  .hero {
    background-color: #000;
    height: 100vh;
    overflow: hidden;
    user-select: none;
  }

  .hero__overlay {
    background: rgba(0, 0, 0, .1);
    background-size: cover;
    height: 100%;
    left: 0;
    position: absolute; 
    top: 0; 
    width: 100%;
  }

  .hero__video {
    pointer-events: none;
  }

    .hero__video iframe {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transition: opacity .5s;
      width: 100%;
    }

      @media (min-aspect-ratio: 16/9) {

        .hero__video iframe {
          height: 300%;
          top: -100%;
        }

      }

      @media (max-aspect-ratio: 16/9) {

        .hero__video iframe {
          left: -100%;
          width: 300%;
        }

      }

  .hero__content {
    cursor: default;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 30vh;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    color: #fff;
    width: 100%;
    text-align: center;
  }

  .hero__content h1 {
    left: 50%;
    opacity: 1;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.98, 0.98);
    transition: all var(--transition);
    user-select: none;
  }

    .hero__content:hover h1 {
      opacity: 0;
    }

  .hero__content h2 {
    left: 50%;
    position: absolute;
    top: 50%;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.98, 0.98);
    transition: all var(--transition);
  }

    .hero__content:hover h2 {
      opacity: 1;
    }

</style>
