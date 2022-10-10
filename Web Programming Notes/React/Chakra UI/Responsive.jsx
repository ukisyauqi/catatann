import { Box, useBreakpointValue } from "@chakra-ui/react"

export default App() {
	const boxWidth = useBreakpointValue({base: "100px", md: "200px"})
	return (
		<>
			<Box w={boxWidth}></Box>
			<Box w={{base: "100px", md: "100px"}}></Box>
			<Box w={["100px", "200px", "300px"]}></Box>   // [base, sm, md]
		</>
	)
}


/*
base = 0em / 0px  
sm = 30em / 480px  
md = 48em / 768px  
lg = 62em / 992px  
xl = 80em / 1280px 

base - sm = mobile phone
sm - md   = tablet
md - lg	  = notebook, lo-res laptop, hi-res tablet
lg - xl	  = laptop, desktop
xl and up = large display

{base: 1, md: 2} means base to md = 1, md to up = 2
*/