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
        
        <linearGradient id="a" x1="7.07143" x2="11.3935" y1="1" y2="19.9101" gradientUnits="userSpaceOnUse">
            <stop stop-color="#26343c" offset="0"/>
            <stop stop-color="#1a2530" offset=".447566"/>
            <stop stop-color="#121920" offset="1"/>
        </linearGradient>
        <linearGradient id="b" x2="22" y1="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop stop-color="#070f17" offset="0"/>
            <stop offset="1"/>
        </linearGradient>
        <linearGradient id="c" x2="22" y1="1" y2="1" gradientUnits="userSpaceOnUse">
            <stop stop-color="#3b4c56" offset="0"/>
            <stop stop-color="#334551" offset=".5"/>
            <stop stop-color="#243540" offset="1"/>
        </linearGradient>
        <linearGradient id="d" x1="14.5992" x2="-.011072" y1="2.6705" y2="12.7675" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1abc9c" offset="0"/>
            <stop stop-color="#2980b9" offset="1"/>
        </linearGradient>
        <linearGradient id="e" x1="9.30267" x2="19.5624" y1="11.7076" y2="13.6907" gradientUnits="userSpaceOnUse">
            <stop stop-color="#cc4a5e" offset="0"/>
            <stop stop-color="#aa478a" offset="1"/>
        </linearGradient>
        <linearGradient id="f" x1="7.07027" x2="4.56326" y1="21.7606" y2="13.6014" gradientUnits="userSpaceOnUse">
            <stop stop-color="#334545" offset="0"/>
            <stop stop-color="#536161" offset="1"/>
        </linearGradient>
        <linearGradient id="g">
            <stop offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
        <linearGradient id="h" x1="11" x2="11" y1="3" y2="18" gradientUnits="userSpaceOnUse" xlink:href="#g"/>
        <linearGradient id="i" x1="10.5926" x2="22.8149" y1="7.72223" y2="20.963" gradientUnits="userSpaceOnUse" xlink:href="#g"/>
        <linearGradient id="j" x1="11.59" x2="11.59" y1="6.90452" y2="22.2351" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fccec0" offset="0"/>
            <stop stop-color="#c98350" offset="1"/>
        </linearGradient>
        <linearGradient id="k" x1="12" x2="12" y1="14" y2="22" gradientUnits="userSpaceOnUse">
            <stop stop-color="#a96535" stop-opacity="0" offset="0"/>
            <stop stop-color="#a96535" offset="1"/>
        </linearGradient>
        <linearGradient id="l" x1="11.774" x2="11.774" y1="7.91847" y2="18.0001" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fff" offset="0"/>
            <stop stop-color="#fff" stop-opacity=".5" offset="1"/>
        </linearGradient>
    </defs>
    <path d="m0 3.5c0-1.38071 1.11929-2.5 2.5-2.5h17c1.3807 0 2.5 1.11929 2.5 2.5v14c0 1.3807-1.1193 2.5-2.5 2.5h-17c-1.38071 0-2.5-1.1193-2.5-2.5z" fill="url(#a)"/>
    <path d="m0 16.5v1c0 1.3807 1.11929 2.5 2.5 2.5h17c1.3807 0 2.5-1.1193 2.5-2.5v-1c0 1.3807-1.1193 2.5-2.5 2.5h-17c-1.38071 0-2.5-1.1193-2.5-2.5z" fill="url(#b)"/>
    <path d="m2.5 1c-1.38071 0-2.5 1.11929-2.5 2.5v1c0-1.38071 1.11929-2.5 2.5-2.5h17c1.3807 0 2.5 1.11929 2.5 2.5v-1c0-1.38071-1.1193-2.5-2.5-2.5z" fill="url(#c)"/>
    <path d="m2.5 3c-.27614 0-.5.22386-.5.5v14c0 .2761.22386.5.5.5h17c.2761 0 .5-.2239.5-.5v-14c0-.27614-.2239-.5-.5-.5z" fill="url(#d)"/>
    <path d="m19.829 3.12354-17.829 12.87646 1 2h17-.5c.2761 0 .5-.2239.5-.5v-13.99995-.00363c-.0011-.1487-.067-.28197-.171-.37288z" fill="url(#e)"/>
    <path d="m7.5 12.0278-5.5 3.9722v1.5c0 .2761.22386.5.5.5h12.5z" fill="url(#f)"/>
    <path d="m19.8287 3.12329-12.3287 8.87671 12.4999-2.99996v-5.50888c-.0025-.14671-.0683-.27802-.1712-.36787z" fill="#aa478a"/>
    <path d="m2 3.5c0-.27614.22386-.5.5-.5h17c.2761 0 .5.22386.5.5v14c0 .2761-.2239.5-.5.5h-17c-.27614 0-.5-.2239-.5-.5z" fill="url(#h)" opacity=".2"/>
    <path d="m16.15 8.99998c0 2.84422-2.3058 5.15002-5.15 5.15002-2.84429 0-5.15002-2.3058-5.15002-5.15002 0-2.84427 2.30573-5.15 5.15002-5.15 2.8442 0 5.15 2.30573 5.15 5.15z" style="fill:currentColor" class="ColorScheme-Accent" opacity=".5"/>
    <path d="m15 9c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4z" style="fill:currentColor" class="ColorScheme-Accent" />
    <path d="m15 9c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4z" fill="#000" fill-opacity=".5"/>
    <path d="m11.3438 20.25v-12.12036l10.6563 10.65636v1.464z" fill="url(#i)" opacity=".4"/>
    <path d="m9.99996 21.9993h7.00004l1.75-4.9992c0-2.0001-.75-2.0001-2.45-2.0001 0-1-.3-1-2.15-1 0-1-.3-1-2.15-1v-3.99994c0-1.50007-2.00004-1.65-2.00004 0v8.00004l-.05-.0001s-.44993-1.5-.84468-1.8947c-2.10528-2.1053-4-.4999-4-.4999z" fill="url(#j)"/>
    <path d="m16.9999 20.9993h-6.99999l-4.42559-6.6853c-.29742.1459-.4691.2914-.4691.2914l4.89469 7.3939h6.99999l1.75-4.9992c0-.3259-.0199-.5986-.0606-.827z" fill="url(#k)"/>
    <g fill="url(#l)" opacity=".7">
        <path d="m5.57432 15.314c.69064-.3389 2.05933-.6803 3.5309.7913.39475.3947.84469 1.8947.84469 1.8947l.05.0001v-1l-.05-.0001s-.44994-1.5-.84469-1.8947c-2.10528-2.1053-4-.4999-4-.4999z"/>
        <path d="m9.99991 10.0001c0-1.65004 1.99999-1.50011 1.99999 0v-1.00004c0-1.50007-1.99999-1.65-1.99999 0z"/>
        <path d="m11.9999 13c1.85 0 2.15 0 2.15 1 1.85 0 2.15 0 2.15 1 1.6999 0 2.45 0 2.45 2.0001l-.0606.1731c-.209-1.1732-.9663-1.1732-2.3892-1.1732 0-1-.3002-1-2.1502-1 0-1-.3-1-2.15-1z"/>
    </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 33"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs>
        
        <linearGradient id="a" x1="10.2857" x2="16.2998" y1="1" y2="27.933" gradientUnits="userSpaceOnUse">
            <stop stop-color="#26343c" offset="0"/>
            <stop stop-color="#1a2530" offset=".447566"/>
            <stop stop-color="#121920" offset="1"/>
        </linearGradient>
        <linearGradient id="b" x2="32" y1="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stop-color="#070f17" offset="0"/>
            <stop offset="1"/>
        </linearGradient>
        <linearGradient id="c" x2="32" y1="1" y2="1" gradientUnits="userSpaceOnUse">
            <stop stop-color="#3b4c56" offset="0"/>
            <stop stop-color="#334551" offset=".5"/>
            <stop stop-color="#243540" offset="1"/>
        </linearGradient>
        <linearGradient id="d" x1="21.5987" x2="-3.073" y1="2.41056" y2="17.237" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1abc9c" offset="0"/>
            <stop stop-color="#2980b9" offset="1"/>
        </linearGradient>
        <linearGradient id="e" x1="9.88709" x2="6.08863" y1="31.7662" y2="19.2248" gradientUnits="userSpaceOnUse">
            <stop stop-color="#334545" offset="0"/>
            <stop stop-color="#536161" offset="1"/>
        </linearGradient>
        <linearGradient id="f" x1="13.2169" x2="29.1597" y1="16.3517" y2="19.4779" gradientUnits="userSpaceOnUse">
            <stop stop-color="#cc4a5e" offset="0"/>
            <stop stop-color="#aa478a" offset="1"/>
        </linearGradient>
        <linearGradient id="g">
            <stop offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
        <linearGradient id="h" x1="16" x2="16" y1="3" y2="26" gradientUnits="userSpaceOnUse" xlink:href="#g"/>
        <linearGradient id="i" x1="15.4075" x2="33.1852" y1="9.77777" y2="29.037" gradientUnits="userSpaceOnUse" xlink:href="#g"/>
        <linearGradient id="j" x1="17.6351" x2="17.6351" y1="9.8457" y2="32.0019" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fccec0" offset="0"/>
            <stop stop-color="#c98350" offset="1"/>
        </linearGradient>
        <linearGradient id="k" x1="18" x2="18" y1="21" y2="32" gradientUnits="userSpaceOnUse">
            <stop stop-color="#a96535" stop-opacity="0" offset="0"/>
            <stop stop-color="#a96535" offset="1"/>
        </linearGradient>
        <linearGradient id="l" x1="18" x2="18" y1="10" y2="25.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fff" offset="0"/>
            <stop stop-color="#fff" stop-opacity=".5" offset="1"/>
        </linearGradient>
    </defs>
    <path d="m0 4c0-1.65685 1.34315-3 3-3h26c1.6569 0 3 1.34315 3 3v21c0 1.6569-1.3431 3-3 3h-26c-1.65685 0-3-1.3431-3-3z" fill="url(#a)"/>
    <path d="m29 28h-26c-1.65685 0-3-1.3431-3-3v-1c0 1.6569 1.34315 3 3 3h26c1.6569 0 3-1.3431 3-3v1c0 1.6569-1.3431 3-3 3z" fill="url(#b)"/>
    <path d="m3 1c-1.65685 0-3 1.34315-3 3v1c0-1.65685 1.34315-3 3-3h26c1.6569 0 3 1.34315 3 3v-1c0-1.65685-1.3431-3-3-3z" fill="url(#c)"/>
    <path d="m3 3c-.55229 0-1 .44772-1 1v21c0 .5523.44772 1 1 1h26c.5523 0 1-.4477 1-1v-21c0-.55228-.4477-1-1-1z" fill="url(#d)"/>
    <path d="m11.14 17.14-9.14 6.86v1c0 .5523.44772 1 1 1h19z" fill="url(#e)"/>
    <path d="m29.6638 3.25208-18.521 13.89072 10.8571 8.8572h7c.5523 0 1-.4477 1-1v-21.01249c-.0036-.29253-.1327-.55482-.3361-.73543z" fill="url(#f)"/>
    <path d="m29.6637 3.25195-18.5238 13.88805 18.8599-6.14v-7.01887c-.0053-.29002-.1341-.54986-.3361-.72918z" fill="#aa478a"/>
    <path d="m2 4c0-.55228.44772-1 1-1h26c.5523 0 1 .44772 1 1v21c0 .5523-.4477 1-1 1h-26c-.55229 0-1-.4477-1-1z" fill="url(#h)" opacity=".2"/>
    <path d="m21.65 11.5c0 3.0376-2.4624 5.5-5.5 5.5-3.0375 0-5.5-2.4624-5.5-5.5 0-3.03757 2.4625-5.5 5.5-5.5 3.0376 0 5.5 2.46243 5.5 5.5z" style="fill:currentColor" class="ColorScheme-Accent" opacity=".5"/>
    <path d="m20.6501 11.4999c0 2.4853-2.0147 4.5-4.5 4.5-2.4852 0-4.5-2.0147-4.5-4.5s2.0148-4.50002 4.5-4.50002c2.4853 0 4.5 2.01472 4.5 4.50002z" style="fill:currentColor" class="ColorScheme-Accent"/>
    <path d="m20.6501 11.4999c0 2.4853-2.0147 4.5-4.5 4.5-2.4852 0-4.5-2.0147-4.5-4.5s2.0148-4.50002 4.5-4.50002c2.4853 0 4.5 2.01472 4.5 4.50002z" fill="#000" fill-opacity=".4"/>
    <path d="m17.5 28v-17.5l14.5001 14.5c0 1.6569-1.3431 3-3 3z" fill="url(#i)" opacity=".2"/>
    <path d="m16.7037 31.7037c2.4763.2751 5.9745.2948 6.4614.2962.0395.0001.077.0008.1164.0014 2.1505.0345 4.0109-1.3971 4.2869-3.5359l.6908-4.7617c.5926-3.5556-2.074-4.4444-2.9629-2.6667 0-2.0741-2.3704-3.2592-3.5556-1.4815 0-1.7777-2.5555-2.9629-3.7407-1.1852v-6.5185c0-2.37032-3.5-2.96294-3.5 0v12.6482s-.5-1.5-1.5-2.5c-3.2596-3.2596-4.88892-.0741-4.88892-.0741 2.37042 1.7778 4.16552 9.2859 8.59262 9.7778z" fill="url(#j)"/>
    <path d="m23.1651 31.9999c-.4869-.0014-3.9851-.0211-6.4614-.2962-2.8087-.3121-4.558-3.4483-6.067-6.1535-.86944-1.5587-1.65909-2.9744-2.52562-3.6243 0 0 .1468-.287.44043-.6006.69967.7409 1.36507 1.9339 2.08519 3.2249 1.509 2.7052 3.2583 5.8414 6.067 6.1535 2.4763.2751 5.9745.2948 6.4614.2962.0347.0001.0679.0006.1023.0012l.0141.0002c2.1505.0345 4.0109-1.3971 4.2869-3.536l.6908-4.7616c.0263-.1573.0461-.3094.06-.4562.0453.4218.0315.9072-.06 1.4562l-.6908 4.7616c-.276 2.1389-2.1364 3.5705-4.2869 3.536l-.0141-.0002c-.0344-.0006-.0676-.0011-.1023-.0012z" fill="url(#k)"/>
    <path d="m14.5 24.5s-.5-1.5-1.5-2.5c-3.2596-3.2596-4.88892-.0741-4.88892-.0741.14881.1116.29536.2458.44043.3994.68459-.731 2.16729-1.6065 4.44849.6747 1 1 1.5 2.5 1.5 2.5zm3.5-5.1296v-1c1.1852-1.7778 3.7407-.5926 3.7407 1.1851 1.1852-1.7777 3.5556-.5926 3.5556 1.4815.8496-1.6991 3.3231-.9623 3.0229 2.2105-.2484-2.3103-2.2713-2.7138-3.0229-1.2105 0-2.0741-2.3704-3.2592-3.5556-1.4815 0-1.7777-2.5555-2.9629-3.7407-1.1851zm0-7.5186v1c0-2.3703-3.5-2.96294-3.5 0v-1c0-2.96294 3.5-2.37032 3.5 0z" clip-rule="evenodd" fill="url(#l)" fill-rule="evenodd" opacity=".6"/>
		</svg>
	{/if}
