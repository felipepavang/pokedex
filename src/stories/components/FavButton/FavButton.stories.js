import React from "react";

import FavButton from "../../../components/FavButton";

export default {
  title: "PokeList/FavButton",
  component: FavButton,
};

export const FavButtonSelected  = () => <FavButton isSelected />;

export const FavButtonUnselected = () => <FavButton isSelected={false} />;
