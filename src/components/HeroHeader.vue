
<template>
  <div class="navigation">

    <hamburger />

    <transition name="fade">
      <div v-show="$store.state.toggle.menuActive">
        <div class="navigation__overlay">

          <div class="navigation__overlay-content">
            <p class="h1  fw-6  ph-3  d-ib-m+">
              <a class="grey  hover-white">
                About
              </a>
            </p>

            <p class="h1  fw-6  ph-3  d-ib-m+">
              <a class="grey  hover-white">
                Contact
              </a>
            </p>
          </div>

        </div>
      </div>
    </transition>

  </div>
</template>



<script>

  import Hamburger from '@/molecules/Hamburger'

  export default {
    name: 'navigation',
    components: {
      Hamburger
    }
  }

</script>



<style>

  .navigation {
    color: #fff;
  }

  .navigation__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
  }

  .navigation__overlay-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    width: 100%;
    text-align: center;
  }

</style>
