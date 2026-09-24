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
     d="M 5 2 L 5 3 L 13.292969 3 L 8 8.2929688 L 5 5.2929688 L 5 6.7070312 L 5.9335938 7.640625 L 5 8.7304688 L 5 10.265625 L 6.6425781 8.3496094 L 8 9.7070312 L 9.3574219 8.3496094 L 13.341797 13 L 5 13 L 5 14 L 15 14 L 15 2 L 5 2 z M 14 3.7070312 L 14 12.232422 L 10.066406 7.640625 L 14 3.7070312 z M 1 7 L 1 8 L 4 8 L 4 7 L 1 7 z M 2 9 L 2 10 L 4 10 L 4 9 L 2 9 z "
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
    d="M 6 3 L 6 4 L 19.537109 4 L 12 11.537109 L 6 5.5371094 L 6 6.9511719 L 9.0234375 9.9765625 L 6 13 L 6 14.414062 L 9.7304688 10.683594 L 12 12.951172 L 14.269531 10.683594 L 20.537109 16.951172 L 21 17.414062 L 21 18 L 6 18 L 6 19 L 22 19 L 22 18.414062 L 22 18 L 22 17 L 22 3 L 21.951172 3 L 21 3 L 6 3 z M 20.951172 4 L 21 4 L 21 16 L 14.976562 9.9765625 L 20.951172 4 z M 0 9 L 0 10 L 5 10 L 5 9 L 0 9 z M 2 12 L 2 13 L 5 13 L 5 12 L 2 12 z "
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
     d="M 9 5 L 9 6 L 27.546875 6 L 16 17.285156 L 9 10.443359 L 9 11.841797 L 12.070312 14.841797 L 9 17.841797 L 9 19.240234 L 12.785156 15.541016 L 16 18.683594 L 19.214844 15.541016 L 28.570312 24.683594 L 29 25.091797 L 29 26 L 9 26 L 9 27 L 30 27 L 30 24.683594 L 30 5 L 9 5 z M 28.976562 6 L 29 6 L 29 23.707031 L 19.929688 14.841797 L 28.976562 6 z M 2 13 L 2 14 L 8 14 L 8 13 L 2 13 z M 4 16 L 4 17 L 8 17 L 8 16 L 4 16 z M 6 19 L 6 20 L 8 20 L 8 19 L 6 19 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
