app.component("review-list",{
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    `
    <div class="review-container">
    <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave this {{ review.rating }} stars
                <br/>
            "{{ review.review }}"
            <h4 v-if="review.recommendation === 'Yes'"> {{ review.name }} recommends this product! </h4>
            </li>

        </ul>
    </div>
    `
})