import React from "react";
import GenericCategory from "../components/common/GenericCategory";
import { BoltIcon } from "@heroicons/react/24/outline";

const Aminoacidos = () => {
  return (
    <GenericCategory
      category="Aminoácidos"
      description="Potencialize sua recuperação e performance com BCAA, glutamina, arginina e outros aminoácidos essenciais."
      color="purple"
      icon={BoltIcon}
    />
  );
};

export default Aminoacidos;
