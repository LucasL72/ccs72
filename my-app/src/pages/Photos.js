import React from "react";
import Album from "../components/Admin/Photos/Album";
import MainLayout from "../layouts/MainLayout";
import { getPic } from "../store/actions/PicsActions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Seo } from "../components/Seo";

const Photos = () => {
  const dispatch = useDispatch();
  const listPics = useSelector((state) => state.pics.listPics);

  useEffect(() => {
    dispatch(getPic());
  }, []);

  return (
    <div>
      <MainLayout>
        <Seo
          title="Nos Photos | Charpente Converture de la Sarthe"
          description="Retrouvez les photos de nos toutes dernières réalisations. Nous sommes spécialisé dans la charpente,couverture, la zinguerie, les carport bois, les pergolas bois et les velux. Nous intervenons dans un rayon de 20 km autour du Mans et de Saint-Mars-la-Brière."
          type="webapp"
        />
        <h2 className="text-center ssligne">Photos</h2>
        <Album list={listPics} />
      </MainLayout>
    </div>
  );
};

export default Photos;
