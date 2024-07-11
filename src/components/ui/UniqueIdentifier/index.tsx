import React from "react";
import "./index.css";

const identifier = "2c1b951f356c4680b13ba1c9fc889c47";

const UniqueIdentifier: React.FC = () => {
  return (
    <div className="flex-column unique-identifier-container">
      <p className="unique-identifier">Identificador:</p>
      <code className="unique-identifier-code">{identifier}</code>
    </div>
  );
};

export default UniqueIdentifier;
