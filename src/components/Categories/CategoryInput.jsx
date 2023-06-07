import { useState } from "react"

const CategoryInput = ({categories = [], setCategories}) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const handleAddCategoryButton = () => {
        setCategories([inputValue, ...categories])
        setInputValue("")
    }

    const handleClearList = () => {
        setCategories([])
    }

    return (
        <div>
            <ul class="nav nav-pills mb-3" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Images</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#video-tab" type="button" role="tab" aria-controls="video-tab" aria-selected="false">Videos</button>
                </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <input
                            onChange={(e)=> handleInputChange(e)}
                            placeholder="Search Images..."
                            type="text"
                            value={inputValue}
                        />
                        <button
                            onClick={(e)=> handleAddCategoryButton(e)}
                            className="btn btn-outline-success btn-sm ms-2 mb-1"
                            type="button"
                        >
                            Add
                        </button>
                        <button
                            onClick={(e)=> handleClearList(e)}
                            className="btn btn-outline-danger btn-sm ms-2 mb-1"
                            type="button"
                        >
                            Clean
                        </button>
                    </div>
                    <div class="tab-pane fade" id="video-tab" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <input
                            onChange={(e)=> handleInputChange(e)}
                            placeholder="Search Video..."
                            type="text"
                            value={inputValue}
                        />
                        <button
                            onClick={(e)=> handleAddCategoryButton(e)}
                            className="btn btn-outline-success btn-sm ms-2 mb-1"
                            type="button"
                        >
                            Add
                        </button>
                        <button
                            onClick={(e)=> handleClearList(e)}
                            className="btn btn-outline-danger btn-sm ms-2 mb-1"
                            type="button"
                        >
                            Clean
                        </button>
                    </div>
                </div>
            
        </div>
    )
}

export default CategoryInput