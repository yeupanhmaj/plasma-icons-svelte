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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M 5,3 V 4 H 7 V 5.0507812 C 4.7620407,5.3045268 3,7.1975143 3,9.5 c 0,2.303147 1.7630747,4.196354 4.0019531,4.449219 V 12.951172 C 5.3063982,12.708034 4,11.262815 4,9.5 4,7.5670034 5.5670034,6 7.5,6 c 1.7609221,0 3.196275,1.3070068 3.441406,3 h 1.007813 C 11.84867,8.1405352 11.514253,7.3551154 10.994141,6.7128906 L 11.75,5.9570312 l 0.396484,0.3964844 0.707032,-0.7070312 -1.5,-1.5 L 10.646484,4.8535156 11.042969,5.25 10.291016,6.0019531 C 9.6449907,5.4911251 8.858964,5.1481728 8,5.0507812 V 4 h 2 V 3 Z m 2,8 v 1 h 5 v -1 z"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" d="m7 3v1h3v2.0253906c-3.345314 0.2580024-6 3.065482-6 6.4746094 0 3.409127 2.654686 6.216607 6 6.474609v-1c-2.8029736-0.252886-5-2.605785-5-5.474609 0-3.0375661 2.4624339-5.5 5.5-5.5 2.868824 0 5.221723 2.1970264 5.474609 5h1.001953c-0.10969-1.413855-0.675776-2.7011564-1.550781-3.71875l1.076172-1.0761719 0.798828 0.7949219 0.705078-0.7089844-2.298828-2.2890625-0.705078 0.7089844 0.791016 0.7890625-1.074219 1.0742188c-1.018652-0.8721326-2.305512-1.4398343-3.71875-1.5488282v-2.0253906h3v-1h-7zm3 12v1h7v-1h-7z" class="ColorScheme-Text"/>
		</svg>
	{/if}
