import NavBlog from "../../../../../components/NavBlog";
import NavReactTuto from "../../../../../components/NavReactTuto";
import React from "react";

const ReactTuto = () => {
  return (
    <div className="sm:mt-28 mt-28 lg:mt-28 xl:mt-28 h-screen w-full hide-scrollbar" style={{ overflowY: 'auto' }}>
      <NavBlog />
      <NavReactTuto />
    </div>
  );
};

export default ReactTuto;
