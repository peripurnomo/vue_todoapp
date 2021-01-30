<template>
	<header class="container-fluid sticky-top">
		<nav class="navbar row p-3 navbar-light bg-light shadow-lg">
			<div class="col-sm-12 col-md-4">
				<div class="row">
					<div class="col-4 col-md-4">
						<router-link class="navbar-brand" tag="a" to="/">TodoApp</router-link>
					</div>
					<div class="nav-item col-3 col-md-3">
						<router-link class="nav-link" tag="a" to="/">Beranda</router-link>
					</div>

					<div class="nav-item col-3 col-md-3">
						<router-link class="nav-link" tag="a" to="/about">Tentang</router-link>
					</div>
				</div>
			</div>

			<div class="col-sm-12 col-md-8">
				<Add/>
			</div>
		</nav>
	</header>
</template>

<script>
  import Add from './Add.vue';

  export default {
    name: 'app',
    components: {
      Add,
    }
  }
</script>

<style scoped>
</style>