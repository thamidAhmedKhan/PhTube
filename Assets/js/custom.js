console.log("Custom JS file loaded successfully!");

// Fetch, Load and Display categories on index.html page

const loadCategories = () => {
    fetch("https://api.escuelajs.co/api/v1/categories") 
    //.then((res) => console.log(res)) // Check the response in the console
    .then((res) => res.json()) // Convert the response to JSON
    //.then((data) => console.log(data)) // Check the data in the console
    .then((data) => displayCategories(data)) // Call the function to display categories
    .catch( (error) => console.error("Error fetching categories:", error)) // Handle errors
    //.catch((error) => console.log("Error fetching categories:", error)) // Handle errors
    .finally(() => console.log("Fetch operation completed.")) // Log when the fetch operation is completed
    //.finally()
}

const displayCategories = (categories) => {
    categories.forEach((category) => {
        console.log(category); // Log the category data in the console for debugging
        const categoriesContainer = document.getElementById("categories"); // Get the container element
        const categoryDiv = document.createElement("button"); // Create a new div element for each category
        categoryDiv.classList = "btn category bg-[#25252526] text-[#252525B3] hover:bg-[#FF1F3D] hover:text-white"; // Add a class to the div
        categoryDiv.innerHTML = `
            <span>${category.name}</span> <!-- Display the category name -->
            
        `;
        categoriesContainer.appendChild(categoryDiv); // Append the category div to the container
    }
    );
}
loadCategories(); // Call the function to load categories on page load
/* const loadCategories = () => {  

    fetch("https://api.escuelajs.co/api/v1/categories")
        .then(response => response.json())
        .then(data => {
            const categoriesContainer = document.getElementById("categoriesContainer");
            categoriesContainer.innerHTML = ""; // Clear existing content

            data.forEach(category => {
                const categoryDiv = document.createElement("div");
                categoryDiv.className = "category";
                categoryDiv.innerHTML = `
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                `;
                categoriesContainer.appendChild(categoryDiv);
            });
        })
        .catch(error => console.error("Error fetching categories:", error));
}
loadCategories();  */// Call the function to load categories on page load

const categories = document.getElementById("categories");

categories.addEventListener("wheel", (e) => {
  e.preventDefault();
  categories.scrollLeft += e.deltaY;
});

const slider = document.getElementById("categories");

let isDragging = false;
let startX;
let scrollStart;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  slider.classList.add("dragging");
  startX = e.clientX;
  scrollStart = slider.scrollLeft;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const dx = e.clientX - startX;
  slider.scrollLeft = scrollStart - dx;
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
  slider.classList.remove("dragging");
});

slider.addEventListener("mouseleave", () => {
  isDragging = false;
  slider.classList.remove("dragging");
});
