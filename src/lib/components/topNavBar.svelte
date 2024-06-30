<script lang="ts">
	import logo from '$lib/assets/top_nav_icons/logo.svg'
	import searchIcon from '$lib/assets/top_nav_icons/search.svg'
	import leftArrow from '$lib/assets/top_nav_icons/leftArrow.svg'
	import rightArrow from '$lib/assets/top_nav_icons/rightArrow.svg'
	import calendarIcon from '$lib/assets/top_nav_icons/calendarIcon.svg'
	import { createAvatar, melt } from '@melt-ui/svelte'

	const {
		elements: { image, fallback }
	} = createAvatar({
		src: 'https://avatars.githubusercontent.com/u/90703086?v=4'
	})
</script>

<div class="flex w-full flex-col gap-2">
	<div class="flex justify-between px-4 py-2">
		<div class="flex items-center gap-1">
			<img class="aspect-square h-6" src={logo} alt="" />
			<h1 class="text-xl font-bold">Kitty</h1>
		</div>
		<div class="flex items-center gap-4">
			<img class="aspect-square h-7" src={searchIcon} alt="" />
			<!-- Avatar -->
			<div class="bg-neutral-100 flex aspect-square h-9 items-center justify-center rounded-full">
				<img use:melt={$image} alt="Avatar" class="h-full w-full rounded-[inherit]" />
				<span use:melt={$fallback} class="text-magnum-700 text-3xl font-medium">PA</span>
			</div>
			<!---->
		</div>
	</div>
	<div class="flex justify-between px-6 py-4">
		<button><img src={leftArrow} alt="" /></button>
		<button class="flex items-center gap-1 rounded-2xl bg-gray px-[13px] py-2 text-sm">
			<img src={calendarIcon} alt="" />
			<p>May, 2024</p>
		</button>
		<button><img src={rightArrow} alt="" /></button>
	</div>
</div>
