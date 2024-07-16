<script lang="ts">
	import { enhance } from '$app/forms'
	import type { SubmitFunction } from '@sveltejs/kit'
	import toast from 'svelte-french-toast'

	export let form 

	const handelSubmit: SubmitFunction = ({ formData }) => {
		const password = formData.get('password')
		const repeatPassword = formData.get('repeatPassword')

		return async ({ update, result }) => {
			if (password !== repeatPassword) {
				toast.error("Password don't match")
				return
			}
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

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="space-y-6" use:enhance={handelSubmit} method="POST">
			<div>
				<label for="current-password" class="text-gray-900 block text-sm font-medium leading-6"
					>Current password</label
				>
				<div class="mt-2">
					<input
						id="current-password"
						name="current-password"
						type="password"
						required
						class="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 block w-full rounded-md border-0 px-1 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<label for="password" class="text-gray-900 block text-sm font-medium leading-6"
						>New password</label
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
				<div class="flex items-center justify-between">Repeat password</div>
				<div class="mt-2">
					<input
						id="repeatPassword"
						name="repeatPassword"
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
					>Change password</button
				>
			</div>
		</form>
	</div>
</div>
