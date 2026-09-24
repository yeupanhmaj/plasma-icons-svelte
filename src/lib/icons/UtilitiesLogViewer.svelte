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
			<linearGradient id="b" gradientTransform="matrix(1 0 0 .99 -386.57 -492.862)" gradientUnits="userSpaceOnUse" x1="386.57" x2="386.57" y1="527.133" y2="504.911"><stop offset="0" stop-color="#1d1e1e"/><stop offset="1" stop-color="#44484c"/></linearGradient><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-2" x2="-2" y1="30" y2="2"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><path d="M2 2v28h28V2z" fill="url(#a)"/><path d="M2 7h28v20H2z" fill="url(#b)"/><path d="M2 2h28v4H2z" fill="#566069"/><path d="M2 6h28v1H2z" fill="#3daee9"/><rect fill="#eff0f1" height="2" rx="1" width="2" x="27" y="3"/><circle cx="7.5" cy="21.5" fill="#eff0f1" r="3.5"/><circle cx="7.5" cy="21.5" fill="#3daefd" r="2.5"/><path d="M13 11h2v1h-2zm3 0h3v1h-3z" fill="#da4453"/><path d="M22 11h3v1h-3zm0 2h6v1h-6zm4-2h2v1h-2z" fill="#95a5a6"/><path d="M13 13h4v1h-4zm5 0h2v1h-2z" fill="#bdc3c7"/><path d="M13 20h2v1h-2zm3 0h3v1h-3z" fill="#3daefd"/><path d="M22 20h4v1h-4z" fill="#95a5a6"/><path d="M13 22h3v1h-3z" fill="#bdc3c7"/><path d="M22 22h3v1h-3zm4 0h1v1h-1zm1-2h1v1h-1z" fill="#95a5a6"/><g fill-rule="evenodd"><path d="M7.5 8.92l-3.501 1.467s.416 1.902.867 3c.225.551.5 1.121.889 1.617s.965.99 1.745.99 1.354-.494 1.743-.99.664-1.066.889-1.617c.451-1.102.869-3 .869-3z" fill="#eff0f1"/><path d="M5 11l2.5-1 2.5 1s-.928 4-2.5 4S5 11 5 11" fill="#da4453"/></g><path d="M2 29h28v1H2z" fill="#99a1a7"/>
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
  <linearGradient id="a" y1="543.8" y2="503.8" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 .9 0 54.38)">
   <stop stop-color="#1d1e1e"/>
   <stop offset="1" stop-color="#44484c"/>
  </linearGradient>
  <linearGradient id="b" y1="44" y2="4" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#c6cdd1"/>
   <stop offset="1" stop-color="#e0e5e7"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-499.8)">
  <path stroke-opacity=".55" fill="url(#b)" stroke-width="2.8" d="m4 4v40h40v-40z" transform="translate(384.57 499.8)"/>
  <rect width="40" x="388.57" y="542.8" fill="#99a1a7" height="1"/>
  <path fill="#eff0f1" fill-rule="evenodd" d="m402.57 514.8v15l12-7.5z"/>
  <rect width="40" x="388.57" y="508.8" fill="url(#a)" rx="0" height="31"/>
  <g transform="translate(-51-7)">
   <rect width="40" x="439.57" y="510.8" fill="#566069" height="4"/>
   <rect width="40" x="439.57" y="514.8" fill="#3daee9" height="1"/>
   <rect width="2" x="476.57" y="511.8" fill="#eff0f1" rx="1" height="2"/>
  </g>
  <g stroke-linejoin="round" stroke-linecap="round" color="#000000" stroke-width="3">
   <circle fill="#eff0f1" cx="395.07" cy="533.3" r="3.5"/>
   <circle fill="#3daefd" cx="395.07" cy="533.3" r="2.5"/>
   <circle fill="#eff0f1" cx="395.07" cy="524.3" r="3.5"/>
   <circle fill="#3daefd" cx="395.07" cy="524.3" r="2.5"/>
  </g>
  <g fill="#da4453">
   <rect width="2" x="399.57" y="513.8" height="1"/>
   <rect width="3" x="402.57" y="513.8" height="1"/>
  </g>
  <g fill="#95a5a6">
   <rect width="3" x="408.57" y="513.8" height="1"/>
   <rect width="6" x="413.57" y="513.8" height="1"/>
   <rect width="4" x="420.57" y="513.8" height="1"/>
  </g>
  <g fill="#bdc3c7">
   <rect width="4" x="399.57" y="515.8" height="1"/>
   <rect width="2" x="404.57" y="515.8" height="1"/>
  </g>
  <rect width="8" x="408.57" y="515.8" fill="#95a5a6" height="1"/>
  <g fill="#3daefd">
   <rect width="2" x="399.57" y="522.8" height="1"/>
   <rect width="3" x="402.57" y="522.8" height="1"/>
  </g>
  <g fill="#95a5a6">
   <rect width="4" x="408.57" y="522.8" height="1"/>
   <rect width="4" x="414.57" y="522.8" height="1"/>
   <rect width="5" x="419.57" y="522.8" height="1"/>
  </g>
  <rect width="3" x="399.57" y="524.8" fill="#bdc3c7" height="1"/>
  <g fill="#95a5a6">
   <rect width="3" x="408.57" y="524.8" height="1"/>
   <rect width="1" x="412.57" y="524.8" height="1"/>
   <rect width="5" x="414.57" y="524.8" height="1"/>
   <g transform="scale(-1 1)">
    <rect width="2" x="-419.57" y="533.8" height="1"/>
    <rect width="8" x="-416.57" y="533.8" height="1"/>
   </g>
  </g>
  <g transform="scale(-1 1)">
   <rect width="7" x="-406.57" y="533.8" fill="#bdc3c7" height="1"/>
   <g fill="#95a5a6">
    <rect width="2" x="-424.57" y="531.8" height="1"/>
    <rect width="3" x="-421.57" y="531.8" height="1"/>
    <rect width="9" x="-417.57" y="531.8" height="1"/>
   </g>
   <rect width="5" x="-404.57" y="531.8" fill="#3daefd" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path fill="#eff0f1" color-rendering="auto" shape-rendering="auto" color-interpolation-filters="linearRGB" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" stroke-width="2" d="m395.07 511.72l-3.501 1.467c0 0 .416 1.902.867 3 .225.551.5 1.121.889 1.617.389.496.965.99 1.745.99.78 0 1.354-.494 1.743-.99.389-.496.664-1.066.889-1.617.451-1.102.869-3 .869-3z"/>
   <path fill="#da4453" d="m392.57 513.8l2.5-1 2.5 1c0 0-.928 4-2.5 4-1.572 0-2.5-4-2.5-4"/>
  </g>
 </g>
		</svg>
	{/if}
