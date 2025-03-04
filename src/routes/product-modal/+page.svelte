<svelte:head>
	<title>Product Modal</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-slate-100">
	<div
		class="m-3 flex flex-col space-y-10 rounded-2xl bg-white p-6 shadow-2xl md:m-0 md:flex-row md:space-y-0 md:space-x-10 md:p-16"
	>
		<div>
			<img src="product-modal/headphone.png" alt="head-phones" class="mx-auto w-60 duration-200 hover:scale-105" />
		</div>

		<div>
			<div class="flex flex-col space-y-6">
				<div class="mb-4 flex flex-col space-y-3 text-center md:text-left">
					<div>
						<div class="inline-block rounded-full bg-black px-3 py-1 text-sm text-white">Free Shipping</div>
					</div>

					<div class="max-w-sm text-2xl font-medium">Razer Kraken Kitty Edt Gaming Headset Quartz</div>

					<div class="mb-4 flex flex-col space-y-3 text-center md:text-left">
						<p class="line-through">$799</p>
						<p class="text-5xl font-bold">$599</p>
						<p class="text-sm font-light text-gray-400">
							This offer is valid for limited time or as long as stock lasts!
						</p>
					</div>

					<div class="group">
						<button
							class="w-full rounded-lg text-white shadow-lg shadow-gray-500 transition-all ease-out hover:translate-y-1 hover:shadow-sm hover:shadow-gray-500"
						>
							<div class="rounded-lg bg-blue-500 px-8 py-4 duration-200 group-hover:bg-blue-700">Add to cart</div>
						</button>
					</div>

					<div class="group flex items-center space-x-3">
						<div class="h-3 w-3 rounded-full bg-green-400 group-hover:animate-ping"></div>
						<div class="text-sm">50+ pcs. in stock</div>
					</div>

					<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
						<button
							class="hover:bg-opacity-30 5 flex items-center justify-center space-x-3 rounded-lg border-2 border-gray-300 px-5 py-3 shadow-sm transition-all duration-150 hover:translate-y-0 hover:shadow-lg"
						>
							<img src="product-modal/weight.png" alt="weight" class="w-8" />
							<span>Add to cart</span>
						</button>
						<button
							class="hover:bg-opacity-30 5 flex items-center justify-center space-x-3 rounded-lg border-2 border-gray-300 px-5 py-3 shadow-sm transition-all duration-150 hover:translate-y-0 hover:shadow-lg"
						>
							<img src="product-modal/heart.png" alt="heart" class="w-8" />
							<span>Add to wishlist</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
