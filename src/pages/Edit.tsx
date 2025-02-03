import { useParams } from "react-router";

export const Edit = () => {
  const { id } = useParams();

  return (
    <button className="py-5 px-9 border border-grey border-opacity-50 rounded-lg hover:bg-orange hover:text-white transition-colors ease-in">
      Edit
    </button>
  );
};
