import Swal from "sweetalert2"
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

const AddBtn = ({ listUser, setlistUser }) => {

    const NewModal = async () => {
        const { value } = await Swal.fire({
            title: "Login Information",
            html: `
                <input 
                    type="text"
                    id="User" 
                    name="User" 
                    placeholder="User"
                    class="swal2-input"
                />
                <input 
                    type="text" 
                    id="password" 
                    name="password"
                    placeholder="Password"
                    class="swal2-input"
                />
                <select id="passwordSelect" class="swal2-input">
                    <option value="">Selecciona la contraseña correcta</option>
                    <option value="password">Opcion 1</option>
                </select>
            `,
            confirmButtonText: "Add",
            showCancelButton: true,
            cancelButtonText: "Cancel",
            focusConfirm: false,
            preConfirm: () => {
                const User = Swal.getPopup().querySelector("#User").value;
                const password = Swal.getPopup().querySelector("#password").value;
                const selected = Swal.getPopup().querySelector("#passwordSelect").value;

                if (!User || !password || !answer2 || !answer3 || !selected) {
                    Swal.showValidationMessage("Porfavor añade toda la informacion");
                }

                return { User, password, answer2, answer3, selected };
            },
        })

        
        if (!value.User || !value.password || !value.answer2 || !value.answer3 || !value.selected) return;

        let truePassword;
        if (value.selected === 'password') {
            truePassword = value.password;
          }
        const newList = [
            ...listUser,
            {
                id: uuidv4(),
                User: value.User,
                password: value.password,
                answerTrue: truePassword,
            }
        ]

        localStorage.setItem("listUser", JSON.stringify(newList));
        setlistUser(newList);
    }

    return (
        <button
            type="button"
            className="btn btn-success me-1"
            onClick={NewModal}
        >
            <i className="bi bi-plus-circle"> Add</i>
        </button>
    )
}

export default AddBtn