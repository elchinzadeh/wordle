<script>
	import { fade } from 'svelte/transition'
	import { nameModal, userStore, roomStore } from '../../utils/store'
	import { onDestroy } from 'svelte'
	import { saveUser, supabase } from '../../utils/utils'


	export let visible = false
	let username;
	let room;

	const unsubscribe = nameModal.subscribe((value) => {
		visible = value
	})
	onDestroy(unsubscribe)

	function closeModal() {
		nameModal.set(false)
	}

	function saveUsername(){
		saveUser(username, room)
		closeModal()
	}
	// usernameStore
	userStore.subscribe((value) => {
		if(value=='undefined'){
			nameModal.set(true)
		}
		console.log(value)
	})
	
	
	
</script>

{#if visible}
	<div class="fixed z-10 inset-0 overflow-y-auto" out:fade in:fade>
		<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"> &#8203 </span>
			<div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
				<div>
					<input type="text" bind:value={username} class="border-2 rounded-lg mt-3 w-full p-2" placeholder="Name" />
				</div>
				<div>
					<input type="text" bind:value={room} class="border-2 rounded-lg mt-3 w-full p-2" placeholder="Room number" />
				</div>
				<div class="mt-5 sm:mt-6">
					<button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" on:click={saveUsername}> Save </button>
				</div>
			</div>
		</div>
	</div>
{/if}
