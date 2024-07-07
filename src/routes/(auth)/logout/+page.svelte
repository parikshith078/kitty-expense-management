<script lang="ts">
	import { enhance } from '$app/forms'
</script>

<form method="post" class="mt-10 flex justify-center p-5" use:enhance>
	<button class="mx-auto rounded bg-black p-2 text-white" formaction="/auth?/logout"
		>Sign out</button
	>
</form>
