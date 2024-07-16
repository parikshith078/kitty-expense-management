<script lang="ts">
	import { Avatar } from 'bits-ui'

	export let data
</script>

<section class="space-y-3 bg-gray px-4 pb-6">
	<h1 class="py-3 text-xl font-bold">Settings</h1>
	<div class="flex items-center gap-3 text-lg">
		<Avatar.Root class="flex aspect-square h-12 items-center justify-center rounded-full bg-gray">
			<Avatar.Image
				class="rounded-full"
				src="https://avatars.githubusercontent.com/u/90703086?v=4"
				alt="profile"
			/>
			<Avatar.Fallback>P</Avatar.Fallback>
		</Avatar.Root>
		<h3>{data.user.username}</h3>
	</div>
</section>

<slot />
