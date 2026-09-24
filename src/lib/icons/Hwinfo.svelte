<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 32
	);
</script>

	{#if numericSize <= 40}
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
			<linearGradient id="e" gradientUnits="userSpaceOnUse" x1="392.571" x2="406.571" xlink:href="#a" y1="539.798" y2="553.798"/><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="391.571" x2="397.571" xlink:href="#b" y1="537.798" y2="543.798"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="378.571" x2="378.571" y1="553.798" y2="525.798"><stop offset="0" stop-color="#63984b"/><stop offset="1" stop-color="#8fc278"/></linearGradient><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="402.571" x2="402.571" y1="549.798" y2="529.798"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="402.571" x2="406.571" xlink:href="#b" y1="529.798" y2="533.798"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-50" x2="-22.15"><stop offset="0" stop-color="#7cbaf8"/><stop offset="1" stop-color="#f4fcff"/></linearGradient><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="18" x2="18" xlink:href="#c" y1="24" y2="8"/><linearGradient id="i" gradientUnits="userSpaceOnUse" x1="399.571" x2="399.571" xlink:href="#c" y1="547.798" y2="531.798"/><linearGradient id="j" gradientUnits="userSpaceOnUse" x1="398.571" x2="398.571" xlink:href="#c" y1="547.798" y2="531.798"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="802.643" x2="816.643" y1="36.236" y2="50.236"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="M378.571 530.798v-5h28v28h-28v-20l2-1z" fill="url(#d)" transform="translate(-376.571 -523.798)"/><path d="M29 27l-2 2h2z" fill="#e6ea97" fill-rule="evenodd"/><path d="M382.571 549.798l4 4h20v-20l-4-4z" fill="url(#e)" opacity=".2" transform="translate(-376.571 -523.798)"/><path d="M382.571 529.798h20v20h-20z" fill="url(#f)" transform="translate(-376.571 -523.798)"/><path d="M6 27h1v1H6zm1 1h1v1H7zm1-1h1v1H8zm1 1h1v1H9zm1-1h1v1h-1zm1 1h1v1h-1zm1-1h1v1h-1zm13 0h1v1h-1zm-1 1h1v1h-1zm-1-1h1v1h-1zm-1 1h1v1h-1zm-5 0h1v1h-1zm-1-1h1v1h-1zm-1 1h1v1h-1zm-1-1h1v1h-1zm-1 1h1v1h-1zM28 7h1v1h-1zm-1 1h1v1h-1zm1 1h1v1h-1zm-1 1h1v1h-1zm1 1h1v1h-1zm-1 1h1v1h-1zm1 1h1v1h-1zm-1 3h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1z"/><path d="M6 25h20v1H6z" fill="#1c5593" fill-rule="evenodd"/><path d="M16 8a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm0 1a7.09 7.09 0 0 1 4.95 2.05C22.244 12.348 23 14.168 23 16s-.755 3.653-2.05 4.95S17.832 23 16 23s-3.653-.755-4.95-2.05C9.756 19.652 9 17.832 9 16s.755-3.653 2.05-4.95A7.084 7.084 0 0 1 16 9z" fill="url(#g)"/><path d="M393.571 534.798l9 9v5h-7l-4-4v-6l1-1-1-1z" fill="url(#h)" opacity=".2" transform="translate(-376.571 -523.798)"/><path d="M391.571 534.798h2v2h-2z" fill="url(#i)" transform="translate(-376.571 -523.798)"/><path d="M391.571 537.798h2v7h-2z" fill="url(#j)" transform="translate(-376.571 -523.798)"/><path d="M2 29h28v1H2z" fill="#4a7937"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs>
  <linearGradient id="a" y1="44" y2="4" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(0 1004.36)">
   <stop stop-color="#63984b"/>
   <stop offset="1" stop-color="#8fc278"/>
  </linearGradient>
  <linearGradient id="b" y1="11" x1="17" y2="41" gradientUnits="userSpaceOnUse" x2="44" gradientTransform="translate(0 1004.36)">
   <stop/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="c" y1="1003.36" y2="1027.36" x1="-93" x2="-70" gradientUnits="userSpaceOnUse">
   <stop stop-color="#292c2f"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="d" x1="-50" x2="-22.15" gradientUnits="userSpaceOnUse">
   <stop stop-color="#7cbaf8"/>
   <stop offset="1" stop-color="#f4fcff"/>
  </linearGradient>
  <linearGradient xlink:href="#d" id="e" y1="1040.36" y2="1014.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-.148)"/>
  <linearGradient id="f" y1="1043.36" y2="1012.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(60)">
   <stop stop-color="#197cf1"/>
   <stop offset="1" stop-color="#20bcfa"/>
  </linearGradient>
  <linearGradient xlink:href="#d" id="g" y1="37" y2="10" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 1004.36)"/>
 </defs>
 <g transform="translate(0-1004.36)">
  <g fill-rule="evenodd">
   <path fill="#dce269" d="m4 1008.36v9l3 2-3 2v27h40v-40z"/>
   <path fill="url(#a)" d="m4 1008.36v8l3 2-3 2v27h40v-39z"/>
  </g>
  <g color="#000000">
   <path d="m9 1044.36v1h1v-1zm1 1v1h1v-1zm1 0h1v-1h-1zm1 0v1h1v-1zm1 0h1v-1h-1zm1 0v1h1v-1zm1 0h1v-1h-1zm1 0v1h1v-1zm1 0h1v-1h-1zm1 0v1h1v-1zm1 0h1v-1h-1zm1 0v1h1v-1zm1 0h1v-1h-1zm1 0v1h1v-1zm1 0h1v-1h-1zm1 0v1h1v-1z"/>
   <path d="m35 1044.36v1h1v-1zm1 1v1h1v-1zm1 0h1v-1h-1zm1 0v1h1v-1zm1 0h1v-1h-1zm-4 0h-1v1h1z"/>
  </g>
  <path fill="#e6ea97" fill-rule="evenodd" d="m43 1044.36l-2 2h2z"/>
  <path color="#000000" d="m42 1013.36v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1z"/>
  <g fill-rule="evenodd">
   <path opacity=".2" fill="url(#b)" d="m40 1012.36v31h-32l4.584 5h31.416v-32z"/>
   <rect width="32" x="8" y="1012.36" fill="url(#f)" height="31"/>
   <rect width="32" x="8" y="1042.36" fill="#1c5593" height="1"/>
   <path opacity=".2" fill="url(#c)" d="m-80 1007.36h-4l4 4v9h-4l5 5h11v-10l-12-12z" transform="translate(106 16)"/>
   <g fill="url(#e)" transform="translate(60.15)">
    <path d="m-38.15 1019.36v4h4v-4z"/>
    <path d="m-38.15 1025.36v11h4v-11z"/>
   </g>
  </g>
  <path fill="url(#g)" stroke-linejoin="round" stroke-width=".5" d="m24 1014.3622a14 13.5 0 0 0 -14 13.5 14 13.5 0 0 0 14 13.5 14 13.5 0 0 0 14 -13.5 14 13.5 0 0 0 -14 -13.5m0 1.9277a12 11.571428 0 0 1 12 11.5723 12 11.571428 0 0 1 -12 11.5723 12 11.571428 0 0 1 -12 -11.5723 12 11.571428 0 0 1 12 -11.5723"/>
 </g>
		</svg>
	{/if}
