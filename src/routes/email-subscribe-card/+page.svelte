<svelte:head>
	<title>Email Subscribe</title>
</svelte:head>

<div class="flex h-screen items-center justify-center bg-zinc-700">
	<div class="mx-6 rounded-2xl bg-zinc-800 p-2">
		<div class="flex flex-col rounded-l-xl md:flex-row">
			<img
				src="email-subscribe-card/email-image.jpg"
				alt="email"
				class="object-fit h-80 transform rounded-xl duration-200 hover:scale-105 hover:rounded-xl md:h-64 md:rounded-l-xl md:rounded-r-none"
			/>
			<div class="p-6 md:p-12">
				<h2 class="text-center font-serif text-xl font-medium text-white md:text-left">
					Get diet and fitness tips in your inbox
				</h2>
				<p class="leading-s my-4 max-w-xs text-center text-xs tracking-wide text-white md:text-left">
					Eat better and exercise better. Sign up for the Diet & Fitness newsletter
				</p>
				<div class="mt-5 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-3">
					<input
						type="text"
						placeholder="Enter your email address"
						class="border border-zinc-600 bg-zinc-800 p-2 px-4 text-center text-white placeholder:text-center placeholder:text-xs focus:outline-none md:text-left placeholder:md:text-left"
					/>
					<button
						class="rounded-md bg-lime-500 px-5 py-3 text-xs text-zinc-800 duration-500 hover:bg-lime-700 hover:text-white"
						>Subscribe</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
