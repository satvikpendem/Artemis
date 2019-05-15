<template>
  <label class="toggle-component">
    <input type="checkbox" name="toggle" id="toggle" @click="toggleMode" v-model="isToggled">
    <svg viewBox="0 0 218 132">
      <rect
        class="background"
        x="17"
        y="16.001"
        width="200"
        height="100"
        rx="50"
        stroke="white"
        stroke-width="2.00"
      ></rect>

      <!-- Stars and clouds must be drawn first to move behind sun/moon -->
      <g class="night-sky">
        <g class="constellations">
          <path
            class="dipper"
            d="M38.5 33.499L54 35.499L61 42.999L70.5 51.499M70.5 51.499L94 57.499L87.5 68.999L69.5 62.499L70.5 51.499Z"
            stroke="white"
            stroke-width="1.00"
            opacity="0"
            fill-opacity="0"
          ></path>
          <path
            class="orion"
            d="M115.5 65.499L120 47.499L113.5 36.499L99 42.999L109 70.999M115.5 65.499L112.5 68.499L109 70.999M115.5 65.499L128 87.999L104 92.999L109 70.999"
            stroke="white"
            stroke-width="1.00"
            opacity="0"
            fill-opacity="0"
          ></path>
        </g>
        <g class="stars" opacity="0">
          <circle cx="94.2692" cy="57.6016" r="0.730769" fill="white"></circle>
          <circle cx="87.4487" cy="68.8067" r="0.730769" fill="white"></circle>
          <circle cx="54.1987" cy="35.5567" r="0.608974" fill="white"></circle>
          <circle cx="70.7628" cy="51.6336" r="0.608974" fill="white"></circle>
          <circle cx="69.7885" cy="62.3516" r="0.608974" fill="white"></circle>
          <circle cx="61.141" cy="42.9862" r="0.730769" fill="white"></circle>
          <circle cx="38.609" cy="33.608" r="0.608974" fill="white"></circle>
          <circle cx="77.375" cy="29.374" r="0.375" fill="white"></circle>
          <circle cx="39.375" cy="68.374" r="0.375" fill="white"></circle>
          <circle cx="50.375" cy="46.374" r="0.375" fill="white"></circle>
          <circle cx="126.375" cy="24.374" r="0.375" fill="white"></circle>
          <circle cx="124.375" cy="103.374" r="0.375" fill="white"></circle>
          <circle cx="35.75" cy="94.749" r="0.75" fill="white"></circle>
          <circle cx="151.375" cy="68.374" r="0.375" fill="white"></circle>
          <circle cx="108.997" cy="71.2667" r="0.758447" fill="white"></circle>
          <circle cx="112.79" cy="68.233" r="0.758447" fill="white"></circle>
          <circle cx="115.444" cy="65.1992" r="0.758447" fill="white"></circle>
          <circle cx="104.068" cy="92.8825" r="0.758447" fill="white"></circle>
          <circle cx="127.959" cy="87.9526" r="0.758447" fill="white"></circle>
          <circle cx="119.995" cy="47.3757" r="0.758447" fill="white"></circle>
          <circle cx="113.548" cy="36.7574" r="0.758447" fill="white"></circle>
          <circle cx="99.1377" cy="43.2043" r="1.13767" fill="white"></circle>
        </g>
      </g>

      <g class="clouds">
        <path
          class="cloud cloud-one"
          d="M186.05 62.001C192.125 62.001 197.05 66.9259 197.05 73.001C197.05 73.5347 197.02 74.0516 196.947 74.565C199.903 75.6387 202 78.4644 202 81.801C202 86.0668 198.566 89.501 194.3 89.501H165.7C161.434 89.501 158 86.0668 158 81.801C158 77.5352 161.434 74.101 165.7 74.101C165.7 69.8484 169.147 66.401 173.4 66.401C174.595 66.401 175.725 66.6716 176.734 67.1573C178.681 64.062 182.124 62.001 186.05 62.001Z"
          fill="white"
          filter="url(#filter0_d)"
        ></path>
        <path
          class="cloud cloud-two"
          d="M171.05 50C177.125 50 182.05 54.9249 182.05 61C182.05 61.5337 182.02 62.0506 181.947 62.564C184.903 63.6377 187 66.4634 187 69.8C187 74.0658 183.566 77.5 179.3 77.5H150.7C146.434 77.5 143 74.0658 143 69.8C143 65.5342 146.434 62.1 150.7 62.1C150.7 57.8474 154.147 54.4 158.4 54.4C159.595 54.4 160.725 54.6706 161.734 55.1563C163.681 52.061 167.124 50 171.05 50Z"
          fill="white"
          filter="url(#filter1_d)"
        ></path>
        <path
          class="cloud cloud-three"
          d="M183.05 42C189.125 42 194.05 46.9249 194.05 53C194.05 53.5337 194.02 54.0506 193.947 54.564C196.903 55.6377 199 58.4634 199 61.8C199 66.0658 195.566 69.5 191.3 69.5H162.7C158.434 69.5 155 66.0658 155 61.8C155 57.5342 158.434 54.1 162.7 54.1C162.7 49.8474 166.147 46.4 170.4 46.4C171.595 46.4 172.725 46.6706 173.734 47.1563C175.681 44.061 179.124 42 183.05 42Z"
          fill="white"
          filter="url(#filter2_d)"
        ></path>
      </g>

      <g class="sun">
        <circle class="core" cx="64.5" cy="65.501" r="37.5" fill="url(#paint1_linear)"></circle>
        <path
          class="crescent"
          clip-rule="evenodd"
          d="M102.5 65.501C102.5 86.2117 85.7104 103.001 64.9998 103.001C78.8069 103.001 89.9998 86.2117 89.9998 65.501C89.9998 44.7904 78.8069 28.001 64.9998 28.001C85.7105 28.0011 102.5 44.7904 102.5 65.501ZM27.4998 65.4326C27.4998 65.4554 27.4998 65.4782 27.4998 65.501C27.4998 65.5238 27.4998 65.5466 27.4998 65.5694V65.4326Z"
          fill="#faff00"
        ></path>
        <g class="spoke">
          <rect
            width="7.54201"
            height="20"
            rx="3.77101"
            transform="matrix(1 0 0 -1 61.481 21.001)"
            fill="#FAFF00"
          ></rect>
          <rect
            width="7.54201"
            height="20"
            rx="3.77101"
            transform="matrix(0.707106 0.707107 0.707106 -0.707107 93.7508 31.6671)"
            fill="#FAFF00"
          ></rect>
          <rect
            width="7.54201"
            height="20"
            rx="3.77101"
            transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 36.1597 101)"
            fill="#FAFF00"
          ></rect>
          <rect
            width="7.54201"
            height="20"
            rx="3.77101"
            transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 30.8268 37.1609)"
            fill="#FAFF00"
          ></rect>
          <rect
            width="7.54201"
            height="20"
            rx="3.77101"
            transform="matrix(-0.707107 0.707107 0.707107 0.707107 99.9989 95.6671)"
            fill="#FAFF00"
          ></rect>
          <rect
            width="7.54201"
            height="20"
            rx="3.77101"
            transform="matrix(-1 0 0 1 69.023 111.505)"
            fill="#FAFF00"
          ></rect>
          <rect
            width="7.54201"
            height="20"
            rx="3.77101"
            transform="matrix(0 -1 -1 0 20 70.0241)"
            fill="#FAFF00"
          ></rect>
          <rect
            width="7.54201"
            height="20"
            rx="3.77101"
            transform="matrix(0 1 1 0 110.504 62.482)"
            fill="#FAFF00"
          ></rect>
        </g>
      </g>

      <defs>
        <!-- Cloud drop shadows -->
        <filter
          id="filter0_d"
          x="154"
          y="62.001"
          width="52"
          height="35.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
        </filter>
        <filter
          id="filter1_d"
          x="139"
          y="50"
          width="52"
          height="35.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
        </filter>
        <filter
          id="filter2_d"
          x="151"
          y="42"
          width="52"
          height="35.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
        </filter>

        <!-- Gradients -->
        <linearGradient
          id="sky-gradient"
          x1="217"
          y1="15.999"
          x2="17"
          y2="115.999"
          gradientUnits="userSpaceOnUse"
        >
          <stop class="sky-gradient-begin" stop-color="#0000FF"></stop>
          <stop class="sky-gradient-end" offset="1" stop-color="#00D5FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  </label>
</template>

<script>
export default {
  name: "Toggle",
  data() {
    return {
      isToggled: false
    };
  },
  beforeMount() {
    this.getTheme();
  },
  methods: {
    toggleMode() {
      this.isToggled = !this.isToggled;
      this.$emit("toggleMode", this.isToggled);
      chrome.storage.sync.set(
        { theme: this.isToggled ? "dark" : "light" },
        null
      );
    },
    getTheme() {
      chrome.storage.sync.get("theme", obj => {
        this.isToggled = obj["theme"] == "dark" ? true : false;
      });
    }
  }
};
</script>

<style scoped>
.toggle-component {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  opacity: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
}

svg * {
  transition: var(--t-speed);
}

svg {
  width: 100px;
}

svg > .sun > .spoke {
  fill: rgb(255, 230, 0);
}

svg > .sun > .core {
  fill: rgb(255, 230, 0);
}

svg > .sun > .crescent {
  fill: #faff00;
}

svg .background {
  fill: url(#sky-gradient);
}

svg > .night-sky > * {
  opacity: 0;
}

svg > .night-sky > .constellations > * {
  fill-opacity: 0;
}

input:checked + svg > .sun {
  transform: translate(100px);
  transition: var(--t-speed);
}

input:checked + svg > .sun > circle {
  fill: white;
  transition: var(--t-speed);
}

input:checked + svg > .sun > .crescent {
  fill: #5200ff;
}

input:checked + svg > .sun > .spoke {
  opacity: 0;
  transition: calc(var(--t-speed) / 2);
}

input:checked + svg > .background {
  fill: url(#sky-gradient);
}

input:checked + svg > .clouds > .cloud {
  /* fill: #282828; */
  fill: #474747;
  transition: var(--t-speed);
  transform: translate(-100px, 20px);
}

input:checked + svg > .clouds > .cloud-three {
  opacity: 0;
}

input:checked + svg > .night-sky > * {
  opacity: 1;
}

input:checked + svg > .night-sky > .constellations > .orion {
  opacity: 1;
  stroke-dasharray: 158.3125;
  stroke-dashoffset: 158.3125;
  animation: orion calc(var(--t-speed) * 3) linear forwards;
}

input:checked + svg > .night-sky > .constellations > .dipper {
  opacity: 1;
  stroke-dasharray: 106.28192138671875;
  stroke-dashoffset: 106.28192138671875;
  animation: dipper calc(var(--t-speed) * 4) linear forwards;
}

@keyframes orion {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes dipper {
  to {
    stroke-dashoffset: 0;
  }
}

input:checked ~ svg > defs > linearGradient > .sky-gradient-begin {
  stop-color: #282828;
}

input:checked ~ svg > defs > linearGradient > .sky-gradient-end {
  stop-color: #000000;
}
</style>
