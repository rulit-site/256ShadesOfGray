// Function to generate all 255 shades of gray with hex codes and copy functionality
function generateGrayShades() {
    const gridContainer = document.getElementById("grid-container");

    for (let shade = 0; shade <= 255; shade++) {
        const hexValue = shade.toString(16).padStart(2, "0"); // Convert to hexadecimal
        const grayColor = `#${hexValue}${hexValue}${hexValue}`;

        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = grayColor;
        colorBox.textContent = grayColor; // Display hex code as text

        const copyButton = document.createElement("button");
        copyButton.textContent = "Copy ";
        copyButton.classList.add("copy-button");

        colorBox.appendChild(copyButton);

        gridContainer.appendChild(colorBox);

        // Set text color based on the shade value
        if (shade >= 128) {
            colorBox.style.color = "#000000"; // Change text color to black for shades 128 to 255
        }

        // Add event listener to copy the hex value on button click
        copyButton.addEventListener("click", () => {
            const tempInput = document.createElement("input");
            tempInput.value = grayColor;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            alert(`Copied: ${grayColor}`);
        });
    }
}

// Call the function to generate shades of gray
generateGrayShades();
