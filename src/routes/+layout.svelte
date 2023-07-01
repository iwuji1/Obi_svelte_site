<script>
import Header from '$lib/components/header.svelte'
import Footer from '$lib/components/footer.svelte'
import Analytics from '$lib/components/analytics.svelte'
import '$lib/styles/style.scss'
</script>

<style>

* {
  font-family: sans-serif;
  /* background-color: #000000; */
}

.container {
  }

header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid white;
    padding-left: 2vw;
    padding-right: 4vw;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


h1 {
    margin: 5;
    font-weight: 400;
    font-size: 25px;
}

</style>

<Header />
<Analytics />

<div class="container">
<slot></slot>
</div>

<Footer />
