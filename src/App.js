import "./style.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

import articles from "./articles";

export default function App() {
  return (
    <div>
      <Header />
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}

      <Footer />
    </div>
  );
}
