<script>
	const images = [
		{
			id: 1,
			name: 'Abstract Painting',
			popularity: '245 likes - 35 Shares',
			path: 'image-gallery/image1.jpg'
		},
		{
			id: 2,
			name: 'Abstract Painting',
			popularity: '245 likes - 35 Shares',
			path: 'image-gallery/image2.jpg'
		},
		{
			id: 3,
			name: 'Abstract Painting',
			popularity: '245 likes - 35 Shares',
			path: 'image-gallery/image3.jpg'
		},
		{
			id: 4,
			name: 'Abstract Painting',
			popularity: '245 likes - 35 Shares',
			path: 'image-gallery/image4.jpg'
		},
		{
			id: 5,
			name: 'Abstract Painting',
			popularity: '245 likes - 35 Shares',
			path: 'image-gallery/image5.jpg'
		},
		{
			id: 6,
			name: 'Abstract Painting',
			popularity: '245 likes - 35 Shares',
			path: 'image-gallery/image6.jpg'
		}
	];
</script>

<svelte:head>
	<title>Image Gallery</title>
</svelte:head>

<div class="flex items-center justufy-center min-h-screen">
	<div class="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
		<div
			class="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end"
		>
			<div class="group">
				<a href="#">Vector</a>
				<div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
			</div>

			<div class="group">
				<a href="#">Iliustrations</a>
				<div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
			</div>
			<div class="group">
				<a href="#">Images</a>
				<div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
			</div>
			<div class="group">
				<a href="#">Icons</a>
				<div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
			</div>
		</div>

		<div class="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
			<div class="flex justify-between border-b">
				<input
					type="text"
					class="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
					placeholder="Search"
				/>
				<button aria-label="search">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-8 text-gray-300 duration-200 hover:scale-110"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<circle cx="10" cy="10" r="7" />
						<line x1="21" y1="21" x2="15" y2="15" />
					</svg>
				</button>
			</div>
			<button
				class="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black"
				>Upload</button
			>
		</div>

		<div class="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{#each images as image, index (index)}
				<div class="relative group">
					<img src={image.path} alt="" class="w-72" />
					<div
						class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black/40 opacity-0 group-hover:opacity-100"
					>
						<div class="flex justify-between w-full">
							<div class="font-normal">
								<p class="text-sm">{image.name}</p>
								<p class="text-xs">{image.popularity}</p>
							</div>
							<div class="flex items-center">
								<img src="image-gallery/bookmark.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
