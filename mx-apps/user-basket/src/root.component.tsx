import React from "react";

export default function Root(props) {
  const title = props.name?.split('/')[1]?.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  return (
    <div>
      <h1>{ title }</h1>
      <p>{ props.name } is mounted!</p>
    </div>
  );
}
