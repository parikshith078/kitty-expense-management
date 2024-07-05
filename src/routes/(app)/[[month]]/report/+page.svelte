<script lang="ts">
	import DetailsCard from '$lib/components/reportCard'

	export let data
	$: transactionData = data.transactionData
</script>

<DetailsCard {transactionData} />
