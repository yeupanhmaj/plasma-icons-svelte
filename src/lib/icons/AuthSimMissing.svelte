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
			<path d="m4.1210938 2 2.8789062 2.8789062v-.8789062h2v2h-.8789062l1 1h1.1718752l1 1h.707031v1h-.707031l-.085938.0859375.707031.7070313.085938-.0859376v.171875l1 .9999998v-6.5859372l-2.292969-2.2929688zm5.8789062 2h1c.554 0 1 .446 1 1v2.2929688l-1.292969-1.2929688h-.707031zm-7 1.1210938v8.8789062h8.878906l-1-1h-.878906v-.878906l-1-1v1.878906h-2v-2h1.8789062l-1-1h-2.171875l-1-1h-.7070312v-1h.7070312l.5859376-.5859375-.7070313-.7070313-.5859375.5859376v-1.171875zm1 4.5859374 1.2929688 1.2929688h.7070312v2h-1c-.554 0-1-.446-1-1z" class="ColorScheme-Text" fill="currentColor"/>
    <path d="m2.5 1.7929687-.7070313.7070313 11.7070313 11.707031.707031-.707031z" class="ColorScheme-NegativeText" fill="currentColor" stroke-linecap="square" stroke-miterlimit="0"/>
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
			<path d="m5.1210938 3 2 2h.8789062v.8789062l1 1v-1.8789062h4v3h-2.878906l1 1h3.171875l1 1h.707031v3h-.707031l-.085938.085938.707031.707031.085938-.085938v.171875l1 1v-9.5859372l-2.292969-2.2929688zm8.8789062 2h1c.554 0 1 .446 1 1v3.2929688l-1.292969-1.2929688h-.707031zm-9 2.1210938v11.8789062h11.878906l-1.24414-1.244141c-.173646.145663-.38935.244141-.634766.244141h-1v-1.878906l-1-1v2.878906h-4v-3h3.878906l-1-1h-4.1718748l-1-1h-.7070312v-3h.7070312l.5859376-.5859375-.7070313-.7070313-.5859375.5859376v-1.171875zm1 6.5859372 1.2929688 1.292969h.7070312v3h-1c-.554 0-1-.446-1-1z" class="ColorScheme-Text" fill="currentColor"/>
    <path d="m3.5 2.7929688-.7070312.7070312 15.353516 15.353516.353516.353515.707031-.707031-.353515-.353516-15-15z" class="ColorScheme-NegativeText" fill="currentColor" stroke-linecap="square" stroke-miterlimit="0"/>
		</svg>
	{/if}
