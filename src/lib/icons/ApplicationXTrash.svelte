<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 32
	);
</script>

	{#if numericSize <= 48}
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
			<defs id="defs4">
  <linearGradient id="a" x1="404.57" x2="411.57" y1="524.8" y2="531.8" gradientUnits="userSpaceOnUse">
   <stop id="stop1" stop-color="#383e51" offset="0"/>
   <stop id="stop2" stop-color="#655c6f" stop-opacity="0" offset="1"/>
  </linearGradient>
  <linearGradient id="b" x1="6.508" x2="7.322" y1="3.421" y2="61.14" gradientTransform="matrix(.5 0 0 -.48276 384.57 547.25)" gradientUnits="userSpaceOnUse">
   <stop id="stop3" stop-color="#fff" stop-opacity="0" offset="0"/>
   <stop id="stop4" stop-color="#fff" stop-opacity=".2" offset="1"/>
  </linearGradient>
 </defs>
 <g id="g9" transform="translate(-384.57-515.8)">
  <path id="path4" d="m389.57 517.8v27h22v-20l-7-7z" fill="#ccc"/>
  <path id="path1" class="ColorScheme-Text" d="m400.57 526.8c-3.3137 0-6 2.6863-6 6l-2e-3 3-1.3438-1.4551-0.65625 0.69531 2.3125 2.5312 0.18945 0.22071 0.1875-0.22071 2.3125-2.5312-0.65625-0.69531-1.3438 1.4551v-3c0-2.7614 2.2386-5 5-5s5 2.2386 5 5-2.2386 5-5 5c-0.71415 0-1.3855-0.15992-2-0.42969v1.0274c0.63157 0.22593 1.2908 0.40234 2 0.40234 3.3137 0 6-2.6863 6-6s-2.6863-6-6-6zm-1 2v5h5v-1h-4v-4z" color="#232629" opacity=".5"/>
  <g id="g5" fill="#fff">
   <rect id="rect4" transform="scale(1-1)" x="389.57" y="-518.8" width="15" height="1" opacity=".5"/>
   <path id="path5" d="m411.57 524.8-7-7v7z" fill-rule="evenodd" opacity=".5"/>
  </g>
  <path id="path6" d="m411.57 531.8-7-7h7z" fill="url(#a)" fill-rule="evenodd" opacity=".2"/>
  <path id="path8" d="m389.57 545.8v-28h15l7 7v21h-7z" fill="url(#b)"/>
  <path id="path9" transform="translate(384.57,515.8)" d="m5 29v1h22v-1z" color="#000000" color-rendering="auto" image-rendering="auto" opacity=".25" shape-rendering="auto" text-rendering="auto"/>
 </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs id="defs4">
  <linearGradient id="a" x1="40" x2="54" y1="17" y2="31" gradientUnits="userSpaceOnUse">
   <stop id="stop1" stop-color="#060606" offset="0"/>
   <stop id="stop2" stop-opacity="0" offset="1"/>
  </linearGradient>
  <linearGradient id="b" x2="0" y1="392.36" y2="336.36" gradientTransform="translate(-108,-332.36)" gradientUnits="userSpaceOnUse">
   <stop id="stop3" stop-color="#fff" stop-opacity="0" offset="0"/>
   <stop id="stop4" stop-color="#fff" stop-opacity=".2" offset="1"/>
  </linearGradient>
 </defs>
 <path id="path8" d="m10 3v58h44l-1e-6 -44-15.172-14z" fill="#ccc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
 <g id="g4" fill="#fff">
  <rect id="rect4" transform="scale(1-1)" x="10" y="-4" width="30" height="1" color="#000000" color-rendering="auto" image-rendering="auto" opacity=".5" shape-rendering="auto" text-rendering="auto"/>
  <path id="path4" d="m54 17-14-14v14z" fill-rule="evenodd" opacity=".5"/>
 </g>
 <path id="path5" d="m40 17 14 14v-14z" fill="url(#a)" fill-rule="evenodd" opacity=".2"/>
 <g id="g8" color-rendering="auto" image-rendering="auto" shape-rendering="auto" text-rendering="auto">
  <path id="path6" d="m32.135 23c-0.20708-0.0026-0.4142 6.74e-4 -0.62109 0.0098-5.882 0.26457-10.514 5.1069-10.514 10.99l-2e-3 7-1.9176-2.0874-0.65625 0.69531 2.8863 3.1636 0.18945 0.2207 0.1875-0.2207 2.888-3.16v-0.0039l-0.65425-0.69337-1.9212 2.0858v-7c-2.19e-4 -5.3476 4.2102-9.7491 9.5566-9.9902 5.4657-0.23735 10.109 3.9547 10.426 9.4121l0.017578 0.57812c-4.96e-4 5.4661-4.3934 9.919-9.8633 9.998-1.4283 0.01263-2.8428-0.28039-4.1484-0.85938v1.0859c1.3248 0.52469 2.739 0.78736 4.1641 0.77344 6.0162-0.088001 10.847-4.986 10.848-10.998l-0.01758-0.63672c-0.33395-5.7635-5.0703-10.288-10.848-10.363zm-1.1445 3v9h8.0059v-1h-7.0059v-8z" opacity=".5"/>
  <g id="g7" color="#000000">
   <path id="path7" d="m10 60v1h44v-1z" opacity=".25"/>
   <path id="use7" d="m10 61v-58h28.828l15.172 14v44z" fill="url(#b)"/>
  </g>
 </g>
		</svg>
	{/if}
