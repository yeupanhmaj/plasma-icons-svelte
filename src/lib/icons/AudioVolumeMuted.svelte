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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m4 6.01563v3.98437l4 4h1v-2.984375z"/>
        <path d="m2 6v4h1v-4z"/>
        <path d="m8 2-1.990234 1.990234 2.990234 2.982422v-4.972656z"/>
    </g>
    <path d="m2 2.707107.707107-.707107 11.292893 11.267023-.707109.732975z" class="ColorScheme-NegativeText" fill="currentColor"/>
    <g class="ColorScheme-Text" fill="currentColor">
        <path d="m10.271484 12.392578a5 5 0 0 1 -.492187.279297l.166015.998047a6 6 0 0 0 1.050782-.552734z" opacity=".35"/>
        <path d="m10.128906 4.615234-.330078.988282a3 3 0 0 1 1.201172 2.396484 3 3 0 0 1 -.167969.710938l.822266.822265a4 4 0 0 0 .345703-1.533203 4 4 0 0 0 -1.871094-3.384766z" opacity=".35"/>
        <path d="m9.945312 2.332031-.167968 1a5 5 0 0 1 3.222656 4.667969 5 5 0 0 1 -.607422 2.271484l.730469.730469a6 6 0 0 0 .876953-3.001953 6 6 0 0 0 -4.054688-5.667969z" opacity=".35"/>
    </g>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m3 8v6h2v-6z"/>
        <path d="m6 8v6l5 5h1v-5z"/>
        <path d="m11 3-3 3 4 4v-7z"/>
        <g opacity=".35">
            <path d="m14.832031 16.832031a7 7 0 0 1 -1.21289.646485l.24414.974609a8 8 0 0 0 1.681641-.908203z"/>
            <path d="m14.324219 7.28125-.539063.8613281a4 4 0 0 1 1.214844 2.8574219 4 4 0 0 1 -.371094 1.628906l.75.75a5 5 0 0 0 .621094-2.378906 5 5 0 0 0 -1.675781-3.71875z"/>
            <path d="m13.865234 3.5371094-.24414.9765625a7 7 0 0 1 4.378906 6.4863281 7 7 0 0 1 -1.166016 3.833984l.716797.716797a8 8 0 0 0 1.449219-4.550781 8 8 0 0 0 -5.134766-7.4628906z"/>
        </g>
    </g>
    <path d="m-.50000006 4.7426407 1-.0000001v21.6274174h-1z" class="ColorScheme-NegativeText" fill="currentColor" transform="matrix(.70710678 -.70710678 .70710678 .70710678 0 0)"/>
		</svg>
	{/if}
