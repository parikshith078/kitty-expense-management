<script lang="ts">
	import logo from '$lib/assets/top_nav_icons/logo.svg'
	import searchIcon from '$lib/assets/top_nav_icons/search.svg'
	import leftArrow from '$lib/assets/top_nav_icons/leftArrow.svg'
	import rightArrow from '$lib/assets/top_nav_icons/rightArrow.svg'
	import calendarIcon from '$lib/assets/top_nav_icons/calendarIcon.svg'
	import { Avatar } from 'bits-ui'
	import { getLastMonthDate, getNextMonthDate } from '$lib/utils'
	import { page } from '$app/stores'

	export let date: Date

	const getMonthYear = (date: Date) => {
		const month = date.toLocaleDateString('en-us', { month: 'short' })
		const year = date.toLocaleDateString('en-us', { year: 'numeric' })
		return { month, year }
	}

	$: current = getMonthYear(date)
	$: nextMonth = getNextMonthDate(date)
	$: prevMonth = getLastMonthDate(date)
	$: next = getMonthYear(nextMonth)
	$: prev = getMonthYear(prevMonth)

	$: isReport = $page.url.pathname.includes('/report') ? '/report' : ''
</script>

<div class="container fixed flex w-full select-none flex-col gap-2 bg-backgound">
	<div class="flex justify-between px-4 py-2">
		<a href="/" class="flex items-center gap-1">
			<img class="aspect-square h-6" src={logo} alt="" />
			<h1 class="text-xl font-bold">Kitty</h1>
		</a>
		<div class="flex items-center gap-4">
			<a href="/search">
				<img class="aspect-square h-7" src={searchIcon} alt="" />
			</a>
			<a href="/settings">
				<Avatar.Root
					class="flex aspect-square h-10 items-center justify-center rounded-full bg-gray"
				>
					<Avatar.Image
						class="rounded-full"
						src="https://avatars.githubusercontent.com/u/90703086?v=4"
						alt="profile"
					/>
					<Avatar.Fallback>P</Avatar.Fallback>
				</Avatar.Root>
			</a>
		</div>
	</div>
	<div class="flex justify-between px-6 py-4">
		<a href={`/${prev.month}_${prev.year}${isReport}`}><img src={leftArrow} alt="" /></a>
		<button class="flex items-center gap-1 rounded-2xl bg-gray px-[13px] py-2 text-sm">
			<img src={calendarIcon} alt="" />
			<p>{current.month}, {current.year}</p>
		</button>
		<a href={`/${next.month}_${next.year}${isReport}`}><img src={rightArrow} alt="" /></a>
	</div>
</div>
