import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data.slice(0, 12));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border"></div>
      </div>
    );
  }

  return (
    <div className="container mt-4">

      <h1 className="text-center mb-4">
        Resource Dashboard
      </h1>

      <div className="row mb-4">

        <div className="col-md-4 mb-3">
          <div className="card bg-primary text-white shadow">
            <div className="card-body">
              <h3>{posts.length}</h3>
              <p>Total Resources</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card bg-success text-white shadow">
            <div className="card-body">
              <h3>CRUD</h3>
              <p>Operations Enabled</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">
              <h3>React SPA</h3>
              <p>Single Page Application</p>
            </div>
          </div>
        </div>

      </div>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="🔍 Search resources..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">

        {filteredPosts.map((post) => (

          <div className="col-md-6 col-lg-4 mb-4" key={post.id}>

            <div className="card shadow h-100">

              <div className="card-body">

                <h5 className="card-title">
                  Resource #{post.id}
                </h5>

                <p className="card-text">
                  {post.title}
                </p>

                <div className="d-flex justify-content-between">

                  <button className="btn btn-warning">
                    <i className="bi bi-pencil"></i> Edit
                  </button>

                  <button className="btn btn-danger">
                    <i className="bi bi-trash"></i> Delete
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Home;