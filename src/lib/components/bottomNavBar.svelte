<script lang="ts">
	import { PieChart, House, Settings } from 'lucide-svelte'
	import { page } from '$app/stores'
</script>

<!-- Component is fixed, taking app layout as relative -->
<nav
	class:hidden={$page.url.pathname == '/add-transcation'}
	class="fixed bottom-0 z-50 h-16 w-full bg-backgound py-2 text-sm text-black shadow-inner"
>
	<ul class="flex h-full items-center justify-between gap-4 px-7">
		<li>
			<a class="flex flex-col items-center" href="/report">
				<PieChart />
				Report</a
			>
		</li>
		<li>
			<a class="flex flex-col items-center" href="/">
				<House />
				Home</a
			>
		</li>
		<li>
			<a class="flex flex-col items-center" href="/settings">
				<Settings />
				Settings</a
			>
		</li>
	</ul>
</nav>
