
<template>
  <div class="foot  bc-black  pv-4">

    <div class="page">
      <div class="layout">
        <div class="layout__item">

          <div class="d-f  white">

            <div class="">
              <p class="">
                <a class="hover-grey" target="_blank" href="https://github.com/kaydwithers">
                  GitHub
                </a>
              </p>
            </div>

            <div class="pl-4">
              <p class="">
                <a class="hover-grey" href="mailto:kaydwithers@gmail.com">
                  Email
                </a>
              </p>
            </div>

            <div class="pl-4">
              <p class="">
                <a class="hover-grey" target="_blank" href="https://twitter.com/kaydw">
                  Twitter
                </a>
              </p>
            </div>

            <div class="pl-4">
              <p class="">
                <a class="hover-grey" target="_blank" href="https://www.linkedin.com/in/kayd-withers">
                  LinkedIn
                </a>
              </p>
            </div>

            <Secret />
            <Pikachu />

          </div>

        </div>
      </div>
    </div>

  </div>
</template>



<script>

  import Pikachu from '@/atoms/Pikachu'
  import Secret from './Secret'

  export default {
    name: 'hero',
    components: {
      Secret,
      Pikachu
    }
  }

</script>



<style>

</style>
