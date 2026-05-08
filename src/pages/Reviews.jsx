import "./Reviews.css";

function Reviews() {

  const reviews = [

    {
      id:1,
      name:"Rahul Sharma",
      role:"Frontend Developer",
      review:
        "This resume builder helped me create an ATS friendly resume quickly and easily."
    },

    {
      id:2,
      name:"Priya Patil",
      role:"Java Developer",
      review:
        "Beautiful templates and very easy to use dashboard. Highly recommended."
    },

    {
      id:3,
      name:"Aman Verma",
      role:"React Developer",
      review:
        "The live preview and PDF download feature is amazing."
    }

  ];

  return (

    <div className="reviews-page">

      <div className="reviews-header">

        <h1>
          What Our Users Say
        </h1>

        <p>
          Trusted by students and developers.
        </p>

      </div>

      <div className="reviews-grid">

        {
          reviews.map((item) => (

            <div
              className="review-card"
              key={item.id}
            >

              <div className="quote">
                “
              </div>

              <p className="review-text">
                {item.review}
              </p>

              <h2>
                {item.name}
              </h2>

              <span>
                {item.role}
              </span>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Reviews;