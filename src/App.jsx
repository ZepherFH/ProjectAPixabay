import { useState } from "react"
import Categories from "./components/Categories"
import ImgExpo from "./components/ImgExpo"
import Begin from "./components/Begin"
import './components/Style.css'

function App() {
  const [categories, setCategories] = useState(["Sky", "Forest"])
  const [Page, setPage] = useState('Home')

  return (
    <div className="m-5">
      
      {
        Page === 'Home' && (
          <div>
            <Begin
              setPage={setPage}
            />
          </div>
        )
      }
      
      {
        Page === 'Categories' && (
          <div>
          <h3>API Project</h3>
            <hr />
            <Categories
              categories={categories}
              setCategories={setCategories}
            />
            <hr />
            <ImgExpo
              categories={categories}
              setCategories={setCategories}
            />
            {
              categories.length === 0 && (
                <div className="text-center">
                  <h3>Your list is empty</h3>
                  Add a new category to get started.
                </div>
              )
            }
          </div>
        )
      }
      
    </div>
  )
}

export default App