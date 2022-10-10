//create theme.jsx
import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  fonts: {
    body: "Red Hat Text, sans-serif",
  },
  colors: {
    krem: {
      50: "#f3f1ec",
      // ...
      900: "#8b8882",
    },
  },
});
export default theme;


//create style.css
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap");


//apply theme in index.js (root app)
import theme from './theme'
<ChakraProvider theme={theme}>
	<App />
</ChakraProvider>


//use color in component
<Text color="krem.100"></Text>
<Button colorScheme="krem"></Button>

// 17px adalah scrollbar width