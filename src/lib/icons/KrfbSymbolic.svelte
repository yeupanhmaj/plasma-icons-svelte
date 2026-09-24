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
			<g transform="matrix(.66667 0 0 .66667 .33332 0)">
  <g transform="matrix(.36075 0 0 .36075 7.5317 5.7817)" fill="currentColor" class="ColorScheme-Text" stroke-width="4.158">
   <circle cx="16" cy="5" r="2.079"/>
   <circle class="ColorScheme-Text" cx="11.5" cy="7.5" r=".51975"/>
   <circle cx="9.5" cy="8.5" r=".51975"/>
   <ellipse cx="6" cy="11" rx="2" ry="2.079"/>
   <circle cx="9.5" cy="13.5" r=".51975"/>
   <circle cx="11.5" cy="14.5" r=".51975"/>
   <circle cx="16" cy="17" r="2.079"/>
  </g>
  <g>
   <path d="m19 4.5h-15v12l6 1e-6v1.5h-3v1.5h9v-1.5h-3v-1.5l6-1e-6 -1e-6 -12-1.5 1.5v7.5l-12 1e-6v-7.5l12 1e-7z" fill="currentColor" class="ColorScheme-Text" stroke-width="0"/>
  </g>
 </g>
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
			<g transform="matrix(.91667 0 0 .91667 .091957 .22505)">
  <g transform="translate(1,1)" stroke-width="1.0909"></g>
  <g transform="matrix(.46324 0 0 .46324 6.804 4.477)" fill="currentColor" class="ColorScheme-Text" stroke-width="2.355">
   <circle cx="16" cy="5" r="2.3549"/>
   <circle cx="11.5" cy="7.5" r=".58874"/>
   <circle cx="9.5" cy="8.5" r=".58874"/>
   <circle cx="6" cy="11" r="2.3549"/>
   <circle cx="9.5" cy="13.5" r=".58874"/>
   <circle cx="11.5" cy="14.5" r=".58874"/>
   <circle cx="16" cy="17" r="2.3549"/>
  </g>
 </g>
 <path d="m4 4h14l-1 1h-12l-2e-7 8h12v-8l1-1-2e-6 12-5-1e-6v2l3 2e-6v1h-10v-1l3-2e-6v-2l-5 1e-6z" fill="currentColor" class="ColorScheme-Text" stroke-width="0"/>
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
			<g id="preferences-desktop-display-randr" class="ColorScheme-Text" fill="currentColor" transform="translate(-26,10)">
        <rect id="rect3832-6" x="26" y="-10" width="32" height="32" fill-opacity="0"/>
        <path id="rect7235-7" d="m36.011 15h11.978l0.011249 2h-11.978zm3.9888-2h4v2h-4zm-9-18v18h22v-18zm1 1h20v14h-20z" stroke-width="0"/>
        <path id="path1" d="m20.581-5.6358c-0.61463 0-1.1129 0.49826-1.1129 1.1129 0 0.61463 0.49826 1.1129 1.1129 1.1129 0.61463 0 1.1129-0.49826 1.1129-1.1129 0-0.61463-0.49826-1.1129-1.1129-1.1129zm-2.2258 2.2258c-0.20488 0-0.37096 0.16609-0.37096 0.37096 0 0.20488 0.16609 0.37096 0.37096 0.37096 0.20488 0 0.37096-0.16609 0.37096-0.37096 0-0.20488-0.16609-0.37096-0.37096-0.37096zm-1.4839 0.74193c-0.20488 0-0.37096 0.16609-0.37096 0.37096 0 0.20488 0.16609 0.37096 0.37096 0.37096s0.37096-0.16609 0.37096-0.37096c0-0.20488-0.16609-0.37096-0.37096-0.37096zm-2.2258 0.74193c-0.61463 0-1.1129 0.49826-1.1129 1.1129 0 0.61463 0.49826 1.1129 1.1129 1.1129 0.61463 0 1.1129-0.49826 1.1129-1.1129 0-0.61463-0.49826-1.1129-1.1129-1.1129zm2.2258 2.2258c-0.20488 0-0.37096 0.16609-0.37096 0.37096 0 0.20488 0.16609 0.37096 0.37096 0.37096s0.37096-0.16609 0.37096-0.37096c0-0.20488-0.16609-0.37096-0.37096-0.37096zm1.4839 0.74193c-0.20488 0-0.37096 0.16609-0.37096 0.37096 0 0.20488 0.16609 0.37096 0.37096 0.37096 0.20488 0 0.37096-0.16609 0.37096-0.37096 0-0.20488-0.16609-0.37096-0.37096-0.37096zm2.2258 0c-0.61463 0-1.1129 0.49826-1.1129 1.1129 0 0.61463 0.49826 1.1129 1.1129 1.1129 0.61463 0 1.1129-0.49826 1.1129-1.1129 0-0.61463-0.49826-1.1129-1.1129-1.1129z" stroke-width="0"/>
    </g>
    <g id="g11" transform="matrix(.91042 0 0 .91042 1.3158 .80502)" fill="currentColor" class="ColorScheme-Text" stroke-width="1.0984">
        <circle id="circle1" cx="19.992" cy="8.895" r="1.5"/>
        <circle id="circle2" cx="16.992" cy="10.895" r=".5"/>
        <circle id="circle3" cx="14.992" cy="11.895" r=".5"/>
        <circle id="circle4" cx="11.992" cy="13.895" r="1.5"/>
        <circle id="circle5" cx="14.992" cy="15.895" r=".5"/>
        <circle id="circle6" cx="16.992" cy="16.895" r=".5"/>
        <circle id="circle7" cx="19.992" cy="17.895" r="1.5"/>
    </g>
		</svg>
	{/if}
