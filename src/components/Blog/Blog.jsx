import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, getAllPublications, getCategories } from "../../redux/actions";
import CardsContainer from "../Blog/CardsContainer";
import NavBar from "../NavBar/NavBar";
import { useTranslation } from 'react-i18next';
import './Blog.css';

const Blog = () => {
  const [t, i18n] = useTranslation("global");
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const dispatch = useDispatch();
  const publications = useSelector(state => state.publications);
  const categories = useSelector(state => state.categories);
  const filtered = useSelector(state => state.filtered);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Dispatching getCategories and getAllPublications");
      await dispatch(getCategories());
      await dispatch(getAllPublications());
    };

    fetchData();
  }, []);

  const filter = (event) => {
    const value = event.target.value;
    setSelectedFilter(value);
    dispatch(filterByCategory(value));
    setSelectedCategory(value);
  };

  return (
    <div data-spy="scroll" data-target=".main-nav">
      <section className="portfolio" id="portfolio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 no-padding">
              <div className="section-title st-center">
                <h3>{t("blog.blog1")}</h3>
                <p>{t("blog.blog2")}</p>
              </div>

              <div className="filter mb40">
                <form id="filter">
                  <fieldset className="group" name="category">
                    <label className={`btn btn-default ${selectedCategory === 'All' ? 'selected' : ''}`}>
                      <input type="radio" name="filter" value="All" onChange={(e) => filter(e)} checked={selectedFilter === 'All'} />
                      All
                    </label>
                    {categories?.map((c) => (
                      <label key={c.name} className={`btn btn-default ${selectedCategory === c.name ? 'selected' : ''}`}>
                        <input type="radio" name="filter" value={c.name} onChange={(e) => filter(e)} checked={selectedFilter === c.name} />
                        {c.name}
                      </label>
                    ))}
                  </fieldset>
                </form>
              </div>

              {console.log('Publications:', publications)}
              <CardsContainer publications={filtered.length === 0 ? publications : filtered} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
