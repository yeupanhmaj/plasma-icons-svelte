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
			<path class="ColorScheme-Text" d="m8 2-6 4.604 2.32 7.396h7.418l2.262-7.449zm0 1 5 3.793-1.885 6.207h-6.182l-1.934-6.164z" fill="currentColor"/>
    <path d="m4.5910936 13.530925c-0.0605468-0.101736-2.0888957-6.5473393-2.0886315-6.6371675 1.413e-4 -0.0480251 1.2272918-1.0186318 2.7270015-2.1569036 2.3727734-1.8009226 2.7448388-2.0584057 2.8661289-1.9834675 0.076661 0.0473649 1.3245949 0.9756543 2.7731855 2.0628656l2.633801 1.976748-0.142803 0.4672056c-0.07854 0.2569632-0.544891 1.777024-1.036334 3.3779134l-0.89353 2.910706-3.4025273 0.01942c-1.8713901 0.01068-3.4177211-0.0062-3.4362911-0.03732z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
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
			<path class="ColorScheme-Text" d="M 11,3 3.082,9.0757453 6,19 H 16 L 18.918,9.005803 Z M 11,4.3196667 17.598333,9.3251623 15,18 H 7 L 4.400347,9.381908 Z" fill="currentColor"/>
    <path d="m6.50138 18.216977c-0.0799-0.134257-2.756646-8.6403051-2.756298-8.7588484 1.87e-4 -0.063377 1.619617-1.3442544 3.598734-2.8463937 3.131269-2.3766176 3.622273-2.7164094 3.782335-2.617516 0.101166 0.062506 1.748024 1.2875385 3.65968 2.722295l3.475739 2.6086484-0.188452 0.6165557c-0.103647 0.339106-0.719075 2.34508-1.367616 4.45772l-1.179161 3.841161-4.490202 0.02563c-2.469611 0.01409-4.510253-0.0082-4.534759-0.04925z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{/if}
