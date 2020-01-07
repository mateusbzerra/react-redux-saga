import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../store/modules/repo/actions";

function Home() {
  const [input, setInput] = useState("");
  const repo = useSelector(state => state.repo);

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getUser(input));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Input</p>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
        />
        <button type="submit">Adicionar</button>
      </form>
      {repo.avatar_url && <img src={repo.avatar_url} alt="profile"></img>}
    </div>
  );
}

export default Home;
