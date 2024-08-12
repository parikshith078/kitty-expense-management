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

	export let data
</script>

<section class="mt-2 px-4">
	<SettingsListItem href="/settings/manage-categories">
		<span slot="icon">
			<Shapes class="aspect-square h-5 text-black" />
		</span>
		<span slot="title">Manage categories</span>
	</SettingsListItem>

	<SettingsListItem href="/settings/export">
		<span slot="icon">
			<FileText class="aspect-square h-5 text-black" />
		</span>
		<span slot="title">Export to PDF</span>
	</SettingsListItem>

	<SettingsListItem href="/settings/change-currency">
		<span slot="icon">
			<CircleDollarSign class="aspect-square h-5 text-black" />
		</span>
		<span slot="title">Choose currency</span>
	</SettingsListItem>

	<SettingsListItem href="/faqs">
		<span slot="icon">
			<FileQuestion class="aspect-square h-5 text-black" />
		</span>
		<span slot="title">Frequently asked questions</span>
	</SettingsListItem>

	<SettingsListItem href="/settings/change-password">
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
