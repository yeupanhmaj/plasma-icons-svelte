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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m8 2-4 4v4l4 4h1v-12z"/>
        <path d="m2 6v4h1v-4z"/>
        <path d="m10.128906 4.615234-.3300779.988282a3 3 0 0 1 1.2011719 2.396484 3 3 0 0 1 -1.2011719 2.396484l.3281249.984375a4 4 0 0 0 1.873047-3.380859 4 4 0 0 0 -1.871094-3.384766z"/>
        <path d="m9.9453125 2.332031-.1679687 1a5 5 0 0 1 3.2226562 4.667969 5 5 0 0 1 -3.2207031 4.671875l.1660156.998047a6 6 0 0 0 4.0546875-5.669922 6 6 0 0 0 -4.0546875-5.667969z" opacity=".35"/>
    </g>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m14.324219 7.28125-.539063.8613281a4 4 0 0 1 1.214844 2.8574219 4 4 0 0 1 -1.210938 2.861328l.539063.863281a5 5 0 0 0 1.671875-3.724609 5 5 0 0 0 -1.675781-3.71875z"/>
        <path d="m13.865234 3.5371094-.24414.9765625a7 7 0 0 1 4.378906 6.4863281 7 7 0 0 1 -4.380859 6.478516l.24414.974609a8 8 0 0 0 5.136719-7.453125 8 8 0 0 0 -5.134766-7.4628906z" fill-opacity=".35"/>
        <path d="m3.0000005 8h2v6h-2z" fill-rule="evenodd"/>
        <path d="m6.0000005 14 5.0000005 5h.999999v-16h-1l-4.9999995 5z"/>
    </g>
		</svg>
	{/if}
