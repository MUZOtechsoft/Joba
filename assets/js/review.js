document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviewsContainer');
    const reviewList = document.getElementById('reviewList');
    let reviewCount = 3; // Initial review count

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const review = document.getElementById('review').value;

        // Create review item
        const reviewItem = `
            <div class="reviews-comments-item">
                <div class="review-comments-avatar">
                    <img src="assets/img/user-default.jpg" class="img-fluid" alt=""> 
                </div>
                <div class="reviews-comments-item-text">
                    <h4><a href="#">${name}</a><span class="reviews-comments-item-date"><i class="ti-calendar theme-cl"></i>${new Date().toLocaleDateString()}</span></h4>
                    <div class="listing-rating"><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i></div>
                    <div class="clearfix"></div>
                    <p>"${review}"</p>
                </div>
            </div>
        `;

        // Append review to review list
        reviewList.insertAdjacentHTML('beforeend', reviewItem);

        // Increment review count and update the count display
        reviewCount++;
        document.getElementById('reviewCount').textContent = reviewCount;

        // Clear form fields
        form.reset();
    });
});