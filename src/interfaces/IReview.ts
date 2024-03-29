/**
 * Interface representing a review.
 * 
 * @property {string} email - The email of the reviewer.
 * @property {string} fullName - The full name of the reviewer.
 * @property {string} rating - The rating given in the review.
 * @property {string} review - The content of the review.
 * @property {Date} createdAt - The date and time the review was created.
 * @property {Date} updatedAt - The date and time the review was last updated.
 */
export interface IReview {
    email    : string;
    fullName : string;
    rating   : number;
    review   : string;
    createdAt: Date;
    updatedAt: Date;
};