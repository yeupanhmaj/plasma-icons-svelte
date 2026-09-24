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
			<path fill-rule="evenodd" clip-rule="evenodd" d="M2 2H14V9.70711L9.70711 14H2V2ZM3 3V13H9V9H13V3H3ZM12.2929 10H10V12.2929L12.2929 10Z" fill="currentColor" class="ColorScheme-Text"/>
<path d="M7 6.5C7 6.77614 6.77614 7 6.5 7C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6C6.77614 6 7 6.22386 7 6.5Z" fill="currentColor" class="ColorScheme-Text"/>
<path d="M10 6.5C10 6.77614 9.77614 7 9.5 7C9.22386 7 9 6.77614 9 6.5C9 6.22386 9.22386 6 9.5 6C9.77614 6 10 6.22386 10 6.5Z" fill="currentColor" class="ColorScheme-Text"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 8.85356C9.50144 10.7057 6.49857 10.7057 4.64645 8.85356L5.35356 8.14645C6.81515 9.60805 9.18486 9.60805 10.6465 8.14645L11.3536 8.85356Z" fill="currentColor" class="ColorScheme-Text"/>
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
			<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H19V13H18V4H4V18H13V19H3V3Z" fill="currentColor" class="ColorScheme-Text"/>
<path d="M9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9Z" fill="currentColor" class="ColorScheme-Text"/>
<path d="M15 9C15 9.55228 14.5523 10 14 10C13.4477 10 13 9.55228 13 9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9Z" fill="currentColor" class="ColorScheme-Text"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4288 12.2572C12.8757 14.8457 9.12432 14.8457 7.57126 12.2572L8.42875 11.7427C9.59341 13.6838 12.4066 13.6838 13.5713 11.7427L14.4288 12.2572Z" fill="currentColor" class="ColorScheme-Text"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 11.5V13.7071L13.7071 19H11.5V18H13V13H18V11.5H19ZM17.2929 14H14V17.2929L17.2929 14Z" fill="currentColor" class="ColorScheme-Text"/>
		</svg>
	{/if}
