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
			<linearGradient id="a" gradientTransform="matrix(.64285714 0 0 .64285714 -246.51021 -330.87014)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.2755102 0 0 .2755102 -96.79009 -138.0872)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#7cbaf8"/><stop offset="1" stop-color="#f4fcff"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="9.071437" x2="18.071437" y1="3.864211" y2="12.864211"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><g stroke-width=".642857"><path d="m20 2v13h-5v5l-5-5h-8v-13z" fill="url(#a)"/><path d="m18 4-9 7 6 6v-2h5v-9z" fill="url(#c)" fill-rule="evenodd" opacity=".2"/><path d="m18 4 1 1v7l-4 .00001v2l-2-2.00001h-3l-1-1v-7z" fill="#280000" opacity=".1"/><path d="m18 4v7l-3 .00001v2l-2-2.00001h-4v-7z" fill="url(#b)"/><path d="m2 14v1h8l5 5v-1l-5-5zm13 0v1h5v-1z" fill="#3c0000" opacity=".2"/></g>
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
			<defs id="defs5455">
  <linearGradient xlink:href="#linearGradient4143" id="linearGradient4327" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient id="linearGradient4143">
   <stop style="stop-color:#197cf1" id="stop4145"/>
   <stop offset="1" style="stop-color:#20bcfa" id="stop4147"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4290" id="linearGradient4783" y1="545.79797" y2="517.79797" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(0.42857143 0 0 0.42857143 232.89796 299.88457)"/>
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4227" id="linearGradient4996" y1="516.69788" x1="401.57144" y2="530.69788" x2="415.57144" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -388.57143 -511.798)"/>
  <linearGradient id="linearGradient4290">
   <stop style="stop-color:#7cbaf8" id="stop4292"/>
   <stop offset="1" style="stop-color:#f4fcff" id="stop4294"/>
  </linearGradient>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <path style="fill:url(#linearGradient4327)" id="rect4304" d="m 414.57143,517.798 0,21 -7,0 0,7 -7,-7 -14,0 0,-21 28,0 z"/>
  <path style="fill:url(#linearGradient4996);opacity:0.2;fill-rule:evenodd" id="path4905" d="M 26.900391 4.9003906 L 25 15.900391 L 22 15.900391 L 19 15.900391 L 13 15.900391 L 22 24.900391 L 23 25.900391 L 23 23 L 30 23 L 30 8 L 27 5 L 26.900391 4.9003906 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <path style="fill:url(#linearGradient4783)" id="path4781" d="m 411.57143,520.798 0,10.9 -5,0 0,3 -3,-3 -6,0 0,-10.9 z"/>
 </g>
		</svg>
	{/if}
