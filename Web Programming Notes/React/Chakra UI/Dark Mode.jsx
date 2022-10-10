import { useColorMode, Button, Box, useColorModeValue } from "@chakra-ui/react"

export default App() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.700") // ("light", "dark")
  return (
    <>
      <Button onClick={toggleColorMode}> Click to toggle Color Mode</Button>
      <Box bg={bgColor}></Box>
    </>
  )
}
