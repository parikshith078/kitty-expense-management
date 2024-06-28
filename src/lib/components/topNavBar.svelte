<script lang="ts">
	import logo from '$lib/assets/logo.svg'
	import searchIcon from '$lib/assets/search.svg'
	import leftArrow from '$lib/assets/leftArrow.svg'
	import rightArrow from '$lib/assets/rightArrow.svg'
	import calendarIcon from '$lib/assets/calendarIcon.svg'
	import { Avatar } from 'bits-ui'
</script>

<div class="flex h-[104px] w-full flex-col gap-2">
	<div class="flex justify-between px-4 py-2">
		<div class="flex items-center gap-1">
			<img class="aspect-square h-6" src={logo} alt="" />
			<h1 class="text-xl font-bold">Kitty</h1>
		</div>
		<div class="flex items-center gap-4">
			<img class="aspect-square h-7" src={searchIcon} alt="" />
			<Avatar.Root class="flex aspect-square h-10 items-center justify-center rounded-full bg-gray">
				<Avatar.Fallback>M</Avatar.Fallback>
			</Avatar.Root>
		</div>
	</div>
	<div class="flex justify-between px-6 py-4">
		<button><img src={leftArrow} alt="" /></button>
		<button class="flex items-center text-sm gap-1 rounded-2xl bg-gray px-[13px] py-2">
			<img src={calendarIcon} alt="" />
			<p>May, 2024</p>
		</button>
		<button><img src={rightArrow} alt="" /></button>
	</div>
</div>
