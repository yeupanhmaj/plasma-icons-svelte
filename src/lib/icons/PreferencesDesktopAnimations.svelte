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
			<defs>
  <linearGradient id="linearGradient18" x1="15" x2="15" y1="1" y2="11" gradientTransform="translate(0,1)" gradientUnits="userSpaceOnUse">
   <stop stop-color="#f00" offset="0"/>
   <stop stop-color="#860000" offset="1"/>
  </linearGradient>
 </defs>
 <path class="ColorScheme-Text" fill="currentColor" d="m11.293 5.418c-0.36629 0.27008-1.3153 1.0026-2.2891 2.0156-0.77357 0.80472-2.2079 2.4327-3.1348 4.8828-0.32673 0.86371-0.62993 1.9223-0.80078 3.1992-0.56152-2.0278-1.1537-3.308-2.2148-4.3691-0.093753-0.093773-0.22092-0.14646-0.35352-0.14648-0.1326 2e-5 -0.25976 0.05271-0.35352 0.14648-0.19521 0.19525-0.19521 0.51178 0 0.70703 1.3831 1.3831 1.8783 3.2589 2.8652 7.7539 0.059348 0.26966 0.32604 0.44016 0.5957 0.38086 0.22925-0.050431 0.39256-0.25355 0.39258-0.48828 0.27792-3.0334 1.2834-4.908 2.0996-6.0039 1.2433-1.6692 2.6909-2.3867 3.3965-2.6797 0.94074-0.39068 1.7171-0.48923 2.0371-0.5293"/>
 <circle cx="15" cy="7" r="5" fill="url(#linearGradient18)" style="paint-order:markers stroke fill"/>
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
  <linearGradient id="linearGradient18" x1="22" x2="22" y1="1" y2="17" gradientTransform="translate(0,1)" gradientUnits="userSpaceOnUse">
   <stop stop-color="#f00" offset="0"/>
   <stop stop-color="#860000" offset="1"/>
  </linearGradient>
 </defs>
 <path class="ColorScheme-Text" fill="currentColor" d="m18.426 6.7695c-1.593 0.86101-3.6605 2.0886-5.6602 3.8926-2.0124 1.8154-3.9107 4.1728-5.2012 7.2363-0.51101 1.2131-0.92082 2.5243-1.207 3.9414-0.084157-0.32056-0.16781-0.628-0.25391-0.92383-0.57612-1.9796-1.2442-3.4806-2.4004-4.627-0.18814-0.18611-0.44239-0.29006-0.70703-0.28906-0.26576 0.0011-0.52017 0.1079-0.70703 0.29688-0.38827 0.39266-0.38478 1.0257 0.00781 1.4141 0.81149 0.80458 1.3507 1.9218 1.8867 3.7637 0.52521 1.8047 1.0268 4.2558 1.7949 7.5488 0.039231 1.3402 2.039 1.3154 2.0449-0.02539 0.32677-4.103 1.5581-7.0645 3.082-9.1699 1.5173-2.0963 3.376-3.419 5.1133-4.2344 1.749-0.82085 3.4452-1.1578 4.6641-1.2031"/>
 <circle cx="22" cy="10" r="8" fill="url(#linearGradient18)" stroke-width="1.6" style="paint-order:markers stroke fill"/>
		</svg>
	{/if}
