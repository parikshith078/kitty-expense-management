<script lang="ts">
	import logo from '$lib/assets/top_nav_icons/logo.svg'
	import searchIcon from '$lib/assets/top_nav_icons/search.svg'
	import leftArrow from '$lib/assets/top_nav_icons/leftArrow.svg'
	import rightArrow from '$lib/assets/top_nav_icons/rightArrow.svg'
	import calendarIcon from '$lib/assets/top_nav_icons/calendarIcon.svg'
	import { Avatar } from 'bits-ui'
	import toast from 'svelte-french-toast'

	const sendToast = () => {
		toast.success('It works!')
	}
	export let date = new Date()

	const month = date.toLocaleDateString('en-us', { month: 'short' })
	const year = date.toLocaleDateString('en-us', { year: 'numeric' })
</script>

<div class="flex select-none container fixed bg-backgound w-full flex-col gap-2">
	<div class="flex justify-between px-4 py-2">
		<a href="/" class="flex items-center gap-1">
			<img class="aspect-square h-6" src={logo} alt="" />
			<h1 class="text-xl font-bold">Kitty</h1>
		</a>
		<div class="flex items-center gap-4">
			<img class="aspect-square h-7" src={searchIcon} alt="" />
			<Avatar.Root class="flex aspect-square h-10 items-center justify-center rounded-full bg-gray">
				<Avatar.Image
					class="rounded-full"
					src="https://avatars.githubusercontent.com/u/90703086?v=4"
					alt="profile"
				/>
				<Avatar.Fallback>P</Avatar.Fallback>
			</Avatar.Root>
		</div>
	</div>
	<div class="flex justify-between px-6 py-4">
		<button on:click={sendToast}><img src={leftArrow} alt="" /></button>
		<button class="flex items-center gap-1 rounded-2xl bg-gray px-[13px] py-2 text-sm">
			<img src={calendarIcon} alt="" />
			<p>{month}, {year}</p>
		</button>
		<button><img src={rightArrow} alt="" /></button>
	</div>
</div>
