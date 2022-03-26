import React from 'react';
import { useState } from "react";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36D7B7");

  return (
    <div className="sweet-loading">
      <ScaleLoader color={color} loading={loading} css={override} size={20} height = {60} width = {8} radius = {4} margin = {6} speedMultiplier = {3} />
    </div>
  );
}

export default App;