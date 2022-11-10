import type { NextPage } from 'next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <h1>Home</h1>
      <div style={{ margin: "10px", fontSize: "x-large" }}>
        <FontAwesomeIcon icon={faGamepad} />
        アイコン表示サンプル
      </div>
    </>
  )
}

export default Home