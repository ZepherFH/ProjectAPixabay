import NavBar from "./navbar/NavBar"
const Begin = ({ setPage }) => {

  return (
      <div class="align-items-center">
        <div class="background">
            <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Login</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="signin-tab" data-bs-toggle="tab" data-bs-target="#signin-tab-pane" type="button" role="tab" aria-controls="signin-tab-pane" aria-selected="false">Sign Im</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="admin-tab" data-bs-toggle="tab" data-bs-target="#admin-tab-pane" type="button" role="tab" aria-controls="admin-tab-pane" aria-selected="false">Admin</button>
                </li>
            </ul>
            <NavBar 
                setPage={setPage}
            />
        </div>
      </div>
  )
}

export default Begin