<script lang="ts">
	import ComboBox from '$lib/components/ui/comboBox.svelte'
	import RadioGroup from '$lib/components/ui/radioGroup.svelte'
	import { ArrowLeftIcon } from 'lucide-svelte'
	let transcationType: string = 'EXPENSE'
	let inputValue: string

	export let data
</script>

<div>
	<div class="flex items-center gap-4 bg-gray px-4 py-3">
		<a href="/">
			<ArrowLeftIcon />
		</a>
		<p>Add new</p>
	</div>
	<div class="space-y-6 px-4 py-6">
		<RadioGroup bind:transcationType />
		<ComboBox bind:inputValue catagories={data.catagories} />
	</div>
</div>
