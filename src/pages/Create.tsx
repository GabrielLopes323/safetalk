import { useState } from "react";

export default function Create(){
  const [text,setText]=useState("");

  return(
    <div style={{padding:20}}>
      <h1>Novo desabafo</h1>
      <textarea value={text} onChange={e=>setText(e.target.value)}/>
      <a href="/"><button>Publicar</button></a>
    </div>
  )
}
