<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 22,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 22
	);
</script>

	{#if numericSize <= 27}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 22 22"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="6" x2="6" y1="14" y2="5"><stop offset="0" stop-color="#eff0f1"/><stop offset="1" stop-color="#fcfcfc"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="6" x2="18" y1="5" y2="17"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientTransform="matrix(1 0 0 1.0285724 -.00001 -14.394733)" gradientUnits="userSpaceOnUse" x1="418.16971" x2="384.57144" y1="503.07938" y2="531.45813"><stop offset="0" stop-color="#1abc9c"/><stop offset="1" stop-color="#2980b9"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="29.85095" x2="54.317608" y1="22.348567" y2="28.506301"><stop offset="0" stop-color="#cc4a5e"/><stop offset="1" stop-color="#aa478a"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="24.393862" x2="20.645595" xlink:href="#f" y1="41.223652" y2="25.343179"/><linearGradient id="f"><stop offset="0" stop-color="#334545"/><stop offset="1" stop-color="#536161"/></linearGradient><linearGradient id="g" gradientTransform="matrix(-1 0 0 1 839.14285 -40.00001)" gradientUnits="userSpaceOnUse" x1="430.57141" x2="440.17142" xlink:href="#f" y1="569.97992" y2="562.49939"/><linearGradient id="h" gradientTransform="matrix(-.41666647 0 0 .53472146 190.40467 -283.78051)" gradientUnits="userSpaceOnUse" x1="430.57141" x2="440.17142" xlink:href="#f" y1="569.97992" y2="562.49939"/><linearGradient id="i" gradientTransform="matrix(-.41666647 0 0 .53472146 194.40467 -286.3305)" gradientUnits="userSpaceOnUse" x1="430.57141" x2="440.17142" xlink:href="#f" y1="569.97992" y2="562.49939"/><g transform="matrix(.41666647 0 0 .53472146 -159.23802 -267.39164)"><path d="m384.57144 503.79801v33.66238h48.00002v-33.66238z" fill="url(#c)" stroke-width="1.10638"/><g stroke-linecap="round"><g stroke-width="2"><path d="m56 6-29.700005 17.142932 24.2 13.714298h5.5z" fill="url(#d)" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/><path d="m26.299995 23.142932-14.299995 8.382865v5.331433h38.499995z" fill="url(#e)" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/><path d="m408.57144 527.26823-8.4-4.76883-1.2.71065v8.64001h1.2z" fill="url(#g)"/></g><path d="m11 14.549998v5.45h.499999l3.500001-2.55z" fill="url(#i)" stroke-width=".944035" transform="matrix(2.4000011 0 0 1.8701325 382.17143 500.05781)"/><path d="m7 17v3h4v-.449219l-3.5-2.550781z" fill="url(#h)" stroke-width=".944035" transform="matrix(2.4000011 0 0 1.8701325 382.17143 500.05781)"/><path d="m400.17144 522.4994 32.40001-18.70139-.00002 10.94034z" fill="#aa478a" stroke-width="2"/></g></g><g transform="matrix(.62499999 0 0 .62499999 -239.35714 -321.62379)"><path d="m384.57144 541.7981h31.999952v4.8h-31.999952z" fill="#fff" fill-opacity=".784314" stroke-width="1.09545"/><path d="m19.5 17.75a.75000002.75000002 0 0 0 -.75.75.75000002.75000002 0 0 0 .75.75.75000002.75000002 0 0 0 .75-.75.75000002.75000002 0 0 0 -.75-.75zm-17.5.25v1h1v-1z" fill="#4d4d4d" stroke-width=".75" transform="matrix(1.6 0 0 1.6 382.97143 514.59807)"/></g><path d="m11 5c-.2652 0-.519531.1054388-.707031.2929688-.1875.18754-.292969.4418112-.292969.7070312l1 1c-1.06087 0-2.077975.421735-2.828125 1.171875-.75014.75015-1.171875 1.767255-1.171875 2.828125l1 1c-1.108 0-2 .892-2 2l3 3h12v-2.414062l-9.292969-9.2929692c-.1875-.18753-.441831-.2929688-.707031-.2929688z" fill="url(#b)" opacity=".2"/><path d="m11 5a1 1 0 0 0 -1 1h2a1 1 0 0 0 -1-1zm0 2a4 4 0 0 0 -4 4h8a4 4 0 0 0 -4-4zm-3 5c-1.108 0-2 .892-2 2h10c0-1.108-.892-2-2-2z" fill="url(#a)" stroke-linejoin="round" stroke-width="2"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<linearGradient id="b" gradientUnits="userSpaceOnUse" x1="42.798" x2="12" y1="5.341" y2="31.355"><stop offset="0" stop-color="#1abc9c"/><stop offset="1" stop-color="#2980b9"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="29.851" x2="54.318" y1="22.349" y2="28.506"><stop offset="0" stop-color="#cc4a5e"/><stop offset="1" stop-color="#aa478a"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="24.394" x2="20.646" xlink:href="#a" y1="41.224" y2="25.343"/><linearGradient id="a"><stop offset="0" stop-color="#334545"/><stop offset="1" stop-color="#536161"/></linearGradient><linearGradient id="e" gradientTransform="matrix(-1 0 0 1 839.143 -40)" gradientUnits="userSpaceOnUse" x1="431.571" x2="439.571" xlink:href="#a" y1="568.798" y2="562.798"/><linearGradient id="f" gradientTransform="matrix(-.91667 0 0 .91667 428.69 -492.481)" gradientUnits="userSpaceOnUse" x1="406.537" x2="423.32" xlink:href="#a" y1="581.87" y2="572.678"/><linearGradient id="g" gradientTransform="matrix(-.91667 0 0 .91667 448.69 -492.481)" gradientUnits="userSpaceOnUse" x1="423.054" x2="431.225" xlink:href="#a" y1="572.334" y2="566.766"/><linearGradient id="h" gradientTransform="matrix(-.91667 0 0 .91667 428.69 -492.481)" gradientUnits="userSpaceOnUse" x1="431.313" x2="440.632" xlink:href="#a" y1="577.102" y2="571.445"/><linearGradient id="i" gradientTransform="matrix(-.91667 0 0 .91667 428.69 -492.481)" gradientUnits="userSpaceOnUse" x1="430.567" x2="423.75" xlink:href="#a" y1="577.362" y2="591.328"/><linearGradient id="l" gradientUnits="userSpaceOnUse" x1="407.571" x2="407.571" y1="535.798" y2="532.798"><stop offset="0" stop-color="#eff0f1"/><stop offset="1" stop-color="#fcfcfc"/></linearGradient><linearGradient id="k" gradientUnits="userSpaceOnUse" x1="406.571" x2="406.571" y1="531.798" y2="523.798"><stop offset="0" stop-color="#eff0f1"/><stop offset="1" stop-color="#fcfcfc"/></linearGradient><linearGradient id="j" gradientUnits="userSpaceOnUse" x1="396.571" x2="407.571" y1="527.798" y2="538.798"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="M12 6v30h44V6z" fill="url(#b)" transform="matrix(.72727 0 0 .93333 -8.727 -3.6)"/><g stroke-linecap="round" stroke-width="2"><path d="M56 6L25.719 23.482 47.4 36H56z" fill="url(#c)" transform="matrix(.72727 0 0 .93333 -8.727 -3.6)"/><path d="M25.75 23.416L12 31.356V36h35.605z" fill="url(#d)" transform="matrix(.72727 0 0 .93333 -8.727 -3.6)"/><path d="M407.83 527.566l-8.259-4.768v9.536z" fill="url(#e)" transform="matrix(.66667 0 0 .85555 -256.38 -429.027)"/><path d="M40.89 32.156V36h6.657z" fill="url(#f)" transform="matrix(.72727 0 0 .93333 -8.727 -3.6)"/><path d="M53.32 27.787V36h.916l6.655-3.842z" fill="url(#g)" transform="matrix(.72727 0 0 .93333 -23.273 -3.6)"/><path d="M25.75 32.158V36h6.654z" fill="url(#h)" transform="matrix(.72727 0 0 .93333 -8.727 -3.6)"/><path d="M40.89 32.156L34.235 36h6.657z" fill="url(#i)" transform="matrix(.72727 0 0 .93333 -8.727 -3.6)"/><path d="M9.977 18.317L32 2v7.971z" fill="#aa478a"/></g><path d="M0 26h32v4H0z" fill="#fff" fill-opacity=".784"/><g fill="#4d4d4d" transform="translate(-384.571 -515.798)"><circle cx="414.571" cy="543.798" r="1"/><path d="M386.571 542.798v1h1v-1zm1 1v1h1v-1z"/></g><path d="M399.571 524.798l1 1-6 6 1 1-2 3 10 10h13v-6.485l-11.757-11.758-.035.036-3.5-3.5-.708-.293z" fill="url(#j)" opacity=".2" transform="translate(-384.571 -515.798)"/><g fill-rule="evenodd"><path d="M400.571 523.798a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1zm0 2a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6z" fill="url(#k)" transform="translate(-384.571 -515.798)"/><path d="M394.571 532.798a1 1 0 0 0-1 1v2h14v-2a1 1 0 0 0-1-1z" fill="url(#l)" transform="translate(-384.571 -515.798)"/></g>
		</svg>
	{/if}
