import { useState } from "react";
import axios from "axios";

function AddResource() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
        }
      );

      alert("Resource Added Successfully!");

      setTitle("");
      setBody("");

    } catch (error) {

      alert("Something went wrong");

    }
  };

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="mb-4">
          Add New Resource
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label className="form-label">
              Title
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              required
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Description
            </label>

            <textarea
              rows="5"
              className="form-control"
              placeholder="Enter description"
              value={body}
              onChange={(e) =>
                setBody(e.target.value)
              }
              required
            />

          </div>

          <button
            type="submit"
            className="btn btn-success"
          >
            Create Resource
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddResource;