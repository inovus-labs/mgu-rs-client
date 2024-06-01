<template>
    <navbar />
    <section class="bg-bgPrimary pb-24">
        <div class="flex flex-col  lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">
            <div class="mx-auto max-w-screen-xl text-left w-full lg:w-2/3 py-4 lg:py-20">
                <h1 class="mb-4 text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">Sparking Tomorrow's
                    Innovations.</h1>
                <p class="mb-8 text-lg font-light text-secondary lg:text-xl">Welcome all to the inovus community, a
                    bunch of 21st century human beings. We provide the walls and you're the artist. Come join us to be a
                    part of this journey of relevation.</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
                    <!-- <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary hover:bg-secondary">
              Get started
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a> -->
                    <a href="#"
                        class=" bg-bgSecondary inline-flex justify-center items-center py-3 px-10 text-base font-medium text-center text-white rounded border border-secondary hover:bg-secondary hover:text-white">
                        Kick Start
                    </a>
                </div>
            </div>
            <div class="w-full lg:w-1/3 py-4 lg:py-20">
                <img class="w-full h-full" src="/assets/work-in-progress-animate.svg" alt="Gallery" />
            </div>
        </div>
        <!-- Social Proof -->
        <section class="bg-bgSecondary bg-opacity-60 mx-24 dark:bg-gray-900">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl text-bgPrimary md:text-4xl font-extrabold">2000+</dt>
                        <dd class="font-light text-bgPrimary dark:text-gray-400">Results</dd>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl text-bgPrimary md:text-4xl font-extrabold">300+</dt>
                        <dd class="font-light text-bgPrimary dark:text-gray-400">Hours saved</dd>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl text-bgPrimary md:text-4xl font-extrabold">8+</dt>
                        <dd class="font-light text-bgPrimary dark:text-gray-400">Active Users</dd>
                    </div>
                </dl>
            </div>
        </section>

        <!-- what why how -->
        <section>
            <div>                
                <img src="/assets/what.png" alt="" class="w-full my-4">
            </div>
        </section>


    </section>


</template>
<script>
import navbar from '../components/Reuse/navbar.vue';
export default {
    name: 'HomeView',
    components: {
        navbar
    }
}

</script>