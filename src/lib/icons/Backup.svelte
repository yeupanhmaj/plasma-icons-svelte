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
			<path d="m9.00395 2c-3.3137085 0-6 2.6862915-6 6l-0.00195 3-1.34375-1.4550781-0.65625 0.6953121 2.3125 2.53125 0.18945 0.220704 0.1875-0.220704 2.3125-2.53125-0.65625-0.6953121-1.34375 1.4550781v-3c0-2.7614237 2.2385763-5 5-5 2.761424 0 5 2.2385763 5 5 0 2.761424-2.238576 5-5 5-0.7141482 0-1.3854668-0.159922-2-0.429688v1.027344c0.6315719 0.225932 1.290757 0.402344 2 0.402344 3.313708 0 6-2.686292 6-6 0-3.3137085-2.686292-6-6-6zm-1 2v5h5v-1h-4v-4z"
      style="fill:currentColor;fill-opacity:1;stroke:none"
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
			<path d="m12 3c-4.431998 0-8 3.568002-8 8v5.007812l-1.34375-1.455078-0.65625 0.695313 2.3125 2.53125 0.1894531 0.220703 0.1875-0.220703 2.3125-2.53125-0.65625-0.695313-1.34375 1.455078-0.0019531-5.007812c0-3.877999 3.122001-7 7-7s7 3.122001 7 7-3.122001 7-7 7c-1.087039 0-2.0838742-0.291968-3-0.730469v1.126953c0.9282045 0.375012 1.934287 0.603516 3 0.603516 4.431998 0 8-3.568002 8-8s-3.568002-8-8-8zm-1 2v7h6v-1h-5v-6h-1z"
      style="fill:currentColor;fill-opacity:1;stroke:none"
      class="ColorScheme-Text"/>
		</svg>
	{/if}
