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

	{#if numericSize <= 27}
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
			<path fill="url(#a)" d="M3 3v16h16V3z"/>
  <path stroke="#fff" d="M9.5 9.5h-4v-4h4zm7 0h-4v-4h4zm-7 7h-4v-4h4zm7 0h-4v-4h4z"/>
  <path fill="#000" d="M3 18h16v1H3z" opacity=".15"/>
  <path fill="url(#b)" fill-rule="evenodd" d="m10 5 2 2v3h5V5l2 2v12H7l-2-2h5v-5H7l-2-2h5zm2 12v-5h5v5z" clip-rule="evenodd" opacity=".2"/>
  <defs>
    <linearGradient id="a" x1="2.577" x2="18.335" y1="2.579" y2="18.815" gradientUnits="userSpaceOnUse">
      <stop stop-color="#21C9FB"/>
      <stop offset="1" stop-color="#1A86F2"/>
    </linearGradient>
    <linearGradient id="b" x1="3.444" x2="19" y1="3.444" y2="19" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset="1" stop-opacity="0"/>
    </linearGradient>
  </defs>
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
			<defs>
        <linearGradient id="b" x1="-41.259998" x2="-2.994" y1="-.88300002" y2="37.956001" gradientTransform="matrix(.73180945 0 0 .72091894 416.0252 517.69779)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#21c9fb" offset="0"/>
            <stop stop-color="#1a86f2" offset="1"/>
        </linearGradient>
        <linearGradient id="a" x1="4" x2="44" y1="4" y2="44" gradientTransform="matrix(.69444447 0 0 .69444447 384.01587 515.24246)" gradientUnits="userSpaceOnUse">
            <stop offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
    </defs>
    <g transform="translate(-384.57143 -515.798)">
        <path d="m386.57143 517.798v28h28v-28z" fill="url(#b)" stroke-linejoin="bevel" stroke-width="1.4"/>
        <path d="m389.57143 542.798 2.77778 3h22.22222v-22l-3-3v10h-10v-8l-2-2v10h-10l2 2h8v10z" fill="url(#a)" fill-rule="evenodd" opacity=".2"/>
        <rect x="386.57144" y="544.79797" width="27.999977" height="1" opacity=".15"/>
        <g fill="#fff">
            <path d="m389.57143 520.798v10h10v-10zm1 1h8v8h-8z"/>
            <path d="m401.57143 520.798v10h10v-10zm1 1h8v8h-8z"/>
            <path d="m389.57143 532.798v10h10v-10zm1 1h8v8h-8z"/>
            <path d="m401.57143 532.798v10h10v-10zm1 1h8v8h-8z"/>
        </g>
    </g>
		</svg>
	{/if}
