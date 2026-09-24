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
     d="M 1 2 L 1 14 L 15 14 L 15 2 L 1 2 z M 2.7070312 3 L 13.292969 3 L 8 8.2929688 L 2.7070312 3 z M 2 3.7070312 L 5.9335938 7.640625 L 2 12.230469 L 2 3.7070312 z M 14 3.7070312 L 14 12.232422 L 10.066406 7.640625 L 14 3.7070312 z M 6.6425781 8.3496094 L 8 9.7070312 L 9.3574219 8.3496094 L 13.341797 13 L 2.65625 13 L 6.6425781 8.3496094 z "
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
    d="M 1 3 L 1 4 L 1 18 L 1 18.414062 L 1 19 L 2 19 L 21 19 L 21 18.414062 L 21 18 L 21 17 L 21 3 L 20.951172 3 L 20 3 L 2.4628906 3 L 2 3 L 1 3 z M 2 4 L 2.0488281 4 L 8.0234375 9.9765625 L 2 16 L 2 4 z M 3.4628906 4 L 18.537109 4 L 11 11.537109 L 3.4628906 4 z M 19.951172 4 L 20 4 L 20 16 L 13.976562 9.9765625 L 19.951172 4 z M 8.7304688 10.683594 L 11 12.951172 L 13.269531 10.683594 L 19.537109 16.951172 L 20 17.414062 L 20 18 L 2 18 L 2 17.414062 L 2.4628906 16.951172 L 8.7304688 10.683594 z "
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
     d="M 2 5 L 2 24.683594 L 2 27 L 30 27 L 30 24.683594 L 30 5 L 2 5 z M 3 6 L 3.0234375 6 L 12.070312 14.841797 L 3 23.707031 L 3 6 z M 4.453125 6 L 27.546875 6 L 16 17.285156 L 4.453125 6 z M 28.976562 6 L 29 6 L 29 23.707031 L 19.929688 14.841797 L 28.976562 6 z M 12.785156 15.541016 L 16 18.683594 L 19.214844 15.541016 L 28.570312 24.683594 L 29 25.091797 L 29 26 L 3 26 L 3 25.111328 L 3.4296875 24.683594 L 12.785156 15.541016 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
