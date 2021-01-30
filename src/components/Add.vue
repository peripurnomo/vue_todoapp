<template>
	<form @submit="onSubmit" class="form-inline">
		<input class="form-control" type="text" v-model="title" required placeholder="Tambah todo" minlength="2" maxlength="144" autocomplete="off">
		<button class="btn btn-primary ml-2" type="submit">Tambah</button>
	</form>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: 'Add',

		data() {
			return {
				title: ''
			}
		},

		methods: {
			...mapActions(['buat']),
			onSubmit(e) {
				e.preventDefault();
				this.buat(this.title);
				this.title = '';
			}
		}
	}
</script>

<style scoped>
	form {
		display: flex;
	}

	input[type="text"] {
		flex: 10;
	}
	
	button[type="submit"] {
		flex: 2;
	}
</style>