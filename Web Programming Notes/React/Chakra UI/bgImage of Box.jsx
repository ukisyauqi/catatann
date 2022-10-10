import { Box } from "@chakra-ui/react"
import image from "./image.jpg"

export default function App() {
	return (
		//	        bgImage	bgPosition  bgRepeat bgSize
		<Box bg={`url(${image}) center no-repeat 30%`}></Box>
	)
}

// bgRepeat -> https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
// bgPosition -> https://developer.mozilla.org/en-US/docs/Web/CSS/background-position