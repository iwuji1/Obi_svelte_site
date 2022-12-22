<script>
import { base } from '$app/paths';
import Header from "$lib/components/header.svelte";
import Footer from "$lib/components/footer.svelte";
import "$lib/styles/style.scss";
</script>

<style>
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

<div class="container">
<slot></slot>
</div>

<Footer />
