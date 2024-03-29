export const Rating = async (rating: number) => {
    let ourRating = '';
    for (let i = 0; i < rating; i++) {
        ourRating += `
            <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
        `;
    }
    for (let i = rating; i < 5; i++) {
        ourRating += `
            <li class="list-inline-item me-0"><i class="far fa-star text-warning"></i></li>
        `;
    }
    return Rating;
}