<script lang="ts">
	import './styles.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main>
	<seciton id="hero">
		<div class="section-container mb-40 px-10 pt-16">
			<img src="clipboard-website/logo.svg" alt="" class="mx-auto my-16" />
			<h3>A History of everything you copy</h3>
			<p class="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
				Clipboard allows you track and organize everything you copy. Intantly access your clipboard on all your devices.
			</p>

			<div class="button-container">
				<a href="#" class="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
					>Download for iOS</a
				>
				<a href="#" class="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
					>Download for Mac</a
				>
			</div>
		</div>
	</seciton>
	<section id="snippets">
		<div class="section-container my-20 px-10">
			<h3>Keep track your snippets</h3>
			<p class="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
				Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on
				all your devices. Our Mac and iOS apps will help you organize everything.
			</p>
		</div>
	</section>
</main>
