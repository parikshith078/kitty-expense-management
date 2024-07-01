<script lang="ts">
	import ComboBox from '$lib/components/ui/comboBox.svelte'
	import RadioGroup from '$lib/components/ui/radioGroup.svelte'
	import { ArrowLeftIcon } from 'lucide-svelte'

	export let data

	let transcationType: string = 'EXPENSE'
	let inputValue: string
</script>

<div>
	<div class="flex items-center gap-4 bg-gray px-4 py-3">
		<a href="/">
			<ArrowLeftIcon />
		</a>
		<p>Add new</p>
	</div>
	<!-- TODO: Validate user input -->
	<form method="post" class="space-y-6 px-4 py-6">
		<RadioGroup bind:transcationType />
		<ComboBox bind:inputValue catagories={data.catagories} />
		<input type="hidden" value={transcationType} name="transcationType" />
		<input
			class="w-full rounded-md border border-[#9E9E9E] px-4 py-3 outline-blue"
			type="number"
			name="amount"
			required
			placeholder="Enter amount"
		/>
		<input
			class="w-full rounded-md border border-[#9E9E9E] px-4 py-3 outline-blue"
			type="text"
			name="desc"
			placeholder="Description (Optional)"
		/>
		<button
			class=" w-full rounded-3xl bg-[#007BEF] px-5 py-3 text-sm text-white drop-shadow-lg transition hover:bg-[#006ADD] active:bg-[#0041AE] disabled:bg-[#E0E0E0] disabled:text-[#A6A6A6]"
			type="submit">Add an {transcationType.toLowerCase()}</button
		>
	</form>
</div>
