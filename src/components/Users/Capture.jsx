import AddBtn from "./Add";
import InitBtn from "./InitBtn";
import CleanBtn from "./CleanBtn";
import UserList from "./UserList";


const Capture = ({
    setPage,
    listUser,
    setlistUser,
}) => {

    return (
        <div class="containerC">

            <div className="row">
                <div className="col text-start">
                    <h1>User Panel</h1>
                </div>
                <div className="col text-end mt-1">
                    <CleanBtn
                        setlistUser={setlistUser}
                    />
                    <AddBtn
                        listUser={listUser}
                        setlistUser={setlistUser}
                    />
                    <InitBtn
                        setPage={setPage}
                    />
                </div>
            </div>

            <hr />
            {
                listUser.length === 0 && (
                    <div className="text-center">
                        <h3>User list empty</h3>
                        Add User.
                    </div>
                )
            }
            {
                listUser.map((Question) => (
                    <UserList
                        Question={Question}
                        listUser={listUser}
                        setlistUser={setlistUser}
                    />
                ))
            }


            <hr />

            <div className="col text-end">
                <CleanBtn
                    setlistUser={setlistUser}
                />
                <AddBtn
                    listUser={listUser}
                    setlistUser={setlistUser}
                />
                <InitBtn
                    setPage={setPage}
                />
            </div>

        </div>
    )
}

export default Capture