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
			<radialGradient id="a" cx="11" cy="11" gradientUnits="userSpaceOnUse" r="9"><stop offset="0" stop-color="#566069"/><stop offset="1" stop-color="#18222a"/></radialGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="19" y2="3"><stop offset="0" stop-color="#18222a"/><stop offset="1" stop-color="#566069"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="19" y2="16"><stop offset="0" stop-color="#253440"/><stop offset="1" stop-color="#566069" stop-opacity=".463277"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="15" x2="7" y1="15" y2="5"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#21c9fb"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="7.878906" x2="19" y1="11.189453" y2="11.189453"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><g stroke-linejoin="round"><rect fill="url(#a)" height="18" ry="2" stroke-width="2" width="18" x="2" y="2"/><rect fill="url(#b)" height="16" ry="1" stroke-width="1.77778" width="16" x="3" y="3"/><g stroke-width="1.62019"><path d="m3 16v1 1c0 .554.446 1 1 1h4 1 1v-1-1-1h-1-5zm9 0v1 1 1h2 4c.554 0 1-.446 1-1v-1-1z" fill="#83878a"/><path d="m3 17v1c0 .554.446 1 1 1h4 1 1v-1h-1-1-4c-.554 0-1-.446-1-1zm16 0c0 .554-.446 1-1 1h-4-2v1h2 4c.554 0 1-.446 1-1z" fill="url(#c)"/></g></g><path d="m12.121094 5.8789062-4.121094.1210938-.1210938 4.121094 2.1210938 2.121094v2.257812l2 2v-.5h7v-3.242188z" fill="url(#e)" opacity=".4"/><path d="m10 5c-1.65685 0-3 1.34315-3 3 .0022.81092.330006 1.5644213.878906 2.113281l.65625.65625.05078.05078c.30964.309701.689804.554532 1.121094.707032v-1.08789l-.70703-.7070311c-.0054-.00311-.01028-.00661-.01563-.00977-.178413-.3027328-.277411-.6520511-.277344-1.015625 0-1.1045699.89544-2 2-2 .370924.0000001.717871.101393 1.015625.2773438.175962.2977658.277349.6447192.277349 1.0156293-.0017.0995-.010944.198725-.027344.296875l.707032.7070312.855468.6835938c.1115-.31498.169575-.6463588.171875-.9804688 0-.8284299-.336006-1.5782037-.878906-2.1210937l-.05078-.050781-.65625-.65625c-.542901-.5428902-1.292695-.8789065-2.121095-.8789065zm0 3v6.5l.707031.707031 1.5-1.75.25-.75h3.25l-.707031-.707031z" opacity=".2"/><path d="m10 5c-1.6568542 0-3 1.3431458-3 3 .00343 1.2683695.8041637 2.397526 2 2.820312v-1.0878901c-.618917-.3573319-1.0001326-1.0177581-1-1.7324219 0-1.1045695.8954305-2 2-2 1.104569 0 2 .8954305 2 2-.0017.099501-.01086.1987348-.02734.296875l.855469.6835938c.111483-.3149715.169578-.646355.171871-.9804688 0-1.6568542-1.343146-3-3-3zm0 3v6.5l1.5-1.75.25-.75h3.25z" fill="url(#d)"/>
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
			<defs
     id="defs5455">
    <linearGradient
       id="linearGradient4229">
      <stop
         id="stop4231"
         style="stop-color:#566069" />
      <stop
         id="stop4233"
         style="stop-color:#18222a"
         offset="1" />
    </linearGradient>
    <linearGradient
       id="linearGradient4369">
      <stop
         id="stop4371"
         style="stop-color:#253440" />
      <stop
         id="stop4373"
         style="stop-color:#566069;stop-opacity:0.463277"
         offset="1" />
    </linearGradient>
    <linearGradient
       id="linearGradient4191">
      <stop
         id="stop4193"
         style="stop-color:#18222a" />
      <stop
         id="stop4195"
         style="stop-color:#566069"
         offset="1" />
    </linearGradient>
    <linearGradient
       id="linearGradient4303-4">
      <stop
         id="stop4305-0"
         style="stop-color:#197cf1" />
      <stop
         id="stop4307-7"
         style="stop-color:#21c9fb"
         offset="1" />
    </linearGradient>
    <radialGradient
       gradientTransform="matrix(2.000003,0,0,2.000003,-392.57266,-539.79957)"
       gradientUnits="userSpaceOnUse"
       xlink:href="#linearGradient4229"
       id="radialGradient4227"
       r="13.999979"
       cy="531.79797"
       cx="400.57144" />
    <linearGradient
       gradientTransform="matrix(2.000003,0,0,2,-392.57266,-539.79798)"
       x2="0"
       gradientUnits="userSpaceOnUse"
       y2="519.79797"
       y1="543.79797"
       xlink:href="#linearGradient4191"
       id="linearGradient4262" />
    <linearGradient
       gradientTransform="matrix(2.000003,0,0,2,-392.57266,-539.79798)"
       x2="0"
       gradientUnits="userSpaceOnUse"
       y2="539.79797"
       y1="543.79797"
       xlink:href="#linearGradient4369"
       id="linearGradient4288" />
    <linearGradient
       gradientTransform="matrix(2.000003,0,0,2,-366.57264,-539.79792)"
       x2="0"
       gradientUnits="userSpaceOnUse"
       y2="539.79797"
       y1="543.79797"
       xlink:href="#linearGradient4369"
       id="linearGradient4288-8" />
    <linearGradient
       gradientTransform="matrix(2.000003,0,0,2,378.57135,489.29802)"
       x2="8"
       gradientUnits="userSpaceOnUse"
       x1="20"
       y2="10"
       y1="19"
       xlink:href="#linearGradient4303-4"
       id="linearGradient4416" />
    <linearGradient
       gradientTransform="matrix(2.000003,0,0,2,378.57133,488.79802)"
       x2="23"
       gradientUnits="userSpaceOnUse"
       x1="9.0000095"
       y2="22.999973"
       y1="9"
       xlink:href="#linearGradient4227"
       id="linearGradient4198" />
    <linearGradient
       id="linearGradient4227">
      <stop
         id="stop4229"
         style="stop-color:#292c2f" />
      <stop
         id="stop4231-3"
         style="stop-opacity:0"
         offset="1" />
    </linearGradient>
    <linearGradient
       y2="519.79797"
       x2="0"
       y1="543.79797"
       gradientTransform="matrix(2.000003,0,0,2,-392.57266,-539.79798)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient855"
       xlink:href="#linearGradient4191" />
  </defs>
  
  <g
     transform="translate(-376.57144,-523.79797)"
     id="layer1">
    <g
       transform="matrix(0.53846154,0,0,0.53846154,172.57143,257.75289)"
       id="g853">
      <rect
         width="52"
         x="382.57144"
         y="497.798"
         rx="1.999989"
         height="51.999989"
         style="fill:url(#radialGradient4227);stroke-width:2;stroke-linejoin:round"
         id="rect4189" />
      <rect
         width="48.000069"
         x="384.57138"
         y="499.79797"
         rx="1.00002"
         height="48"
         style="fill:url(#linearGradient855);stroke-width:2;stroke-linejoin:round"
         id="rect4237" />
      <rect
         width="22.00001"
         x="384.57138"
         y="539.79797"
         rx="5.3e-05"
         height="8"
         style="fill:#83878a;stroke-width:2;stroke-linejoin:round"
         id="rect4239" />
      <rect
         width="22.000071"
         x="410.57144"
         y="539.79797"
         rx="5.3e-05"
         height="8"
         style="fill:#83878a;stroke-width:2;stroke-linejoin:round"
         id="rect4239-7" />
      <rect
         width="22.000031"
         x="384.57138"
         y="545.79797"
         rx="0"
         height="2"
         style="fill:url(#linearGradient4288);stroke-width:2;stroke-linejoin:round"
         id="rect4280" />
      <rect
         width="22.000031"
         x="410.57144"
         y="545.79797"
         rx="0"
         height="2"
         style="fill:url(#linearGradient4288-8);stroke-width:2;stroke-linejoin:round"
         id="rect4280-1" />
      <path
         d=""
         id="path4369" />
      <path
         style="opacity:0.2;fill:url(#linearGradient4198);fill-rule:evenodd"
         id="path4175"
         d="m 407.50894,510.54797 -2.9375,0.25 h -2 l -2,4 4,4 v 14 l 16.99999,17 13.00001,2e-5 v -14.86525 z" />
      <path
         style="fill:url(#linearGradient4416);stroke-width:2;stroke-linejoin:round"
         id="path4405"
         d="m 404.57139,509.29802 a 4.000006,4 0 0 0 -4,4 4.000006,4 0 0 0 3,3.8711 v -2.14454 a 2.000003,2 0 0 1 -1,-1.72656 2.000003,2 0 0 1 2,-2 2.000003,2 0 0 1 2.00001,2 2.000003,2 0 0 1 -0.02,0.26954 l 1.6875,1.3125 a 4.000006,4 0 0 0 0.33204,-1.58204 4.000006,4 0 0 0 -4.00001,-4 z m 0,4 0.012,19.5 5.98829,-8 h 9.00002 l -15.00003,-11.5 z" />
    </g>
  </g>
		</svg>
	{/if}
