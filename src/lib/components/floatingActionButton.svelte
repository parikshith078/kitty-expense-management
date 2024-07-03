<script lang="ts">
	import plusIcon from '$lib/assets/add-plus-circle.svg'
</script>

<div class="container fixed bottom-24 z-0 flex w-full items-center justify-center">
	<a
		href="/add-transaction"
		class="z-50 flex items-center justify-center gap-[6px] rounded-full bg-[#007BEF] px-5 py-4 text-white drop-shadow-lg transition hover:bg-[#006ADD] active:bg-[#0041AE] disabled:bg-[#E0E0E0] disabled:text-[#A6A6A6]"
	>
		<img src={plusIcon} alt="" />
		<span>Add new</span>
	</a>
</div>
