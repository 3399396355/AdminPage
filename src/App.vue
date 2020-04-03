<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/test">Test</router-link> |
			<router-link to="/log">Log</router-link> |
			<router-link to="/events">Events</router-link> |
			<router-link to="/records">Records</router-link> |
			<router-link to="/frames">Frames</router-link> |
			<router-link to="/thresholds">Thresholds</router-link> |
			<router-link to="/deltas">Deltas</router-link>
		</div>
		<router-view/>
		<!-- <sidebar-menu :menu="menu" /> -->
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

/*https://stackoverflow.com/a/57931476*/
tr:nth-of-type( odd ) {
	background-color: #03A678;
}
tr:nth-of-type( even ) {
	background-color: #1496BB;
}

</style>


<script>

</script>