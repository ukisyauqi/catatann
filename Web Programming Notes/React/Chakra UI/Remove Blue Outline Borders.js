const theme = extendTheme({
  //remove the blue border for all components
  shadows: {
    outline: ""   
  },

  //remove for all Button
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "" 
        }
      },
    }
  }
});

// create own outline -> outline: "0 0 0 1px blue"
// boxShadow: "none", will remove your own box shadow on focus
