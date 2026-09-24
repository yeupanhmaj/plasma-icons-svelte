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
			<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H12C13.1046 3 14 3.89543 14 5V11C14 12.1046 13.1046 13 12 13H4C2.89543 13 2 12.1046 2 11V5ZM3 5C3 4.44772 3.44772 4 4 4H12C12.5523 4 13 4.44772 13 5V9C13 9.55228 12.5523 10 12 10H4C3.44772 10 3 9.55228 3 9V5ZM13 10.7324V11C13 11.5523 12.5523 12 12 12H4C3.44772 12 3 11.5523 3 11V10.7324C3.29417 10.9026 3.63571 11 4 11H12C12.3643 11 12.7058 10.9026 13 10.7324Z" class="ColorScheme-Text"/>
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 5C4.89543 5 4 5.89543 4 7C4 8.10457 4.89543 9 6 9H10C11.1046 9 12 8.10457 12 7C12 5.89543 11.1046 5 10 5H6ZM5 7C5 6.44772 5.44772 6 6 6C6.55228 6 7 6.44772 7 7C7 7.55228 6.55228 8 6 8C5.44772 8 5 7.55228 5 7ZM9 7C9 6.44772 9.44771 6 10 6C10.5523 6 11 6.44772 11 7C11 7.55228 10.5523 8 10 8C9.44771 8 9 7.55228 9 7Z" class="ColorScheme-Text"/>
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
			<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 6.93096 3.0035 6.86275 3.01033 6.79551C3.11275 5.787 3.96447 5 5 5H17C18.1046 5 19 5.89543 19 7V15C19 16.1046 18.1046 17 17 17H5C3.89543 17 3 16.1046 3 15V7ZM4.00516 6.89776C4.05637 6.3935 4.48223 6 5 6H17C17.5523 6 18 6.44772 18 7V13C18 13.5523 17.5523 14 17 14H5C4.44772 14 4 13.5523 4 13V7C4 6.96548 4.00175 6.93137 4.00516 6.89776ZM18 14.7324V15C18 15.5523 17.5523 16 17 16H5C4.44772 16 4 15.5523 4 15V14.7324C4.29417 14.9026 4.63571 15 5 15H17C17.3643 15 17.7058 14.9026 18 14.7324Z" class="ColorScheme-Text"/>
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12H14C15.1046 12 16 11.1046 16 10C16 8.89543 15.1046 8 14 8H8ZM7 10C7 9.44771 7.44772 9 8 9C8.55229 9 9 9.44771 9 10C9 10.5523 8.55229 11 8 11C7.44772 11 7 10.5523 7 10ZM13 10C13 9.44771 13.4477 9 14 9C14.5523 9 15 9.44771 15 10C15 10.5523 14.5523 11 14 11C13.4477 11 13 10.5523 13 10Z" class="ColorScheme-Text"/>
		</svg>
	{:else if numericSize <= 40}
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
			<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4 10C4 9.89645 4.00525 9.79412 4.01549 9.69327C4.16912 8.1805 5.4467 7 7 7H25C26.6569 7 28 8.34315 28 10V22C28 23.6569 26.6569 25 25 25H7C5.34315 25 4 23.6569 4 22V10ZM5.01033 9.79551C5.11275 8.787 5.96447 8 7 8H25C26.1046 8 27 8.89543 27 10V19C27 20.1046 26.1046 21 25 21H7C5.89543 21 5 20.1046 5 19V10C5 9.93096 5.0035 9.86275 5.01033 9.79551ZM27 21.2361V22C27 23.1046 26.1046 24 25 24H7C5.89543 24 5 23.1046 5 22V21.2361C5.53076 21.7111 6.23165 22 7 22H25C25.7684 22 26.4692 21.7111 27 21.2361Z" class="ColorScheme-Text"/>
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 12C10.1193 12 9 13.1193 9 14.5C9 15.8807 10.1193 17 11.5 17H20.5C21.8807 17 23 15.8807 23 14.5C23 13.1193 21.8807 12 20.5 12H11.5ZM10 14.5C10 13.6716 10.6716 13 11.5 13C12.3284 13 13 13.6716 13 14.5C13 15.3284 12.3284 16 11.5 16C10.6716 16 10 15.3284 10 14.5ZM19 14.5C19 13.6716 19.6716 13 20.5 13C21.3284 13 22 13.6716 22 14.5C22 15.3284 21.3284 16 20.5 16C19.6716 16 19 15.3284 19 14.5Z" class="ColorScheme-Text"/>
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
			<path id="path2" class="ColorScheme-Text" d="m15.748536 16.915853c-2.531733 0-4.584147 2.052414-4.584147 4.584147s2.052414 4.584147 4.584147 4.584147h16.502928c2.531733 0 4.584147-2.052414 4.584147-4.584147s-2.052414-4.584147-4.584147-4.584147zm-2.750488 4.584147c0-1.519003 1.231485-2.750488 2.750488-2.750488s2.750488 1.231485 2.750488 2.750488-1.231485 2.750488-2.750488 2.750488-2.750488-1.231485-2.750488-2.750488zm16.502928 0c0-1.519003 1.231485-2.750488 2.750488-2.750488s2.750488 1.231485 2.750488 2.750488-1.231485 2.750488-2.750488 2.750488-2.750488-1.231485-2.750488-2.750488z" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd" stroke-width="1.83366"/>
    <rect id="rect2" x="4" y="9" width="40" height="30" ry="5" fill="none" stroke="#232629" stroke-linecap="round" stroke-width="2.5"/>
    <rect id="rect3" x="4" y="9" width="40" height="25" ry="5" fill="none" stroke="#232629" stroke-linecap="round" stroke-width="2.5"/>
		</svg>
	{/if}
