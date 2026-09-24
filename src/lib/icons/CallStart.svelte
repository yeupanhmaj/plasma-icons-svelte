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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 3.4882812 2.0019531 C 3.2034307 2.0278481 2.9960938 2.2363281 2.9960938 2.2363281 L 2.4667969 2.765625 L 2.1660156 3.0664062 C 1.7230956 4.7997962 2.1655238 6.7084425 3.5273438 8.0703125 L 7.9296875 12.472656 C 9.2917475 13.834716 11.200194 14.276904 12.933594 13.833984 L 13.234375 13.533203 L 13.763672 13.003906 C 13.763672 13.003906 14.294022 12.473709 13.763672 11.943359 L 11.484375 9.6621094 C 10.954035 9.1317694 10.423828 9.6621094 10.423828 9.6621094 L 10.158203 9.9277344 C 9.7174831 10.368444 9.0071062 10.368444 8.5664062 9.9277344 L 6.0722656 7.4335938 C 5.6315656 6.9928938 5.6315456 6.2825169 6.0722656 5.8417969 L 6.3378906 5.5761719 C 6.3378906 5.5761719 6.8682206 5.045965 6.3378906 4.515625 L 4.0566406 2.2363281 C 3.8577631 2.0374544 3.6591916 1.9864161 3.4882812 2.0019531 z "
     class="ColorScheme-Text"
     />
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
	 d="m389.76455 557.04066c1.81605 1.81605 4.35942 2.40526 6.67057 1.81471l.40051-.40052.7071-.70709c0 0 .7071-.70711-.00001-1.41423l-3.04035-3.04035c-.70711-.70711-1.41422 0-1.41422 0l-.35355.35355c-.58761.58761-1.53372.5876-2.12132 0l-3.32624-3.32622c-.58759-.58759-.58761-1.53372 0-2.12134l.35356-.35355c0 0 .70709-.7071-.00001-1.41421l-3.04055-3.04055c-.70711-.7071-1.41421 0-1.41421 0l-.7071.7071-.40051.40051c-.59055 2.31115-.0001 4.85476 1.81472 6.67056z" 
	 transform="translate(-378.85714-540.07647)"
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="m15.861 24.946c2.724 2.724 6.539 3.608 10.01 2.722l1.661-1.661c0 0 1.061-1.061 0-2.121l-4.561-4.561c-1.061-1.061-2.121 0-2.121 0l-.53.53c-.881.881-2.301.881-3.182 0l-4.989-4.989c-.881-.881-.881-2.301 0-3.182l.53-.53c0 0 1.061-1.061 0-2.121l-4.561-4.561c-1.061-1.061-2.121 0-2.121 0l-1.661 1.661c-.886 3.467-.002 7.282 2.722 10.01z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
