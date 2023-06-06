const NavBar = ({ setPage }) => {

    return (
        
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <h1
                        style={{
                            textAlign: "center"
                        }}
                    ><br /><br /><br />
                    <font color="white">Login</font></h1><br/>
                    <form>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-3 col-form-label"><font color="white">Email</font></label>
                            <div class="col-sm-8">
                            <input type="email" class="form-control" id="inputEmail3"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-3 col-form-label"><font color="white">Password</font></label>
                            <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword3"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-10 offset-sm-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label class="form-check-label" for="gridCheck1">
                                <font color="white">Save your login?</font>
                                </label>
                            </div>
                            </div>
                    </div>
                    </form>
                    <div class="d-grid gap-2 col-4 mx-auto"><br></br>
                        <button type="button" className="btn btn-success m2"
                            onClick={() => setPage('Categories')}>
                            <i class="bi bi-controller">Login</i>
                        </button>
                    </div>
            </div>
            <div class="tab-pane fade" id="signin-tab-pane" role="tabpanel" aria-labelledby="signin-tab" tabindex="0">
                    <h1
                        style={{
                            textAlign: "center"
                        }}
                    ><br /><br /><br />
                    <font color="white">Sign In</font></h1><br/>
                    <form>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-3 col-form-label"><font color="white">Email</font></label>
                            <div class="col-sm-8">
                            <input type="email" class="form-control" id="inputEmail3"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-3 col-form-label"><font color="white">Password</font></label>
                            <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword3"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-10 offset-sm-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label class="form-check-label" for="gridCheck1">
                                <font color="white">Save your login?</font>
                                </label>
                            </div>
                            </div>
                    </div>
                    </form>
                    <div class="d-grid gap-2 col-4 mx-auto"><br></br>
                        <button type="button" className="btn btn-success m2"
                            onClick={() => setPage('Categories')}>
                            <i class="bi bi-controller">Login</i>
                        </button>
                    </div>
            </div>
            <div class="tab-pane fade" id="admin-tab-pane" role="tabpanel" aria-labelledby="admin-tab" tabindex="0">
            <h1
                        style={{
                            textAlign: "center"
                        }}
                    ><br /><br /><br />
                    <font color="white">Admin</font></h1><br/>
                    <form>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-3 col-form-label"><font color="white">Email</font></label>
                            <div class="col-sm-8">
                            <input type="email" class="form-control" id="inputEmail3"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-3 col-form-label"><font color="white">Password</font></label>
                            <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword3"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-10 offset-sm-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label class="form-check-label" for="gridCheck1">
                                <font color="white">Save your login?</font>
                                </label>
                            </div>
                            </div>
                    </div>
                    </form>
                    <div class="d-grid gap-2 col-4 mx-auto"><br></br>
                        <button type="button" className="btn btn-success m2"
                            onClick={() => setPage('Categories')}>
                            <i class="bi bi-controller">Login</i>
                        </button>
                    </div>
            </div>
        </div>
        
    )
  }
  
  export default NavBar