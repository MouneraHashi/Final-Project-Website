function showCategory(category) {
    // Hide all categories
    const allCategories = document.querySelectorAll('.category-content');
    allCategories.forEach(function(cat) {
        cat.style.display = 'none';
    });

    // Show the selected category
    const selectedCategory = document.getElementById(category);
    selectedCategory.style.display = 'block';
}
