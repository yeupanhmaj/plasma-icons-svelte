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
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 8 2.0253906 A 5.500002 5.500015 0 0 0 3.0273438 7 L 4 7 L 4.03125 7 A 4.5 4.5 0 0 1 8 3.0332031 L 8 3 L 8 2.0253906 z M 9 2.0273438 L 9 3 L 9 3.03125 A 4.5 4.5 0 0 1 12.966797 7 L 13 7 L 13.974609 7 A 5.500002 5.500015 0 0 0 9 2.0273438 z M 3.0292969 8 A 5.500002 5.500015 0 0 0 8 12.972656 L 8 12 L 8 11.96875 A 4.5 4.5 0 0 1 4.0332031 8 L 4 8 L 3.0292969 8 z M 12.96875 8 A 4.5 4.5 0 0 1 9 11.966797 L 9 12 L 9 12.974609 A 5.500002 5.500015 0 0 0 13.972656 8 L 13 8 L 12.96875 8 z "
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 7 1 L 7 4 L 10 4 L 10 1 L 7 1 z M 8 2 L 9 2 L 9 3 L 8 3 L 8 2 z M 2 6 L 2 9 L 5 9 L 5 6 L 2 6 z M 12 6 L 12 9 L 15 9 L 15 6 L 12 6 z M 3 7 L 4 7 L 4 8 L 3 8 L 3 7 z M 13 7 L 14 7 L 14 8 L 13 8 L 13 7 z M 7 11 L 7 14 L 10 14 L 10 11 L 7 11 z M 8 12 L 9 12 L 9 13 L 8 13 L 8 12 z "
        class="ColorScheme-Accent"
      />
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
			<path id="path4" class="ColorScheme-Text" d="M 9,4.2949219 A 7,7 0 0 0 4.2988281,9 H 5.3515625 A 6,6 0 0 1 9,5.3496094 Z m 4,0.00391 V 5.3515625 A 6,6 0 0 1 16.650391,9 h 1.054687 A 7,7 0 0 0 13,4.2988281 Z M 4.2949219,13 A 7,7 0 0 0 9,17.701172 V 16.648438 A 6,6 0 0 1 5.3496094,13 Z M 16.648438,13 A 6,6 0 0 1 13,16.650391 v 1.054687 A 7,7 0 0 0 17.701172,13 Z" fill="currentColor"/>
    <path id="path6" class="ColorScheme-Accent" d="m9 2v4h4v-4zm1 1h2v2h-2zm-8 6v4h4v-4zm14 0v4h4v-4zm-13 1h2v2h-2zm14 0h2v2h-2zm-8 6v4h4v-4zm1 1h2v2h-2z" fill="currentColor"/>
		</svg>
	{/if}
