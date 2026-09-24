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
			<g
     transform="translate(-421.71429,-531.79074)">
    <g
       transform="matrix(0.75,0,0,0.74999813,421.46429,-241.22897)">
      <path
         style="fill:currentColor;fill-opacity:1;stroke:none" 
         d="M 8 3 A 8.9999925 9.0000023 0 0 0 0.12304688 7.6679688 C 0.2519919 8.0317178 0.48048563 8.3445725 0.77929688 8.5761719 A 7.9999935 8.0000021 0 0 1 8 4 A 3.9999996 4.0000004 0 0 0 4 8 A 3.9999996 4.0000004 0 0 0 8 12 A 3.9999996 4.0000004 0 0 0 12 8 A 3.9999996 4.0000004 0 0 0 8.3496094 4.0175781 A 7.9999935 8.0000021 0 0 1 15.220703 8.5761719 C 15.522218 8.3424725 15.752612 8.0260772 15.880859 7.6582031 A 8.9999925 9.0000023 0 0 0 8 3 z M 8 5 A 2.9999996 3.0000002 0 0 1 11 8 A 2.9999996 3.0000002 0 0 1 8 11 A 2.9999996 3.0000002 0 0 1 5 8 A 2.9999996 3.0000002 0 0 1 8 5 z M 8 6 A 1.9999999 2.0000003 0 0 0 6 8 A 1.9999999 2.0000003 0 0 0 8 10 A 1.9999999 2.0000003 0 0 0 10 8 A 1.9999999 2.0000003 0 0 0 9.9101562 7.4121094 A 0.9999999 1 0 0 1 9 8 A 0.9999999 1 0 0 1 8 7 A 0.9999999 1 0 0 1 8.5898438 6.0898438 A 1.9999999 2.0000003 0 0 0 8 6 z "
         transform="matrix(1.3333333,0,0,1.3333367,0.33333333,1030.6955)"
     class="ColorScheme-Text"
         id="rect4170" />
    </g>
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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M 11 6 A 10 9.999975 0 0 0 2.3144531 11.070312 C 2.4995621 11.361743 2.7600802 11.597238 3.0664062 11.759766 A 9 8.999978 0 0 1 11 7 A 4 4 0 0 0 7 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 11 A 4 4 0 0 0 11.34375 7.0175781 A 9 8.999978 0 0 1 18.931641 11.761719 C 19.241063 11.598077 19.503624 11.359298 19.689453 11.064453 A 10 9.999975 0 0 0 11 6 z M 11 8 A 3 3 0 0 1 14 11 A 3 3 0 0 1 11 14 A 3 3 0 0 1 8 11 A 3 3 0 0 1 11 8 z M 11 9 C 9.892 9 9 9.892 9 11 C 9 12.108 9.892 13 11 13 C 12.108 13 13 12.108 13 11 C 13 10.79519 12.960983 10.601795 12.904297 10.416016 C 12.746415 10.759733 12.404317 11 12 11 C 11.446 11 11 10.554 11 10 C 11 9.595683 11.240267 9.2535881 11.583984 9.0957031 C 11.398205 9.0390231 11.20481 9 11 9 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
