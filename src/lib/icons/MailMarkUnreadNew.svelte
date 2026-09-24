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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 1 2 L 1 14 L 9 14 L 9 13 L 2.65625 13 L 6.6425781 8.3496094 L 8 9.7070312 C 7.986852 9.6833613 14 3.7070312 14 3.7070312 L 14 8 L 15 8 L 15 2 L 1 2 z M 2.7070312 3 L 13.292969 3 L 8 8.2929688 L 2.7070312 3 z M 2 3.7070312 L 5.9335938 7.640625 L 2 12.230469 L 2 3.7070312 z M 12 8 L 11.425781 9.6132812 L 9.8789062 8.8789062 L 10.613281 10.425781 L 9 11 L 10.613281 11.574219 L 9.8789062 13.121094 L 11.425781 12.386719 L 12 14 L 12.574219 12.386719 L 14.121094 13.121094 L 13.386719 11.574219 L 15 11 L 13.386719 10.425781 L 14.121094 8.8789062 L 12.574219 9.6132812 L 12 8 z "
     class="ColorScheme-Text"
     />
		</svg>
	{:else if numericSize <= 27}
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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M 1 3 L 1 4 L 1 12 L 1 18 L 1 18.414062 L 1 19 L 2 19 L 8 19 L 14 19 L 14 18 L 8 18 L 2 18 L 2 17.414062 L 2.4628906 16.951172 L 8.7304688 10.683594 L 10.183594 12.134766 L 10.998047 12.949219 L 11 12.949219 L 11.816406 12.134766 L 13.269531 10.683594 L 14.585938 12 L 16 12 L 13.976562 9.9765625 L 19.728516 4.2226562 L 19.951172 4 L 20 4 L 20 4.2226562 L 20 12 L 21 12 L 21 3 L 20.951172 3 L 20 3 L 19.537109 3 L 2.4628906 3 L 2 3 L 1 3 z M 2 4 L 2.0488281 4 L 2.2714844 4.2226562 L 8.0234375 9.9765625 L 2 16 L 2 12 L 2 4.2226562 L 2 4 z M 3.4628906 4 L 18.537109 4 L 11 11.537109 L 3.4628906 4 z M 18 13 L 17.425781 14.613281 L 15.878906 13.878906 L 16.613281 15.425781 L 15 16 L 16.613281 16.574219 L 15.878906 18.121094 L 17.425781 17.386719 L 18 19 L 18.574219 17.386719 L 20.121094 18.121094 L 19.386719 16.574219 L 21 16 L 19.386719 15.425781 L 20.121094 13.878906 L 18.574219 14.613281 L 18 13 z "
    class="ColorScheme-Text"
    />
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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 2 5 L 2 24.683594 L 2 27 L 19 27 L 19 26 L 3 26 L 3 25.111328 L 3.4296875 24.683594 L 12.785156 15.541016 L 16 18.683594 L 28.976562 6 L 29 6 L 29 14 L 30 14 L 30 5 L 2 5 z M 3 6 L 3.0234375 6 L 12.070312 14.841797 L 3 23.707031 L 3 6 z M 4.453125 6 L 27.546875 6 L 16 17.285156 L 4.453125 6 z M 24 15 L 22.851562 18.228516 L 19.757812 16.757812 L 21.228516 19.851562 L 18 21 L 21.228516 22.148438 L 19.757812 25.242188 L 22.851562 23.771484 L 24 27 L 25.148438 23.771484 L 28.242188 25.242188 L 26.771484 22.148438 L 30 21 L 26.771484 19.851562 L 28.242188 16.757812 L 25.148438 18.228516 L 24 15 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
