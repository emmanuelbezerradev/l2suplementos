import React from "react";
import GenericCategory from "../components/common/GenericCategory";
import { HeartIcon } from "@heroicons/react/24/outline";

const Vitaminas = () => {
  return (
    <GenericCategory
      category="Vitaminas"
      description="Complemente sua dieta com as melhores vitaminas e minerais para potencializar sua saúde e performance."
      color="green"
      icon={HeartIcon}
    />
  );
};

export default Vitaminas;
