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
			<linearGradient id="a" gradientTransform="matrix(.36685 0 0 .34615286 -142.9925 -173.08407)" gradientUnits="userSpaceOnUse" x1="388.423" x2="388.423" y1="557.79797" y2="505.798"><stop offset="0" stop-color="#7f8c8d"/><stop offset="1" stop-color="#afb0b3"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.33540428 0 0 .34615286 -21.018857 -.076429)" gradientUnits="userSpaceOnUse" x1="3" x2="3" y1="17" y2="3"><stop offset="0" stop-color="#eef1f2"/><stop offset="1" stop-color="#f9fafb"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="6" x2="18" y1="6" y2="18"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><g transform="translate(1)"><path d="m2 2h15v18h-15z" fill="url(#a)" stroke-width=".633866"/><path d="m4 18h11v2h-11z" fill="#292c2e" stroke-width=".654654"/><path d="m5 19h6v1h-6zm7 0h2v1h-2z" fill="#f6b44d" stroke-width=".811273"/><path d="m15 18h2v2h-2zm-13 0h2v2h-2z" fill="#292c2f" opacity=".2" stroke-width=".654654"/><path d="m2 18 2 2v-2zm13 0v1.999996l2 .000004v-2z" opacity=".2" stroke-width=".642857"/><path d="m6 3a3 3 0 0 0 -3 3v3 .2695312a2 2 0 0 1 1 1.7304688 2 2 0 0 1 -1 1.732422v.267578 2l2 2h9l2-2v-2-.267578a2 2 0 0 1 -1-1.732422 2 2 0 0 1 1-1.7324219v-.2675781-3a3 3 0 0 0 -3-3z" fill="url(#b)"/></g><path d="m14.123047 7.8320312-7.2363282.0058594 1.2480468 2.1621094-.8167656 3.682 4.318 4.318h6.364v-6.291016z" fill="url(#c)" opacity=".2"/><g stroke-width="2"><path d="m6.3808594 8.7011719a4.5 4.5 0 0 0 -.3808594 1.7988281 4.5 4.5 0 0 0 4 4.464844v-4.175782z" fill="#224857"/><path d="m14.623047 8.6992188-3.623047 2.0898432v4.175782a4.5 4.5 0 0 0 4-4.464844 4.5 4.5 0 0 0 -.376953-1.8007812z" fill="#3bbbae"/><path d="m10.5 6a4.5 4.5 0 0 0 -3.6132812 1.8378906l3.6132812 2.0839844 3.623047-2.0898438a4.5 4.5 0 0 0 -3.623047-1.8320312z" fill="#7fc038"/></g>
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
			<linearGradient id="a" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="-421.447" x2="-410.447" xlink:href="#a" y1="-504.204" y2="-493.204"/><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="22" y2="6"><stop offset="0" stop-color="#73ba25"/><stop offset="1" stop-color="#81c13b"/></linearGradient><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="22" y2="6"><stop offset="0" stop-color="#173f4f"/><stop offset="1" stop-color="#2f5361"/></linearGradient><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="22" y2="6"><stop offset="0" stop-color="#35b9ab"/><stop offset="1" stop-color="#4ac0b4"/></linearGradient><linearGradient id="h" x1="9.088" x2="23.102" xlink:href="#a" y1="9.986" y2="24"/><linearGradient id="j" x1="16" x2="25" xlink:href="#a" y1="14" y2="23"/><linearGradient id="i" x1="8" x2="21" xlink:href="#a" y1="14" y2="27"/><linearGradient id="d" gradientTransform="matrix(.52174 0 0 .53846 -.696 -1.23)" gradientUnits="userSpaceOnUse" x1="1.333" x2="1.333" y1="48.714" y2="9.714"><stop offset="0" stop-color="#eef1f2"/><stop offset="1" stop-color="#f9fafb"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.58696 0 0 .53846 -227.988 -270.353)" gradientUnits="userSpaceOnUse" x1="388.423" x2="388.423" y1="557.798" y2="505.798"><stop offset="0" stop-color="#7f8c8d"/><stop offset="1" stop-color="#afb0b3"/></linearGradient><path d="M4 2h24v28H4z" fill="url(#b)"/><path d="M7 27h18v3H7z" fill="#292c2e"/><path d="M9 28h9v1H9zm10 0h4v1h-4z" fill="#f6b44d"/><path d="M24 27h4v3h-4zM4 27h4v3H4z" fill="#292c2f" opacity=".2"/><path d="M4 27h4v3H7zm20 0h4v3h-4z" fill="#292c2f" opacity=".2"/><path d="M24.535 5.465L28 8.928V30H14l-8-8z" fill="url(#c)" opacity=".2"/><path d="M11 4a5 5 0 0 0-5 5v4.768a3 3 0 0 1 .996 2.117A2 2 0 0 1 7 16a2 2 0 0 1-.01.2 3 3 0 0 1 0 .005A3 3 0 0 1 6 18.23V22l3 3h14l3-3v-3.768a3 3 0 0 1-.996-2.117A2 2 0 0 1 25 16a2 2 0 0 1 .01-.205A3 3 0 0 1 26 13.77V9a5 5 0 0 0-5-5z" fill="url(#d)"/><path d="M16 6a8 8 0 0 0-6.912 3.986L16 13.441l6.908-3.455A8 8 0 0 0 16 6z" fill="url(#e)"/><path d="M8.635 10.877A8 8 0 0 0 8 14a8 8 0 0 0 7.5 7.975v-7.666z" fill="url(#f)"/><path d="M23.357 10.879l-6.857 3.43v7.673A8 8 0 0 0 24 14a8 8 0 0 0-.643-3.121z" fill="url(#g)"/><path d="M21.65 8.35l.05.064a8 8 0 0 1 1.208 1.572L16 13.441 9.088 9.986l2.234 2.235 4.178 2.088 1 1v-1l6.857-3.43L28 15.52v-.82z" fill="url(#h)" opacity=".2"/><path d="M15.5 14.309v7.666a8 8 0 0 1-5.066-2.239L17.695 27h3.823L16.5 21.982V15.31zm-5.066 5.427a8 8 0 0 1-.082-.088l-.004.004z" fill="url(#i)" opacity=".2"/><path d="M23.357 10.879A8 8 0 0 1 24 14a8 8 0 0 1-7.5 7.982L21.518 27H28V15.521z" fill="url(#j)" opacity=".2"/><path d="M4 29h3v1H4zm21 0h3v1h-3z" fill="#292c2f" opacity=".2"/>
		</svg>
	{/if}
