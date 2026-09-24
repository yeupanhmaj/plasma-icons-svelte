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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M 5,3 V 4 H 7 V 5.0507812 C 4.7620407,5.3045267 3,7.1975144 3,9.5 3,11.973437 5.0265633,14 7.5,14 9.973437,14 12,11.973437 12,9.5 12,8.4409052 11.614599,7.4790199 10.994141,6.7128906 L 11.75,5.9570312 l 0.396484,0.3964844 0.707032,-0.7070312 -1.5,-1.5 L 10.646484,4.8535156 11.042969,5.25 10.291016,6.0019531 C 9.644991,5.4911251 8.858964,5.1481728 8,5.0507812 V 4 h 2 V 3 Z M 7.5,6 C 9.432997,6 11,7.5670034 11,9.5 11,11.432997 9.432997,13 7.5,13 5.5670034,13 4,11.432997 4,9.5 4,7.5670034 5.5670034,6 7.5,6 Z"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" d="m7 3v1h3v2.0253906c-3.345314 0.2580024-6 3.065482-6 6.4746094 0 3.578006 2.9219938 6.5 6.5 6.5 3.578006 0 6.5-2.921994 6.5-6.5 0-1.609925-0.597018-3.0823066-1.574219-4.21875l1.076172-1.0761719 0.798828 0.7949219 0.705078-0.7089844-2.298828-2.2890625-0.705078 0.7089844 0.791016 0.7890625-1.074219 1.0742188c-1.018652-0.8721326-2.305512-1.4398343-3.71875-1.5488282v-2.0253906h3v-1h-7zm3.5 4c3.037566 0 5.5 2.4624339 5.5 5.5 0 3.037566-2.462434 5.5-5.5 5.5-3.0375661 0-5.5-2.462434-5.5-5.5 0-3.0375661 2.4624339-5.5 5.5-5.5z" class="ColorScheme-Text"/>
		</svg>
	{/if}
