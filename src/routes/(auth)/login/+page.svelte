<script lang="ts">
	import { enhance } from '$app/forms'
	export let form
	// TODO: Add form enhancement function with toast messages
</script>

<h1 class="mt-5 text-center">Sign in</h1>
<form class="mx-auto flex w-72 flex-col justify-center gap-3" method="post" use:enhance>
	<label for="username">Username</label>
	<input required class="text-gray-900 p-2" name="username" id="username" /><br />
	<label for="password ">Password</label>
	<input required class="text-gray-900 p-2" type="password" name="password" id="password" /><br />
	{#if form?.message}
		<p class="text-center">{form.message}</p>
	{/if}
	<button formaction="?/login" class="rounded-lg bg-primary p-2 hover:bg-primary/70">Login</button>
	<button formaction="?/signup" class="rounded-lg bg-primary p-2 hover:bg-primary/70"
		>Sign Up</button
	>
</form>
