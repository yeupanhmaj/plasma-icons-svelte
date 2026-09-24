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
     d="m9.156 2l-7.156 7.125v2.875c1.075.019 2.844 0 2.844 0l7.156-7.156zm-.719 2.156l1.406 1.406-2.844 2.875-1.438-1.438zm-3.594 3.563l1.438 1.406-.719.719-1.406-1.406zm-2.844 5.281v1h12v-1z"
     class="ColorScheme-Text"
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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M 11.996094 3.0019531 L 4.6699219 10.328125 L 4.6679688 10.324219 L 3.2539062 11.738281 L 3.2558594 11.742188 L 3.0058594 11.992188 L 3 11.992188 L 3 16 L 4 16 L 6 16 L 7.0078125 16 L 7.2597656 15.748047 L 7.6132812 15.394531 L 8.3203125 14.6875 L 8.6757812 14.333984 L 15.998047 7.0039062 L 12 3.0039062 L 11.996094 3.0019531 z M 11.412109 4.9980469 L 14 7.5878906 L 9.7324219 11.855469 L 7.1445312 9.265625 L 11.412109 4.9980469 z M 6.4375 9.9726562 L 9.0253906 12.5625 L 8.3183594 13.269531 L 5.7285156 10.679688 L 6.0019531 10.408203 L 6.4375 9.9726562 z M 5.0214844 11.386719 L 7.6113281 13.976562 L 7.6152344 13.978516 L 6.9082031 14.685547 L 6.9042969 14.683594 L 4.3144531 12.09375 L 5.0214844 11.386719 z M 3 18 L 3 19 L 19 19 L 19 18 L 3 18 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
