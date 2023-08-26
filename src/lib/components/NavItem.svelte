<script>
	import { currentPage, isMenuOpen } from '$lib/js/store'

	export let href

	// $: isCurrentPage = $currentPage.startsWith(href)

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false)
		}
	}
</script>


<li>
	<a
		href={href}
		on:click={maybeCloseMenu}>
		<slot />
	</a>
</li>
