<script>
	const plans = [
		{
			id: 1,
			title: 'Basic',
			storage: '100GB',
			price: '€1.99/month',
			options: [{ text: '100GB storage' }, { text: 'Option to add members' }, { text: 'Extra member benefits' }]
		},
		{
			id: 2,
			title: 'STANDARD',
			storage: '200GB',
			price: '€3.99/month',
			options: [{ text: '200GB storage' }, { text: 'Option to add members' }, { text: 'Extra member benefits' }]
		},
		{
			id: 3,
			title: 'PREMIUM',
			storage: '2TB',
			price: '€8.99/month',
			options: [{ text: '2TB storage' }, { text: 'Option to add members' }, { text: 'Extra member benefits' }]
		}
	];
</script>

<svelte:head>
	<title>Pricing Cards</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-slate-800">
	<div class="my-6 flex flex-col space-y-6 md:my-0 md:flex-row md:space-y-0 md:space-x-6">
		{#each plans as plan, index (index)}
			<div class="rounded-t-xl bg-slate-700 text-white" class:bg-violet-600={plan.id === 2}>
				<div class="mx-3 mt-3 rounded-t-xl bg-slate-800 p-8">
					<div class="text-center uppercase">{plan.title}</div>
					<h2 class="mt-10 text-center font-serif text-5xl">{plan.storage}</h2>
					<h3 class="mt-2 text-center">{plan.price}</h3>
					<div class="flex justify-center">
						<a
							href="#"
							class="my-6 inline-block rounded-lg border border-violet-600 px-10 py-3 text-center duration-200 hover:border-violet-800 hover:bg-violet-800"
							class:bg-violet-600={plan.id === 2}>Purchase</a
						>
					</div>
				</div>

				<div class="border-t border-slate-700"></div>
				<div class="mx-3 mb-3 rounded-b-xl bg-slate-800 p-8">
					<div class="flex flex-col space-y-2">
						{#each plan.options as option, index (index)}
							<div class="flex justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M5 12l5 5l10 -10" />
								</svg>
								<span class="ml-1 text-sm">{option.text}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
