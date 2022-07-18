import React from "react";
import FormContact from "../components/FormContact";
import Events from "../components/Events";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent } from "../store/actions/EventActions";
import ListBlog from "../components/Admin/Blog/ListBlog";
import { getNews } from "../store/actions/ArticlesActions";

const Home = () => {
  const dispatch = useDispatch();
  const listEvents = useSelector((state) => state.events.listEvents);
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getNews());
    dispatch(getEvent());
  }, []);
  return (
    <div>
      <MainLayout>
        <h1 className="text-center ssligne">Récents</h1>
        <ListBlog list={listArticles} />
        <Events list={listEvents} />
        <FormContact />
      </MainLayout>
    </div>
  );
};

export default Home;
