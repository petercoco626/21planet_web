import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: '-5px -3px 0 0 #0E0D1A',
        myShadow2: '5px -3px 0 0 #0E0D1A',
      },
      colors: {
        white: '#FFFFFF',
        'white-0.9': 'rgba(255, 255, 255, 0.90)',
        'white-0.7': 'rgba(255, 255, 255, 0.70)',
        'white-0.5': 'rgba(255, 255, 255, 0.50)',
        'white-0.3': 'rgba(255, 255, 255, 0.30)',
        'white-0.15': 'rgba(255, 255, 255, 0.15)',
        'modal-background': 'rgba(14, 13, 26, 0.8)',
        background: '#0E0D1A',

        'gray-50': '#F5F2FF',
        'gray-100': '#D4CFE5',
        'gray-200': '#B4ADCC',
        'gray-300': '#968FB2',
        'gray-400': '#7A7399',
        'gray-500': '#605980',
        'gray-600': '#484266',
        'gray-700': '#322E4D',
        'gray-800': '#1F1C33',
        'gray-900': '#0E0D1A',

        'violet-50': '#ECE5FF',
        'violet-100': '#D4C8FA',
        'violet-200': '#BFAFFA',
        'violet-300': '#A390F0',
        'violet-400': '#8B76EB',
        'violet-500': '#735CE5',
        'violet-600': '#5A49BF',
        'violet-700': '#443799',
        'violet-800': '#302773',
        'violet-900': '#211C4D',

        'purple-50': '#E0CFE5',
        'purple-100': '#D4B4E0',
        'purple-200': '#C99ADB',
        'purple-300': '#BC81D6',
        'purple-400': '#B069D1',
        'purple-500': '#A352CC',
        'purple-600': '#823FA6',
        'purple-700': '#622E80',
        'purple-800': '#431E59',
        'purple-900': '#251033',

        'yellow-1': '#FFFF00',
        'yellow-2': '#FFD500',
        'yellow-3': '#FFAA00',

        'red-1': '#f6789e',
        'red-2': '#dc3164',
        'green-1': '#78cab9',
        'green-2': '#31a089',
      },
      fontSize: {
        xs_thin: [
          '11px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        s_thin: [
          '13px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        m_thin: [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        l_thin: [
          '18px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        xl_thin: [
          '20px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        xxl_thin: [
          '22px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        xxxl_thin: [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        xs_bold: [
          '11px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        s_bold: [
          '13px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        m_bold: [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        l_bold: [
          '18px', // font size
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        xl_bold: [
          '20px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        xxl_bold: [
          '22px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        xxxl_bold: [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        xs_medium: [
          '11px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        s_medium: [
          '13px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        m_medium: [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        l_medium: [
          '18px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        xl_medium: [
          '20px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        xxl_medium: [
          '22px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        xxxl_medium: [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        xs_light: [
          '11px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        s_light: [
          '13px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        m_light: [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        l_light: [
          '18px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        xl_light: [
          '20px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        xxl_light: [
          '22px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        xxxl_light: [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        p_m_light: [
          '16px',
          {
            lineHeight: '155%',
            fontWeight: 300,
          },
        ],
        p_s_light: [
          '13px',
          {
            lineHeight: '155%',
            fontWeight: 300,
          },
        ],
      },
      fontFamily: {
        suit: 'SUIT-Medium',
      },
    },
    keyframes: {
      fadeIn: {
        from: { opacity: '0' },
        to: { opacity: '1' },
      },
    },
    animation: {
      fadeIn: 'fadeIn .3s ease-in-out',
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
export default config;
