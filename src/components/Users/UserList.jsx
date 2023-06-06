import Swal from "sweetalert2"

const UserList = ({
    User,
    listUser,
    setlistUser,
}) => {
    const { id, User, password, answerTrue } = User;

    const deleteUserList = () => {
        const newList = listUser.filter(User => User.id !== id)
        localStorage.setItem("listUser", JSON.stringify(newList));
        setlistUser(newList);
    }

    const editUserList = async () => {
        const { value } = await Swal.fire({
            title: "Informacion de la User",
            html: `
                <input 
                    type="text"
                    id="User" 
                    name="User" 
                    placeholder="User"
                    class="swal2-input"
                    value="${User}"
                />
                <input 
                    type="text" 
                    id="password" 
                    name="password"
                    placeholder="Opcion 1"
                    class="swal2-input"
                    value="${password}"
                />
                <select id="passwordSelect" class="swal2-input">
                    <option value="">Selecciona la respuesta correcta</option>
                    <option value="password">Opcion 1</option>
                </select>
            `,
            confirmButtonText: "Continue",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            focusConfirm: false,
            preConfirm: () => {
                const User = Swal.getPopup().querySelector("#User").value;
                const password = Swal.getPopup().querySelector("#password").value;
                const selected = Swal.getPopup().querySelector("#passwordSelect").value;

                if (!User || !password || !selected) {
                    Swal.showValidationMessage("Coloca toda la informacion");
                }

                return { User, password, selected };
            },
        })

        
        if (!value.User || !value.password || !value.selected) return;

        let truePassword;
        if (value.selected === 'password') {
            truePassword = value.password;
          }

        const newList= listUser.map((User) => {
            if(User.id === id){
                User.User = value.User;
                User.password = value.password;
                User.answerTrue = truePassword;
            }
            return User;
        })

        localStorage.setItem("listUser", JSON.stringify(newList));
        setlistUser(newList);
    }

    return (
        <div className="row text-center align-items-center mt-4">

            <div className="col">{User}</div>

            <div className="col-3 col-md-3">
                <strong>1.</strong> {password}<br />
            </div>

            <div className="col-3 col-md-3">{answerTrue}</div>

            <div className="col-4 col-md-2 btn-group btn-group-sm" role="group">

                <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={editUserList}
                >
                    <i class="bi bi-pencil-square">Editar</i>
                </button>
                
                <button
                    type="button"
                    class="btn btn-danger"
                    onClick={deleteUserList}
                >
                    <i class="bi bi-trash2-fill">Eliminar</i>
                </button>

            </div>

        </div >
    )
}

export default UserList