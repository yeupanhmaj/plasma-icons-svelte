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
			<path fill="#9bd916" d="M2.498047 1.988281A.50005 .50005 0 0 0 2.150391 2.845703L3.428 4.123A5.999991 5.999991 0 0 0 2 8V14H14V8A5.999991 5.999991 0 0 0 12.582031 4.125L13.861 2.846A.50012 .50005 0 0 0 13.498047 1.988281 .50012 .50005 0 0 0 13.154297 2.138672L11.869 3.424A5.999991 5.999991 0 0 0 8 2 5.999991 5.999991 0 0 0 4.130859 3.412109L2.857 2.139A.50005 .50005 0 0 0 2.498047 1.988281M8 3A5 5 0 0 1 13 8H3A5 5 0 0 1 8 3M6 5A1 1 0 0 0 5 6 1 1 0 0 0 6 7 1 1 0 0 0 7 6 1 1 0 0 0 6 5M10 5A1 1 0 0 0 9 6 1 1 0 0 0 10 7 1 1 0 0 0 11 6 1 1 0 0 0 10 5M3 9H7V10H8V11H9V9H13V13H3zM8 11H7V12H8z"/>
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
			<path d="m3.4980469 2.9960938a0.50005 0.50005 0 0 0-0.3476563 0.8574218l1.859375 1.859375a8 8 0 0 0-2.0097656 5.2871094v8h16v-8a8 8 0 0 0-1.998047-5.2792969l1.859375-1.859375a0.50005 0.50005 0 0 0-0.357422-0.8613281 0.50005 0.50005 0 0 0-0.349609 0.1542969l-1.861328 1.8613281a8 8 0 0 0-5.292969-2.015625 8 8 0 0 0-5.2851562 2.0039062l-1.8574219-1.8574218a0.50005 0.50005 0 0 0-0.359375-0.1503906zm7.4101561 1.0039062a7 7 0 0 1 0.091797 0 7 7 0 0 1 4.587891 1.7207031 7 7 0 0 1 0.703125 0.7109375 7 7 0 0 1 1.708984 4.5683594h-14a7 7 0 0 1 1.7148438-4.5820312 7 7 0 0 1 0.6425781-0.6445313 7 7 0 0 1 0.0664062-0.0605469 7 7 0 0 1 4.4843749-1.7128906zm-2.908203 3a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm6 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-10 5h6v1h1v-1h7v6h-14zm7 1v1h1v-1zm0 1h-1v2h2v-1h-1z" fill="#9bd916"/>
		</svg>
	{:else if numericSize <= 48}
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
			<defs>
    <linearGradient id="linearGradient5" x1="4" x2="4" y1="30" y2="6" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff" stop-opacity="0" offset="0"/>
      <stop stop-color="#fff" stop-opacity="0.2" offset="1"/>
    </linearGradient>
  </defs>
<rect x="4" y="6" width="24" height="24" fill="#9bd916"/>
<rect x="4" y="29" width="24" height="1" opacity=".25"/>
<rect x="4" y="6" width="24" height="1" fill="#fff" opacity=".5"/>
<path d="m20 7v1h1v-1zm1 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v2h2v-1h-1z" fill="#fff" opacity=".75"/>
<path d="m6.498047 15.988281c-0.447077 0.0019-0.667176 0.544711-0.347656 0.857422l1.277343 1.277344c-0.919868 1.082549-1.425793 2.456367-1.427734 3.876953v6h12v-6c3.25e-4 -1.418684-0.502059-2.791591-1.417969-3.875l1.279297-1.279297c0.325295-0.317986 0.09148-0.869844-0.363281-0.857422-0.129762 0.0036-0.25303 0.05755-0.34375 0.150391l-1.285156 1.285156c-1.081048-0.916724-2.451734-1.421131-3.869141-1.423828-1.415933-5.8e-4 -2.78645 0.499613-3.869141 1.412109l-1.273437-1.273437c-0.09454-0.09665-0.224178-0.150904-0.359375-0.150391zm5.501953 1.011719c2.761424 0 5 2.238576 5 5v5h-10v-5c0-2.761424 2.238576-5 5-5zm-2 2c-0.552285 0-1 0.447715-1 1s0.447715 1 1 1 1-0.447715 1-1-0.447715-1-1-1zm4 0c-0.552285 0-1 0.447715-1 1s0.447715 1 1 1 1-0.447715 1-1-0.447715-1-1-1z" fill="#fff" opacity=".75"/>
<rect x="4" y="6" width="24" height="24" fill="url(#linearGradient5)"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs>
  <linearGradient id="linearGradient2" x1="32" x2="32" y1="11" y2="61" gradientUnits="userSpaceOnUse">
   <stop stop-color="#fff" stop-opacity=".2" offset="0"/>
   <stop stop-color="#fff" stop-opacity="0" offset="1"/>
  </linearGradient>
 </defs>
 <rect x="7" y="11" width="50" height="50" fill="#9bd916"/>
  <rect x="7" y="60" width="50" height="1" opacity=".25" />
  <rect x="7" y="11" width="50" height="1" fill="#fff" opacity=".5" />
  <path d="m22 39c-2.98896 7.5e-4 -5.84891 1.21778-7.92188 3.37109l-2.7246-2.72461c-0.0942-0.0974-0.2239-0.15234-0.35938-0.15234-0.4494 9e-5 -0.67059 0.54683-0.34766 0.85937l2.76954 2.76954c-1.5635 1.95111-2.41564 4.37667-2.41602 6.87695v7h22v-7c-4e-3 -2.4983-0.85795-4.92089-2.42188-6.86914l2.77735-2.77735c0.32293-0.31254 0.10175-0.85928-0.34766-0.85937-0.13548 0-0.26516 0.055-0.35937 0.15234l-2.73242 2.73242c-2.07022-2.15473-4.92794-3.37452-7.91602-3.3789zm0 1c5.52285 0 10 4.47715 10 10v6h-20v-6c0-5.52285 4.47715-10 10-10zm-4.5 5c-0.82843 0-1.5 0.67157-1.5 1.5s0.67157 1.5 1.5 1.5 1.5-0.67157 1.5-1.5-0.67157-1.5-1.5-1.5zm9 0c-0.82843 0-1.5 0.67157-1.5 1.5s0.67157 1.5 1.5 1.5 1.5-0.67157 1.5-1.5-0.67157-1.5-1.5-1.5z" fill="#fff" opacity=".75" />
 <rect x="7" y="11" width="50" height="50" fill="url(#linearGradient2)" />
 <path d="m40 12v2h2v-2h-2zm2 2v2h2v-2h-2zm0 2h-2v2h2v-2zm0 2v2h2v-2h-2zm0 2h-2v2h2v-2zm0 2v2h2v-2h-2zm0 2h-2v2h2v-2zm-2 3v4h1v4h2v-4h1v-4h-4zm1 1h2v2h-2v-2z" fill="#fff" opacity=".75"/>
		</svg>
	{/if}
