export const getReviews = async () => {
    const res = await fetch(`http://localhost:4321/api/reviews/review.json`, {
        method: 'GET'
    });
    if(res.ok)
    { 
        return  await res.json();
    }
    else
    {
        return new Response(`Failed to get user likes ${JSON.stringify(res)}`)
    }
}