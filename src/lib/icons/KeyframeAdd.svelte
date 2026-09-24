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
			<path class="ColorScheme-Text" d="m5 3v1h2v1.0507812c-2.2379593 0.2537456-4 2.1467331-4 4.4492188 0 2.303147 1.7630747 4.196354 4.0019531 4.449219v-0.998047c-1.6955549-0.243138-3.0019531-1.688357-3.0019531-3.451172 0-1.9329966 1.5670034-3.5 3.5-3.5 1.7609221 0 3.196275 1.3070068 3.441406 3h1.007813c-0.100549-0.8594648-0.434966-1.6448846-0.955078-2.2871094l0.755859-0.7558594 0.396484 0.3964844 0.707032-0.7070312-1.5-1.5-0.707032 0.7070312 0.396485 0.3964844-0.751953 0.7519531c-0.6460253-0.510828-1.432052-0.8537803-2.291016-0.9511719v-1.0507812h2v-1zm4 6v2h-2v1h2v2h1v-2h2v-1h-2v-2z" fill="currentColor"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" d="m7 3v1h3v2.0253906c-3.345314 0.2580024-6 3.065482-6 6.4746094 0 3.409127 2.654686 6.216607 6 6.474609v-1c-2.8029736-0.252886-5-2.605785-5-5.474609 0-3.0375661 2.4624339-5.5 5.5-5.5 2.868824 0 5.221723 2.1970264 5.474609 5h1.001953c-0.10969-1.413855-0.675776-2.7011564-1.550781-3.71875l1.076172-1.0761719 0.798828 0.7949219 0.705078-0.7089844-2.298828-2.2890625-0.705078 0.7089844 0.791016 0.7890625-1.074219 1.0742188c-1.018652-0.8721326-2.305512-1.4398343-3.71875-1.5488282v-2.0253906h3v-1h-7zm6 9v3h-3v1h3v3h1v-3h3v-1h-3v-3h-1z" class="ColorScheme-Text"/>
		</svg>
	{/if}
