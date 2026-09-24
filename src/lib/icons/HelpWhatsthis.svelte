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
        <path d="m9.9960938 8 .0039062 7 2-3h3l-5.0019531-4z"/>
        <path d="m7 7.0058594v4.9999996h2v-4.9999996z"/>
        <path d="m7 4.0058594v1.9941406h2v-1.9941406z"/>
        <path d="m8 2c-3.3137085 0-6 2.6862915-6 6 0 3.313708 2.6862915 6 6 6 .3415702 0 .6740174-.03501 1-.08984v-1.009769c-.3230704.06557-.6575793.099609-1 .099609-2.7614237 0-5-2.238576-5-5 0-2.7614237 2.2385763-5 5-5 2.761424 0 5 2.2385763 5 5 0 .3302679-.0346.6524578-.0957.9648438l.874998.644531c.03834-.1317338.07184-.264675.09961-.4003906.079922-.3905858.121092-.7947706.121092-1.2089842 0-3.3137085-2.686292-6-6-6z"/>
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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 3 C 6.568 3 3 6.568 3 11 C 3 15.432 6.568 19 11 19 C 11.339463 19 11.67189 18.972289 12 18.931641 L 12 17.921875 C 11.672498 17.968487 11.340784 18 11 18 C 7.122 18 4 14.878 4 11 C 4 7.122 7.122 4 11 4 C 14.878 4 18 7.122 18 11 C 18 11.696167 17.894565 12.366247 17.707031 13 L 18.740234 13 C 18.903948 12.360349 19 11.692084 19 11 C 19 6.568 15.432 3 11 3 z M 10 6 L 10 8 L 12 8 L 12 6 L 10 6 z M 10 9 L 10 16 L 12 16 L 12 9 L 10 9 z M 13 11 L 13.003906 20.099609 L 15.730469 16.810547 L 20 16.599609 L 13 11 z "
     class="ColorScheme-Text"
     />
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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 16 4 A 12 12 0 0 0 4 16 A 12 12 0 0 0 16 28 A 12 12 0 0 0 18 27.818359 L 18 26.810547 A 11 11 0 0 1 16 27 A 11 11 0 0 1 5 16 A 11 11 0 0 1 16 5 A 11 11 0 0 1 27 16 A 11 11 0 0 1 26.226562 20 L 27.308594 20 A 12 12 0 0 0 28 16 A 12 12 0 0 0 16 4 z M 15 9 L 15 11 L 17 11 L 17 9 L 15 9 z M 15 13 L 15 23 L 17 23 L 17 13 L 15 13 z M 19 16 L 19.007812 28 L 22.599609 23.076172 L 28 23.076172 L 19 16 z "
     id="path37" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
