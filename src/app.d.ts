// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: import('lucia').User | null
			session: import('lucia').Session | null
		}
		interface PageData {
			flash?: { type: 'success' | 'error'; message: string }
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}
