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
			<circle cx="9.148" cy="2.5" r="0"/>
    <path d="m8 2a1 1 0 0 0-1 1 1 1 0 0 0 0.0136719 0.1699219 3 3 0 0 0-2.0136719 2.8300781c0 1.8678453-0.6644936 2.6644936-2 4v1h10v-1c-1.335506-1.3355064-2-2.1321547-2-4a3 3 0 0 0-2.015625-2.8300781 1 1 0 0 0 0.015625-0.1699219 1 1 0 0 0-1-1zm0 2a2 2 0 0 1 2 2c0 1.7602592 0.64782 2.8885679 1.638672 4h-1.638672-4-1.6386719c0.9908518-1.1114321 1.6386719-2.2397408 1.6386719-4a2 2 0 0 1 2-2zm-1.4121094 8a1.5 1.5 0 0 0-0.0878906 0.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-0.0878906-0.5h-2.8242188z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="m10.269531 17a2 2 0 0 0-0.2695312 1 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-0.271484-1zm1.7304688-13a1 1 0 0 0-1 1 1 1 0 0 0 0.0098 0.1289062 3.9999999 3.9999999 0 0 0-3.0098 3.8710938c0 3-1 4-3 6v1h14v-1c-2-2-3-3-3-6a3.9999999 3.9999999 0 0 0-3.009766-3.8710938 1 1 0 0 0 0.009766-0.1289062 1 1 0 0 0-1-1zm0 2a3 3 0 0 1 3 3c0 3 0.585938 4 2.585938 6h-11.171876c2-2 2.5859375-3 2.5859375-6a3 3 0 0 1 3-3z" class="ColorScheme-Text" fill="currentColor" fill-rule="evenodd"/>
		</svg>
	{/if}
