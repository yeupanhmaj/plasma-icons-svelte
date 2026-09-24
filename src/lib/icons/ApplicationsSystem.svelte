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
			<path fill="url(#a)" d="M8.546 15.924a5.524 5.524 0 0 1-2.47-2.47l-1.436 2.22a.25.25 0 0 0 .033.313l1.34 1.34a.25.25 0 0 0 .313.033z"/>
  <path fill="url(#b)" fill-rule="evenodd" d="m9.254 16.217.554 2.585a.25.25 0 0 0 .244.198h1.896a.25.25 0 0 0 .244-.198l.554-2.585.708-.293 2.22 1.436a.25.25 0 0 0 .313-.033l1.34-1.34a.25.25 0 0 0 .033-.313l-1.436-2.22.293-.708 2.585-.554a.25.25 0 0 0 .198-.244v-1.896a.25.25 0 0 0-.198-.244l-2.585-.554-.293-.708 1.436-2.22a.25.25 0 0 0-.033-.313l-1.34-1.34a.25.25 0 0 0-.313-.033l-2.22 1.436-.708-.293-.554-2.585A.25.25 0 0 0 11.948 3h-1.896a.25.25 0 0 0-.244.198l-.554 2.585-.708.293-2.22-1.436a.25.25 0 0 0-.313.033l-1.34 1.34a.25.25 0 0 0-.033.313l1.436 2.22-.293.708-2.585.554a.25.25 0 0 0-.198.244v1.896c0 .118.082.22.198.244l2.585.554.293.708a5.524 5.524 0 0 0 2.47 2.47zM8 11l3 3 3-3-3-3z" clip-rule="evenodd"/>
  <g opacity=".4">
    <path fill="url(#c)" d="m12.517 5.712-.325-1.514A.25.25 0 0 0 11.948 4h-1.896a.25.25 0 0 0-.244.198l-.325 1.514a5.454 5.454 0 0 0-.23.071l.555-2.585A.25.25 0 0 1 10.052 3h1.896a.25.25 0 0 1 .244.198l.554 2.585a5.456 5.456 0 0 0-.23-.071"/>
    <path fill="url(#d)" d="M7.751 6.562c.25-.183.516-.346.795-.486L6.326 4.64a.25.25 0 0 0-.313.033l-1.34 1.34a.25.25 0 0 0-.033.313l.283.437 1.09-1.09a.25.25 0 0 1 .313-.033z"/>
    <path fill="url(#e)" d="M3 11.052a.25.25 0 0 1 .198-.244l2.345-.503c.046-.363.127-.714.24-1.051l-2.585.554a.25.25 0 0 0-.198.244z"/>
    <path fill="url(#f)" fill-rule="evenodd" d="m4.64 15.674 1.171-1.81.265.59-1.153 1.783-.25-.25a.25.25 0 0 1-.033-.313" clip-rule="evenodd"/>
    <path fill="url(#g)" fill-rule="evenodd" d="m15.043 6.048.631-.408a.25.25 0 0 1 .313.033l1.09 1.09.283-.437a.25.25 0 0 0-.033-.313l-1.34-1.34a.25.25 0 0 0-.313-.033l-1.238.801z" clip-rule="evenodd"/>
  </g>
  <path fill="#fff" d="M16.477 11.5a5.5 5.5 0 1 0-10.955 0 5.5 5.5 0 0 1 10.955 0" opacity=".2"/>
  <path fill="url(#h)" d="M8.546 15.924a5.492 5.492 0 0 1-1.435-1.035l1.192 1.192z"/>
  <path fill="url(#i)" d="m11.222 19-1.746-1.746-.222-1.037a5.484 5.484 0 0 0 1.949.28 5.483 5.483 0 0 0 1.543-.28l-.554 2.585a.25.25 0 0 1-.244.198z"/>
  <path fill="url(#j)" d="M17.254 9.476 19 11.222v.726a.25.25 0 0 1-.198.244l-2.585.554A5.494 5.494 0 0 0 16.5 11c0-.61-.1-1.198-.283-1.746z"/>
  <path fill="url(#k)" d="m14.905 7.126 1.176 1.177-.157.243a5.486 5.486 0 0 0-1.02-1.42"/>
  <path fill="url(#l)" d="M13.454 15.924a5.498 5.498 0 0 0 1.435-1.035 5.493 5.493 0 0 0 1.035-1.435l1.436 2.22a.25.25 0 0 1-.033.313l-1.34 1.34a.25.25 0 0 1-.313.033z"/>
  <path fill="url(#m)" fill-rule="evenodd" d="M14.89 14.89a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.778 7.78M11 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clip-rule="evenodd"/>
  <path fill="#819098" fill-rule="evenodd" d="M11 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clip-rule="evenodd"/>
  <defs>
    <linearGradient id="c" x1="10.2" x2="16.069" y1="3" y2="8.817" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CED9DC"/>
      <stop offset="1" stop-color="#CED9DC" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="d" x1="10.2" x2="16.069" y1="3" y2="8.817" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CED9DC"/>
      <stop offset="1" stop-color="#CED9DC" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="e" x1="10.2" x2="16.069" y1="3" y2="8.817" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CED9DC"/>
      <stop offset="1" stop-color="#CED9DC" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="f" x1="10.2" x2="16.069" y1="3" y2="8.817" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CED9DC"/>
      <stop offset="1" stop-color="#CED9DC" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="g" x1="10.2" x2="16.069" y1="3" y2="8.817" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CED9DC"/>
      <stop offset="1" stop-color="#CED9DC" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="h" x1="10.92" x2="19.002" y1="10.918" y2="18.998" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4C5B64"/>
      <stop offset="1" stop-color="#5A6B75"/>
    </linearGradient>
    <linearGradient id="i" x1="10.92" x2="19.002" y1="10.918" y2="18.998" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4C5B64"/>
      <stop offset="1" stop-color="#5A6B75"/>
    </linearGradient>
    <linearGradient id="j" x1="10.92" x2="19.002" y1="10.918" y2="18.998" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4C5B64"/>
      <stop offset="1" stop-color="#5A6B75"/>
    </linearGradient>
    <linearGradient id="k" x1="10.92" x2="19.002" y1="10.918" y2="18.998" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4C5B64"/>
      <stop offset="1" stop-color="#5A6B75"/>
    </linearGradient>
    <linearGradient id="l" x1="10.92" x2="19.002" y1="10.918" y2="18.998" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4C5B64"/>
      <stop offset="1" stop-color="#5A6B75"/>
    </linearGradient>
    <radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="rotate(-135 15.32 6.346)scale(24.51299 18.8702)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5C6772"/>
      <stop offset=".584" stop-color="#6A7A84"/>
      <stop offset=".756" stop-color="#909DA6"/>
      <stop offset="1" stop-color="#B2BFBF"/>
    </radialGradient>
    <radialGradient id="b" cx="0" cy="0" r="1" gradientTransform="rotate(-135 15.32 6.346)scale(24.51299 18.8702)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5C6772"/>
      <stop offset=".584" stop-color="#6A7A84"/>
      <stop offset=".756" stop-color="#909DA6"/>
      <stop offset="1" stop-color="#B2BFBF"/>
    </radialGradient>
    <radialGradient id="m" cx="0" cy="0" r="1" gradientTransform="matrix(-17.1875 -17.1875 13.23096 -13.23096 22 22)" gradientUnits="userSpaceOnUse">
      <stop offset=".44" stop-color="#647681"/>
      <stop offset=".5" stop-color="#687781"/>
      <stop offset=".606" stop-color="#909DA6"/>
      <stop offset=".908" stop-color="#D9E7E8"/>
    </radialGradient>
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
			<path fill="url(#a)" fill-rule="evenodd" d="m8.786 19.463-2.275 3.454a.5.5 0 0 0 .064.629l1.879 1.878a.5.5 0 0 0 .629.064l3.454-2.274.811.336.834 4.05a.5.5 0 0 0 .49.4h2.656a.5.5 0 0 0 .49-.4l.834-4.05.811-.336 3.454 2.275a.5.5 0 0 0 .629-.064l1.878-1.879a.5.5 0 0 0 .064-.628l-2.274-3.455.336-.811 4.05-.834a.5.5 0 0 0 .4-.49v-2.656a.5.5 0 0 0-.4-.49l-4.05-.834-.336-.811 2.274-3.454a.5.5 0 0 0-.064-.63l-1.878-1.878a.5.5 0 0 0-.628-.064l-3.455 2.275-.811-.336-.834-4.05a.5.5 0 0 0-.49-.4h-2.656a.5.5 0 0 0-.49.4l-.834 4.05-.811.336-3.454-2.274a.5.5 0 0 0-.63.064L6.576 8.454a.5.5 0 0 0-.064.629l2.275 3.454-.336.811-4.05.834a.5.5 0 0 0-.4.49v2.656a.5.5 0 0 0 .4.49l4.05.834zM11.5 16l4.5 4.5 4.5-4.5-4.5-4.5z" clip-rule="evenodd"/>
  <g opacity=".4">
    <path fill="url(#b)" d="m17.818 4.4.834 4.05a7.882 7.882 0 0 0-.221-.074l-.613-2.977a.5.5 0 0 0-.49-.399h-2.656a.5.5 0 0 0-.49.4l-.613 2.976a7.882 7.882 0 0 0-.22.074l.833-4.05a.5.5 0 0 1 .49-.4h2.656a.5.5 0 0 1 .49.4"/>
    <path fill="url(#c)" d="M12.537 8.786 9.083 6.512a.5.5 0 0 0-.63.064L6.576 8.454a.5.5 0 0 0-.064.629l.173.262 1.77-1.77a.5.5 0 0 1 .629-.063l2.63 1.732a7.99 7.99 0 0 1 .824-.458"/>
    <path fill="url(#d)" d="m4.4 14.182 4.05-.834a7.94 7.94 0 0 0-.292 1.06l-3.759.774a.5.5 0 0 0-.399.49v-1a.5.5 0 0 1 .4-.49"/>
    <path fill="url(#e)" fill-rule="evenodd" d="m8.158 20.417-1.647 2.5a.5.5 0 0 0 .064.629l.11.109 1.473-2.238z" clip-rule="evenodd"/>
    <path fill="url(#f)" fill-rule="evenodd" d="m25.489 9.083-.173.262-1.77-1.77a.5.5 0 0 0-.628-.064l-1.199.79-.603-.603 1.802-1.187a.5.5 0 0 1 .628.064l1.878 1.879a.5.5 0 0 1 .064.629" clip-rule="evenodd"/>
  </g>
  <path fill="url(#g)" d="M21.885 10.58a8.017 8.017 0 0 0-.202-.21l1.783 1.783-.252.383a7.97 7.97 0 0 0-1.33-1.955"/>
  <path fill="url(#h)" d="M19.464 23.214c.793-.38 1.536-.9 2.193-1.557a7.985 7.985 0 0 0 1.557-2.193l2.274 3.454a.5.5 0 0 1-.064.628l-1.878 1.879a.5.5 0 0 1-.628.064z"/>
  <path fill="url(#i)" d="M15.607 23.99a8.04 8.04 0 0 0 3.045-.44l-.834 4.05a.5.5 0 0 1-.49.4h-.642l-3.05-3.05-.288-1.4c.712.25 1.47.402 2.26.44"/>
  <path fill="url(#j)" d="m12.153 23.467-1.81-1.81a7.989 7.989 0 0 0 2.193 1.557z"/>
  <path fill="url(#k)" d="m24.95 13.636 3.05 3.05v.642a.5.5 0 0 1-.4.49l-4.05.834c.291-.83.45-1.723.45-2.652 0-.93-.159-1.822-.45-2.652z"/>
  <path fill="#819098" fill-rule="evenodd" d="M12 12v8h8v-8zm4 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clip-rule="evenodd"/>
  <path fill="url(#l)" fill-rule="evenodd" d="M16 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8" clip-rule="evenodd"/>
  <defs>
    <linearGradient id="b" x1="14.786" x2="23.5" y1="4" y2="12.714" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CED9DC"/>
      <stop offset="1" stop-color="#CED9DC" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="c" x1="14.786" x2="23.5" y1="4" y2="12.714" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CED9DC"/>
      <stop offset="1" stop-color="#CED9DC" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="d" x1="14.786" x2="23.5" y1="4" y2="12.714" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CED9DC"/>
      <stop offset="1" stop-color="#CED9DC" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="e" x1="14.786" x2="23.5" y1="4" y2="12.714" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CED9DC"/>
      <stop offset="1" stop-color="#CED9DC" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="f" x1="14.786" x2="23.5" y1="4" y2="12.714" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CED9DC"/>
      <stop offset="1" stop-color="#CED9DC" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="g" x1="16" x2="28" y1="16" y2="28" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4C5B64"/>
      <stop offset="1" stop-color="#5A6B75"/>
    </linearGradient>
    <linearGradient id="h" x1="16" x2="28" y1="16" y2="28" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4C5B64"/>
      <stop offset="1" stop-color="#5A6B75"/>
    </linearGradient>
    <linearGradient id="i" x1="16" x2="28" y1="16" y2="28" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4C5B64"/>
      <stop offset="1" stop-color="#5A6B75"/>
    </linearGradient>
    <linearGradient id="j" x1="16" x2="28" y1="16" y2="28" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4C5B64"/>
      <stop offset="1" stop-color="#5A6B75"/>
    </linearGradient>
    <linearGradient id="k" x1="16" x2="28" y1="16" y2="28" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4C5B64"/>
      <stop offset="1" stop-color="#5A6B75"/>
    </linearGradient>
    <radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="rotate(-135 22.627 9.373)scale(36.7696 28.3053)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5C6772"/>
      <stop offset=".584" stop-color="#6A7A84"/>
      <stop offset=".756" stop-color="#909DA6"/>
      <stop offset="1" stop-color="#B2BFBF"/>
    </radialGradient>
    <radialGradient id="l" cx="0" cy="0" r="1" gradientTransform="matrix(-24.99997 -24.99997 19.2451 -19.2451 31.999 32)" gradientUnits="userSpaceOnUse">
      <stop offset=".44" stop-color="#647681"/>
      <stop offset=".5" stop-color="#687781"/>
      <stop offset=".606" stop-color="#909DA6"/>
      <stop offset=".908" stop-color="#D9E7E8"/>
    </radialGradient>
  </defs>
		</svg>
	{/if}
