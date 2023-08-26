<script>
	import MainNav from './MainNav.svelte'
	import { siteAuthor } from '$lib/config'
</script>

<footer>
	<MainNav />

	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
      </li>
      <li>
        <a href="/blog/category/Everyday">Everyday Writing</a>
      </li>
      <li>
        <a href="/blog/category/Poetry">Feelings & Poetry</a>
      </li>
      <li>
        <a href="/blog/category/Data">Data Stories</a>
			</li>
		</ul>
	</nav>

	<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>
