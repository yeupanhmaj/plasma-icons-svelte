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

	{#if numericSize <= 19}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path
       style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none"
       d="m 12.064453,3 -0.757812,0.4804688 c 1.116583,1.3479814 1.710399,2.9158986 1.710937,4.5175781 -0.0043,1.6002893 -0.600802,3.1660661 -1.71875,4.5117191 L 12.068359,13 C 13.32703,11.513919 13.998369,9.7754967 14,7.9980469 13.996227,6.2216198 13.323562,4.4846369 12.064453,3 Z M 10.767578,4.4609375 10,4.9472656 c 0.698954,0.9271285 1.06889,1.981008 1.072266,3.0546875 -0.0023,1.0742041 -0.371613,2.1287919 -1.070313,3.0566409 l 0.767578,0.486328 c 0.83771,-1.067993 1.28215,-2.2932451 1.285157,-3.5429689 -0.0041,-1.2492036 -0.449158,-2.4737436 -1.28711,-3.5410156 z"
       class="ColorScheme-PositiveText" />
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
        class="ColorScheme-Text"
        d="M 8,2 4,6 4,10 8,14 9,14 9,2 8,2 Z M 2,6 2,10 3,10 3,6 2,6 Z" />
		</svg>
	{:else}
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
			<path d="m10.988281 3-4.988281 4.9902344v.0097656 1 4 1 .009766l4.988281 4.990234h1.011719v-.402344-15.1953122-.4023438zm-7.988281 5v1 4 1h2v-1-4-1z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/><path d="m13.865234 3.5371094-.24414.9765625a7 7 0 0 1 4.378906 6.4863281 7 7 0 0 1 -4.380859 6.478516l.24414.974609a8 8 0 0 0 5.136719-7.453125 8 8 0 0 0 -5.134766-7.4628906zm.458985 3.7441406-.539063.8613281a4 4 0 0 1 1.214844 2.8574219 4 4 0 0 1 -1.210938 2.861328l.539063.863281a5 5 0 0 0 1.671875-3.724609 5 5 0 0 0 -1.675781-3.71875z" fill="#27ae60"/>
		</svg>
	{/if}
