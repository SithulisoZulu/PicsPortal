/**
 * Interface representing a Like object.
 * 
 * @property _id - The unique identifier of the Like.
 * @property userId - The user ID associated with the Like.
 * @property photoUrl - The URL of the photo associated with the Like.
 * @property photoId - The ID of the photo associated with the Like.
 */
export interface ILike {
    _id      : string;
    userId   : string;
    photoUrl : string;
    photoId  : string;
    createdAt: Date,
    updatedAt: Date,
};