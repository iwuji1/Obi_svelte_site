<script>
import Header from '$lib/components/header.svelte'
import Footer from '$lib/components/footer.svelte'
import Analytics from '$lib/components/analytics.svelte'
import { currentPage, isMenuOpen } from '$lib/js/store'
import { navItems } from '$lib/config'
import { preloadCode } from '$app/navigation'
import { onMount } from 'svelte'
import { fade } from 'svelte/transition'
import { slide } from 'svelte/transition';
import { cubicOut } from 'svelte/easing'
import '$lib/styles/style.scss'

export let data

const transitionIn = { delay: 0, duration: 300, easing: cubicOut, axis: 'x' }
const transitionOut = { duration: 300}

export const prerender = true

  onMount(() => {
  const navRoutes = navItems.map(item => item.route)
  preloadCode(...navRoutes)
})

</script>

<div class="layout" class:open={$isMenuOpen}>
  <Header />

  <Analytics />
  {#key data.currentRoute}
    <main id="main"
			tabindex="-1"
			in:slide={transitionIn}
			out:slide={transitionOut}
		>
      <slot/>
    </main>
  {/key}
  <Footer />
</div>
<!-- <Header />
<Analytics />

<div class="container">
<slot></slot>
</div>

<Footer /> -->
