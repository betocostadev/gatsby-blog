import { createGlobalStyle, css } from 'styled-components'

const dayTheme = css`
  body {
    background: white;
  }
`

const nightTheme = css`
  body {
    background: pink;
  }
`

const getTheme = props => {
  console.log('props', props.theme)
  if (props.theme === 'night') {
    return nightTheme;
  }
  return dayTheme
  // return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

  :root {
    --baseFont: 'Raleway', sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: var(--baseFont);
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
  box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: black;
  }
  ${getTheme};
`;
