const theme = extendTheme({
	withDefaultColorScheme({
		colorScheme: "krem",
		components: ["Checkbox", "Input", "Select"]
	}),
	withDefaultProps({
		size: "lg",
		variant: "primary",
		components: ["Checkbox", "Input", "Select"]
	})	
})

// these 3 component will have default colorScheme: "krem", size: "lg" and variant

