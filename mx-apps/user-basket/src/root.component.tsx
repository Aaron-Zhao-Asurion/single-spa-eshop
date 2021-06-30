import React from "react";

export default function Root(props) {
  return (
    <div>
      <h1>{ props.name.split('/')[1].split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ') }</h1>
      <p>{ props.name } is mounted!</p>
    </div>
  );
}
