import React from "react";
import GenericCategory from "../components/common/GenericCategory";
import { SparklesIcon } from "@heroicons/react/24/outline";

const MassaMuscular = () => {
  return (
    <GenericCategory
      category="Massa Muscular"
      description="Ganhe massa muscular de qualidade com os melhores hipercalóricos, carboidratos e suplementos para volume."
      color="indigo"
      icon={SparklesIcon}
    />
  );
};

export default MassaMuscular;
