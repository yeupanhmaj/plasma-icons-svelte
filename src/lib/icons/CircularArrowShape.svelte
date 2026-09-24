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
     d="M 6.5 3 C 4.014748 3 2 5.0147171 2 7.5 L 2 8 L 2 9 L 3 9 L 3 8 L 3 7.5 C 3 5.5670021 4.566998 4 6.5 4 C 8.4330016 4 10 5.5670021 10 7.5 L 10 8 L 10 8.8125 L 10 10 L 10 11.09375 L 7.71875 8.78125 L 7 9.5 L 10.28125 12.78125 L 10.5 13 L 10.71875 12.78125 L 14 9.5 L 13.28125 8.78125 L 11 11.09375 L 11 10 L 11 8.8125 L 11 8 L 11 7.5 C 11 5.0147171 8.9852521 3 6.5 3 z "
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
     d="M 9.5996094 4.9003906 C 5.9986094 4.9003906 3.0996094 7.7993901 3.0996094 11.400391 L 3.0996094 12.900391 L 4.0996094 12.900391 L 4.0996094 11.400391 C 4.0996094 8.3533901 6.5526094 5.9003906 9.5996094 5.9003906 C 12.646609 5.9003906 15.099609 8.3533901 15.099609 11.400391 L 15.099609 11.892578 L 15.099609 12.900391 L 15.099609 15.185547 L 12.806641 12.892578 L 12.099609 13.599609 L 15.392578 16.892578 L 15.599609 17.099609 L 15.806641 16.892578 L 19.099609 13.599609 L 18.392578 12.892578 L 16.099609 15.185547 L 16.099609 12.900391 L 16.099609 11.892578 L 16.099609 11.400391 C 16.099609 7.7993901 13.200609 4.9003906 9.5996094 4.9003906 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
