import { useParams } from "react-router-dom";

function EditResource() {
  const { id } = useParams();

  return (
    <div>
      <h2>Edit Post {id}</h2>
    </div>
  );
}

export default EditResource;