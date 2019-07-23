const theme = {
  backgroundColor: 'transparent',
  border: '4px solid rgb(127,127,127)',
  borderRadius: '4px',
  primaryFont: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  primaryFontColor: 'white',
  tree: {
    backgroundColor: 'rgba(60, 60, 60, 0.8)',
  },
  heading: {
    font: "Homenaje, Impact, sans-serif"
  },
  node: {
    backgroundColor: 'rgb(60,60,60)',
    overlayColor: 'white',
    activeBackgroundColor: '#5dc83c',
    hoverBorderColor: `linear-gradient(
      to right,
      #ffffff 0%,
      #ffffff 100%
    )`,
    hoverBorder: '4px solid',
    iconNodeWidth: '64px',
    mobile: {
      textNodeHeight: '32px',
      textNodeWidth: '108px',
      fontSize: '14px',
    },
    desktop: {
      textNodeHeight: '28px',
      textNodeWidth: '144px',
      fontSize: '16px',
    },
  },
  edge: {
    border: '1px solid white',
  },
}

export default theme;