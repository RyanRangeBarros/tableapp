import React from "react";
import Progressbar from './progress-bar.component';
import "./table.css";
import { BiTrash } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";


const Users = [
    {
        id: 1,
        selected: false,
        imagem: <img src="https://via.placeholder.com/40"></img>,
        name: "Ana Simmons",
        linguagem: "HTML, JS",
        empresa: "Intertico",
        estilo: "web, Ui/Ux",
        barra: <Progressbar bgcolor="green" progress='50' height={30} />
    },
    {
        id: 2,
        selected: false,
        imagem: <img src="https://via.placeholder.com/40"></img>,
        name: "Jessie Clarson",
        linguagem: "ASP, JS, C++",
        empresa: "Agoda",
        estilo: "Casa, Hotel",
        barra: <Progressbar bgcolor="orange" progress='30' height={30} />
    },
    {
        id: 3,
        selected: false,
        imagem: <img src="https://via.placeholder.com/40"></img>,
        name: "Lebron James",
        linguagem: "PHP, Laravel",
        empresa: "RoadGee",
        estilo: "Transporte",
        barra: <Progressbar bgcolor="red" progress='40' height={30} />
    },
    {
        id: 4,
        selected: false,
        imagem: <img src="https://via.placeholder.com/40"></img>,
        name: "Natali goodwin",
        linguagem: "Python, post",
        empresa: "The hill",
        estilo: "Insurence",
        barra: <Progressbar bgcolor="pink" progress='20' height={30} />
    },
    {
        id: 5,
        selected: false,
        imagem: <img src="https://via.placeholder.com/40"></img>,
        name: "Kevin flamel",
        linguagem: "HTML, CSS, Angular",
        empresa: "RoadGee",
        estilo: "Transporte",
        barra: <Progressbar bgcolor="#0dcaf0" progress='80' height={30} />
    },
];

class SelectTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            List: Users,
            MasterChecked: false,
            SelectedList: [],
        };
    }

    // Marcar/Desmarcar linhas da tabela
    onMasterCheck(e) {
        let tempList = this.state.List;
        // Marcar/Desmarcar todos os itens
        tempList.map((user) => (user.selected = e.target.checked));

        //Atualizar o botão
        this.setState({
            MasterChecked: e.target.checked,
            List: tempList,
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }
    onItemCheck(e, item) {
        let tempList = this.state.List;
        tempList.map((user) => {
            if (user.id === item.id) {
                user.selected = e.target.checked;
            }
            return user;
        });

        //Controlar o marcador principal
        const totalItems = this.state.List.length;
        const totalCheckedItems = tempList.filter((e) => e.selected).length;

        // atualizar 
        this.setState({
            MasterChecked: totalItems === totalCheckedItems,
            List: tempList,
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={this.state.MasterChecked}
                                            id="mastercheck"
                                            onChange={(e) => this.onMasterCheck(e)}
                                        />
                                    </th>
                                    <th scope="col">Nomes</th>
                                    <th scope="col">Empresa</th>
                                    <th scope="col">Progresso</th>
                                    <th style={{ paddingLeft: "4%"}} scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.List.map((user) => (
                                    <tr key={user.id} className={user.selected ? "selected" : ""}>
                                        <th scope="row">
                                            <input
                                                type="checkbox"
                                                checked={user.selected}
                                                className="form-check-input"
                                                id="rowcheck{user.id}"
                                                onChange={(e) => this.onItemCheck(e, user)}
                                            />
                                        </th>

                                        <td> <div class="container-table"> <div class="container-img">{user.imagem}</div>
                                            <div class="container-texto"><b>{user.name}</b>
                                                <p>{user.linguagem}</p></div></div></td>

                                        <td><b>{user.empresa}</b>
                                            <p>{user.estilo}</p></td>
                                        <td>{user.barra}</td>
                                        <td>
                                            <div class="butoes">
                                            <div class="arquivar">
                                            <button type="button"> <BiArchiveIn></BiArchiveIn></button>
                                            </div>
                                            <div class="editar">
                                            <button type="button"> <BiPencil></BiPencil></button>
                                            </div>
                                            <div class="excluir">
                                            <button type="button"> <BiTrash></BiTrash></button>
                                            </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectTableComponent;