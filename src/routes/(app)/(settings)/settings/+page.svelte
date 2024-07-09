<script>
	import SettingsListItem from '$lib/components/ui/settingsListItem.svelte'
	import { Avatar } from 'bits-ui'
	import {
		Shapes,
		FileText,
		CircleDollarSign,
		FileQuestion,
		LogOut,
		RectangleEllipsis
	} from 'lucide-svelte'
</script>

<section class="">
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
			<h3>parikshith</h3>
		</div>
	</section>
	<section class="mt-2 px-4">
		<SettingsListItem href="/">
			<span slot="icon">
				<Shapes class="aspect-square h-5 text-black" />
			</span>
			<span slot="title">Manage categories</span>
		</SettingsListItem>

		<SettingsListItem href="/">
			<span slot="icon">
				<FileText class="aspect-square h-5 text-black" />
			</span>
			<span slot="title">Export to PDF</span>
		</SettingsListItem>

		<SettingsListItem href="/">
			<span slot="icon">
				<CircleDollarSign class="aspect-square h-5 text-black" />
			</span>
			<span slot="title">Choose currency</span>
		</SettingsListItem>

		<SettingsListItem href="/">
			<span slot="icon">
				<FileQuestion class="aspect-square h-5 text-black" />
			</span>
			<span slot="title">Frequently asked questions</span>
		</SettingsListItem>

		<SettingsListItem href="/">
			<span slot="icon">
				<RectangleEllipsis class="aspect-square h-5 text-black" />
			</span>
			<span slot="title">Change password</span>
		</SettingsListItem>

		<SettingsListItem endArrow={false} href="/logout">
			<span slot="icon">
				<LogOut class="aspect-square h-5 text-black" />
			</span>
			<span slot="title">Logout</span>
		</SettingsListItem>
	</section>
</section>
