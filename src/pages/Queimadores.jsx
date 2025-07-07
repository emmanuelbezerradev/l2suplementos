import React from "react";
import GenericCategory from "../components/common/GenericCategory";
import { FireIcon } from "@heroicons/react/24/outline";

const Queimadores = () => {
  return (
    <GenericCategory
      category="Queimadores"
      description="Acelere seu metabolismo e conquiste o corpo dos seus sonhos com os melhores termogênicos e queimadores de gordura."
      color="orange"
      icon={FireIcon}
    />
  );
};

export default Queimadores;
