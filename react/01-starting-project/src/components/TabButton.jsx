function TabButton({ children, onSelect, isSelected }) {
	/* javascript event listener
	document.querySelector("menu").addEventListener("click", () => {
		console.log("clicked");
	}); */
	console.log("TabButton is rendered.");
	return (
		<li>
			{/* children props is used to access the content between the opening and closing tags of the component */}
			<button className={isSelected ? "active" : ""} onClick={onSelect}>{children}</button>
		</li>
	);
}

export default TabButton;
