<script>
	import Select from '$lib/components/ui/select.svelte'
	import { ArrowLeftIcon } from 'lucide-svelte'
	const options = [
		{ lable: 'Expense', value: 'EXPENSE' },
		{ lable: 'Income', value: 'INCOME' }
	]
</script>

<div class="">
	<div class="flex gap-4 bg-gray px-4 py-3">
		<a href="/">
			<ArrowLeftIcon />
		</a>
		<p>Add new</p>
	</div>
	<div class="px-4 py-6">
		<Select {options} />
	</div>
</div>
