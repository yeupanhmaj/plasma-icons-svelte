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
			<path id="path5" d="M 8.500001,8.2070307 13,3.707031 V 6 l 1,-2e-7 V 2 h -4 v 0.9999999 h 2.292969 L 7.79297,7.4999995 Z" class="ColorScheme-Text" fill="currentColor"/>
    <path id="path1374" d="m3.5 4c-0.132599 2.55e-5 -0.25976 0.052716-0.353516 0.1464844l-1.121093 1.1210937c-0.0054 0.042537-0.01473 0.077875-0.01953 0.1210938-0.142957 1.2866058-0.0075 3.0237329 1.287109 4.3183593l3 2.9999998c1.294626 1.294627 3.031754 1.430066 4.318359 1.28711 0.0471-0.0052 0.07918-0.01746 0.125-0.02344l1.117188-1.117187c0.195185-0.195265 0.195185-0.511767 0-0.707032l-1.5-1.5c-0.093757-0.093764-0.220917-0.146457-0.353517-0.146482-0.132599 2.5e-5 -0.25976 0.05272-0.353516 0.146484l-0.585937 0.585938c-0.391737 0.391737-1.022326 0.391737-1.414063 0l-2.878906-2.8789064c-0.391737-0.3917371-0.391737-1.0223253 0-1.4140625l0.585938-0.5859375c0.195184-0.1952649 0.195184-0.5117663 0-0.7070312l-1.5-1.5c-0.093756-0.0937681-0.220916-0.1464589-0.353516-0.1464844z" class="ColorScheme-Text" fill="currentColor"/>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m389.76455 557.04066c1.81605 1.81605 4.35942 2.40526 6.67057 1.81471l.40051-.40052.7071-.70709s.7071-.70711-.00001-1.41423l-3.04035-3.04035c-.70711-.70711-1.41422 0-1.41422 0l-.35355.35355c-.58761.58761-1.53372.5876-2.12132 0l-3.32624-3.32622c-.58759-.58759-.58761-1.53372 0-2.12134l.35356-.35355s.70709-.7071-.00001-1.41421l-3.04055-3.04055c-.70711-.7071-1.41421 0-1.41421 0l-.7071.7071-.40051.40051c-.59055 2.31115-.0001 4.85476 1.81472 6.67056z" transform="translate(-378.85714 -540.07647)"/>
        <path d="m12.5 10.207031 5.5-5.4999998v3.2929688h1v-5h-5v1h3.292969l-5.5 5.5z"/>
    </g>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m15.861 24.946c2.724 2.724 6.539 3.608 10.01 2.722l1.661-1.661s1.061-1.061 0-2.121l-4.561-4.561c-1.061-1.061-2.121 0-2.121 0l-.53.53c-.881.881-2.301.881-3.182 0l-4.989-4.989c-.881-.881-.881-2.301 0-3.182l.53-.53s1.061-1.061 0-2.121l-4.561-4.561c-1.061-1.061-2.121 0-2.121 0l-1.661 1.661c-.886 3.467-.002 7.282 2.722 10.01z"/>
        <path d="m18.5 14.207031 8.5-8.5v4.292969h1v-6h-6v1h4.292969l-8.5 8.5z"/>
    </g>
		</svg>
	{/if}
