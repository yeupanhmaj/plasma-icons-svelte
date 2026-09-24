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
     d="M 8.0566406 2 C 6.9416206 2 6.0371094 2.89542 6.0371094 4 L 6.0371094 5.75 L 2 9.75 L 6.2910156 14 L 12 8.34375 L 10.580078 6.9375 L 10.076172 6.4375 L 10.076172 4 C 10.076172 2.89542 9.1716706 2 8.0566406 2 z M 8.0566406 3 C 8.6141506 3 9.0664062 3.44772 9.0664062 4 L 9.0664062 5.4375 L 7.7089844 4.09375 L 7.046875 4.75 L 7.046875 4 C 7.046875 3.44772 7.4991306 3 8.0566406 3 z M 7.7089844 5.5 L 10.580078 8.34375 C 7.5802181 11.73679 7.2878319 7.21687 3.4199219 9.75 L 7.7089844 5.5 z M 12.5 9 C 12.20812 10.06405 11.479022 10.976614 11.164062 11.708984 C 11.053853 11.926734 11 12.17332 11 12.4375 C 11 13.30312 11.669 14 12.5 14 C 13.331 14 14 13.30312 14 12.4375 C 14 12.17332 13.9227 11.926734 13.8125 11.708984 C 13.49754 10.976614 12.79187 10.06405 12.5 9 z "
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
    d="m10.5 1033.3622c-1.385 0-2.5 1.115-2.5 2.5v2.5l-5 5 6 6 7-7-3-3v-3.5c0-1.385-1.115-2.5-2.5-2.5m0 1c.831 0 1.5.669 1.5 1.5v2.5l-2-2-1 1v-1.5c0-.831.669-1.5 1.5-1.5m-.5 3.4141l4.535156 4.5371c-3.53535 4.0497-5.535933-1.9511-10.121094 1.0488l5.585938-5.5859m7.5 3.5859c0 0-1.5 2.6716-1.5 3.5 0 .8284.67157 1.5 1.5 1.5.82843 0 1.5-.6716 1.5-1.5 0-.8284-1.5-3.5-1.5-3.5z" transform="translate(0-1030.3622)"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
