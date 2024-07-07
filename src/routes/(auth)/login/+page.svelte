<script lang="ts">
	import { enhance } from '$app/forms'
	import toast from 'svelte-french-toast'
	import type { SubmitFunction } from '../auth/$types'

	export let form

	const handelSubmit: SubmitFunction = () => {
		return async ({ update, result }) => {
			switch (result.type) {
				case 'success':
					update()
					break
				case 'failure':
					if (form?.message) {
						toast.error(form.message)
					}
					update()
					break
				case 'error':
					console.log('error')
					if (form?.message) {
						toast.error(form.message)
					}
					update()
					break
				default:
					update()
			}
		}
	}
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<h2 class="text-gray-900 mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
			Sign in to your account
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="space-y-6" use:enhance={handelSubmit} method="POST">
			<div>
				<label for="username" class="text-gray-900 block text-sm font-medium leading-6"
					>Username</label
				>
				<div class="mt-2">
					<input
						id="username"
						name="username"
						type="text"
						required
						class="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 block w-full rounded-md border-0 px-1 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<label for="password" class="text-gray-900 block text-sm font-medium leading-6"
						>Password</label
					>
				</div>
				<div class="mt-2">
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 block w-full rounded-md border-0 px-1 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<button
					class="hover:bg-indigo-500 focus-visible:outline-indigo-600 flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
					>Sign in</button
				>
			</div>
		</form>

		<p class="text-gray-500 mt-10 text-center text-sm">
			Not a member?
			<a href="/signup" class="text-indigo-600 hover:text-indigo-500 font-semibold leading-6"
				>Create new account</a
			>
		</p>
	</div>
</div>
