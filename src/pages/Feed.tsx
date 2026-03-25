import { useState } from "react";

export default function Feed(){
  const [posts,setPosts]=useState<string[]>([]);

  return(
    <div style={{padding:20}}>
      <h1>Feed SafeTalk+</h1>
      {posts.length===0 && <p>Nenhum desabafo ainda...</p>}
      <a href="Login"><button>Entrar</button></a>
    </div>
  )
}
