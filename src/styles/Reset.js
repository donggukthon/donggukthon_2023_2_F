import { css } from '@emotion/react'

export const reset = css`
  :root {
    --vh: 100%;
  }
  
  @font-face {
    font-family: 'MaplestoryOTFLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MaplestoryOTFBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  input,
  textarea,
  select,
  table,
  button,
  code {
    font-size: 14px;
    font-weight:300;
    font-family: 'MaplestoryOTFLight', 'MaplestoryOTFBold', 'Noto Sans KR', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .hidden,
  [hidden] {
    display: none !important;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover, a:focus {
    text-decoration: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  select,
  input,
  textarea,
  button {
    -webkit-appearance: none;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input:disabled {
    background-color: rgba(255, 255, 255, 0);
    cursor: not-allowed;
  }

  select {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  
  select::-ms-expand {
    display: none;
  }

  input,
  textarea {
    font-size: inherit;
    border: 0;
  }
  input::placeholder,
  textarea::placeholder {
    /* Chrome, Safari, Firefox */
    color: #c9c9c9;
    opacity: 1;
  }
  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    /* IE, Edge */
    color: #c9c9c9;
    opacity: 1;
  }
  input[readonly]::placeholder, input:disabled::placeholder,
  textarea[readonly]::placeholder,
  textarea:disabled::placeholder {
    /* Chrome, Safari, Firefox */
    color: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
  input[readonly]:-ms-input-placeholder, input:disabled:-ms-input-placeholder,
  textarea[readonly]:-ms-input-placeholder,
  textarea:disabled:-ms-input-placeholder {
    /* IE, Edge */
    color: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
  input::-ms-clear, input::-ms-reveal,
  textarea::-ms-clear,
  textarea::-ms-reveal {
    /* IE, Edge */
    display: none;
  }
  input::-webkit-inner-spin-button, input::-webkit-outer-spin-button,
  textarea::-webkit-inner-spin-button,
  textarea::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`