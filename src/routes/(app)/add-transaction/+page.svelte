<script lang="ts">
	import ComboBox from '$lib/components/ui/comboBox.svelte'
	import RadioGroup from '$lib/components/ui/radioGroup.svelte'
	import { ArrowLeftIcon } from 'lucide-svelte'
	import { enhance } from '$app/forms'
	import type { SubmitFunction } from '@sveltejs/kit'
	import toast from 'svelte-french-toast'

	export let data
	export let form

	let transcationType: string = 'EXPENSE'
	let inputValue: string

	const addTranscation: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success(`New ${transcationType} added successfully!`)
					await update()
					break
				case 'error':
					toast.error(result.error.message)
					await update()
					break
				case 'failure':
					toast.error(form!.message)
					await update()
					break
				default:
					await update()
			}
		}
	}
</script>

<div>
	<div class="flex items-center gap-4 bg-gray px-4 py-3">
		<a href="/">
			<ArrowLeftIcon />
		</a>
		<p>Add new</p>
	</div>
	<!-- TODO: Validate user input -->
	<form use:enhance={addTranscation} method="post" class="space-y-6 px-4 py-6">
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
