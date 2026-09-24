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
			<path class="ColorScheme-Text" d="m8 3a6 5 0 0 0-6 5 6 5 0 0 0 6 5 6 5 0 0 0 6-5 6 5 0 0 0-6-5zm0 1a5 4 0 0 1 5 4 5 4 0 0 1-5 4 5 4 0 0 1-5-4 5 4 0 0 1 5-4z" fill="currentColor"/>
    <path d="m6.7193329 12.268359c-1.2434232-0.290205-2.0787895-0.731773-2.8654292-1.514646-0.651812-0.64869-0.9862901-1.2395099-1.1528008-2.0362995-0.4378368-2.0951424 1.1965364-4.1608003 3.79861-4.8010023 0.7788066-0.1916139 2.1684168-0.2250695 2.891075-0.069604 1.6694851 0.359156 3.0856961 1.3657196 3.7197611 2.6437986 1.131379 2.28051-0.3136 4.7822752-3.2771851 5.6739532-0.6717398 0.202113-2.4402198 0.26106-3.114031 0.103803z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
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
			<path class="ColorScheme-Text" d="m11 5a8 6 0 0 0-8 6 8 6 0 0 0 8 6 8 6 0 0 0 8-6 8 6 0 0 0-8-6m0 1a7 5 0 0 1 7 5 7 5 0 0 1-7 5 7 5 0 0 1-7-5 7 5 0 0 1 7-5" fill="currentColor"/>
    <path d="m10.094968 16.358588c-3.3012762-0.285597-5.9624644-2.210644-6.4378608-4.657013-0.4615539-2.3751354 1.3574104-4.6724752 4.4867958-5.6667933 2.369001-0.7527163 5.09499-0.5436637 7.300339 0.5598538 1.093053 0.5469438 2.339173 1.7467516 2.785338 2.6818205 0.265363 0.5561455 0.292121 0.7104623 0.292705 1.688023 6.05e-4 1.038944-0.0124 1.102649-0.378785 1.853716-1.166128 2.390467-4.481773 3.848956-8.048532 3.540393z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{/if}
