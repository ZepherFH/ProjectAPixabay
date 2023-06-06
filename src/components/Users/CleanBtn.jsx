import Swal from "sweetalert2"

const LimpiarLista = ({setlistUser}) => {

    const clearList = async () => {
        const { isConfirmed } = await Swal.fire({
            title: '¿Estas seguro?',
            text: "No podras recuperarlas",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminalas',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        })
        if (isConfirmed) {
            localStorage.setItem("listUser", JSON.stringify([]));
            setlistUser([])
        }
    }

    return (
        <button
            className="btn btn-danger me-1"
            onClick={clearList}
            type="button"
        >
            <i className="bi bi-trash2">Borrar</i>
        </button>
    )
}

export default LimpiarLista