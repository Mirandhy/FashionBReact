import React from "react";

const Article = (props) => {
  return (
    <article>
      <h3>{props.publishedAt}</h3>
      <h2>
        <a href="#">{props.title}</a>
      </h2>

      <div>
        <div class="article-feature-img">
          <img src={"/images/" + props.img} />
        </div>

        <p class="article-content">{props.content}</p>
      </div>

      <div class="continue-link">
        {" "}
        <a href="#">Continues...</a>
      </div>

      <hr />
    </article>
  );
};

export default Article;
