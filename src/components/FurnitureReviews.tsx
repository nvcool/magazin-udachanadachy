interface IFurnitureReviewsProps {
  review: { rating: number; nickName: string; comment: string }[];
}

export const FurnitureReviews = ({ review }: IFurnitureReviewsProps) => {
  return (
    <div id="reviews" className="w-[1024px] mx-auto text-xl grid gap-8">
      {review.map((item, index) => {
        return (
          <div
            key={`${index}_${item.comment}`}
            className="border p-2 border-grey border-opacity-50 rounded-xl">
            <div className="flex gap-6">
              <span className="text-orange">{item.nickName}</span>
              <span className="text-grey">
                Rating : <span className="text-red">{item.rating}</span>
              </span>
            </div>
            <span className="text-grey">
              <span className="text-black">Comment</span> : {item.comment}
            </span>
          </div>
        );
      })}
    </div>
  );
};
