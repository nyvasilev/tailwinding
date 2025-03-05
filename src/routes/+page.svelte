<script>
	import { routePath } from '../lib/enums.ts';

	const projects = [
		{
			name: 'Email Subscribe Card',
			link: routePath.emailSubscribeCard,
			image: 'email-subscribe-card/thumbnail.png'
		},
		{
			name: 'Pricing Cards',
			link: routePath.pricingcards,
			image: 'pricing-cards/thumbnail.png'
		},
		{
			name: 'Product Modal',
			link: routePath.productModal,
			image: 'product-modal/thumbnail.png'
		},
		{
			name: 'Image Gallery',
			link: routePath.imageGallery,
			image: 'image-gallery/thumbnail.png'
		},
		{
			name: 'Login Modal',
			link: routePath.loginModal,
			image: 'login-modal/thumbnail.png'
		}
	];
</script>

<div class="flex items-center justify-center h-screen bg-cyan-700">
	<div class="flex flex-wrap">
		{#each projects as project, index (index)}
			<div class="bg-slate-400 relative group ml-5 mt-5">
				<div class="bg-red-700/40 absolute top-0 left-0 w-full h-full duration-500 opacity-0 roup-hover:opacity-100">
					<a href={project.link}>{project.name}</a>
				</div>
				<img src={project.image} alt="" class="w-90 duration-500 group-hover:scale-105" />
				<button
					class="absolute flex bottom-0 left-0 right-0 text-white bg-teal-800 opacity-0 py-2 px-2 group-hover:opacity-100 duration-500"
				>
					<a href={project.link} class="inline-block w-full">{project.name}</a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-7"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#ffffff"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0" fill="none" />
						<line x1="5" y1="12" x2="19" y2="12" />
						<line x1="13" y1="18" x2="19" y2="12" />
						<line x1="13" y1="6" x2="19" y2="12" />
					</svg>
				</button>
			</div>
		{/each}
	</div>
</div>
