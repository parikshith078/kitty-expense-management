<script lang="ts">
	import { PieChart, House, Settings } from 'lucide-svelte'
	import { page } from '$app/stores'
</script>

<!-- Component is fixed, taking app layout as relative -->
<div class="pwa-padding bg-backgound">
	<nav
		class:hidden={$page.url.pathname == '/add-transaction'}
		class="container fixed bottom-0 z-50 h-16 w-full select-none bg-backgound py-2 text-sm text-black shadow-inner"
	>
		<ul class="flex h-full items-center justify-between gap-4 px-7 text-black/70">
			<li>
				<a
					class="flex flex-col items-center"
					class:mute={$page.url.pathname.includes('/report')}
					href="/report"
				>
					<PieChart />
					Report</a
				>
			</li>
			<li>
				<a class:mute={$page.url.pathname == '/'} class="flex flex-col items-center" href="/">
					<House />
					Home</a
				>
			</li>
			<li>
				<a
					class="flex flex-col items-center"
					class:mute={$page.url.pathname == '/settings'}
					href="/settings"
				>
					<Settings />
					Settings</a
				>
			</li>
		</ul>
	</nav>
</div>

<style>
	.pwa-padding {
		margin: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom)
			env(safe-area-inset-left) !important;
	}

	.mute {
		color: #212121;
	}
</style>
