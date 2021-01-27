import { Table, Card, Button, InputGroup, FormControl, Form } from 'react-bootstrap/'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api'
import './styles.css';

function BuEditor() {
    const [text, setText] = useState({ text: '' });
    const [editor, setEditor] = useState({ tipo: '', titulo: '', text: '', index: undefined })
    const [buItem, setBuItem] = useState({
        bu: 'WIPI Corporativo',
        empresa: 'WIPI',
        procedimentos: 'textinho',
        link: '/wipi/corporativo',
        tratativas:
            [
                { tipo: 'financeiro', titulo: 'teste-Titulo', texto: 'teste-Texto' },
                { tipo: 'comercial', titulo: 'teste-Titulo', texto: 'teste-Texto' }
            ]
    })
    const { id } = useParams();

    const modulo = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'size': ['small', false, 'large', 'huge'] }],
            [{ 'font': [] }],
            ['bold', 'italic', 'underline', 'strike', 'link', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
            [{ 'color': [] }, { 'background': [] }, 'image', 'code-block'],
            ['clean']
        ]
    }
    useEffect(() => {
        loadBu();
        // eslint-disable-next-line
    }, []);

    async function loadBu() {
        const response = await api.get(`/bu/${id}`);
        setBuItem(response.data);
    }
    async function saveBu() {
        await api.put(`/bu/${id}`, buItem);
    }

    function handleChange(value) {
        setText({ text: value });
    }
    const handlesEditor = (item, i) => {
        handleChange(item.texto);
        setEditor({ ...item, index: i })
    }
    const handlesEditorProcedimento = () => {
        handleChange(buItem.procedimentos);
    }
    const handlesEditorTitulo = (event) => {
        const item = editor;
        item['titulo'] = event.target.value;
        setEditor(item)
    }
    const handlesEditorTipo = (event) => {
        setEditor({ ...editor, ['tipo']: event.target.value })
        console.log(editor)
    }
    const handlesSave = () => {
        if (editor.index !== undefined) {
            editArray();
        } else {
            editTexto();
        }
        saveBu();
        handleChange('');
    }
    const handlesCancel = () => {
        setEditor({ tipo: '', titulo: '', text: '', index: undefined });
        handleChange('');
    }
    const handlesAdd = () => {
        handleChange('Coloque o texto aqui!');
        setEditor({ tipo: 'financeiro', titulo: 'Escreva o titulo aqui', text: '', index: buItem.tratativas.length });
    }
    const editArray = () => {
        var itemList = buItem.tratativas;
        itemList[editor.index] = { tipo: editor.tipo, titulo: editor.titulo, texto: text.text }
        setBuItem({ ...buItem, tratativas: itemList })
    }
    const editTexto = () => {
        const texto = text.text;
        var item = buItem;
        item['procedimentos'] = texto;
        setBuItem(item);
    }

    return (
        <>
            <h1>Bu {buItem.bu}</h1>
            <h2>Empresa: {buItem.empresa}</h2>
            <h2>Link de acesso localhost{buItem.link}</h2>
            <br />
            {text.text !== "" ?
                <div >
                    {editor.index !== undefined ?
                        <div>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Titulo</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Titulo do procedimento"
                                    aria-label="UsernTituloame"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    onChange={handlesEditorTitulo}
                                    defaultValue={editor.titulo}
                                />
                            </InputGroup>
                            <Form>
                                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                                    <Form.Label>Categoria</Form.Label>
                                    <Form.Control as="select" size="sm"
                                        onChange={handlesEditorTipo}
                                        value={editor.tipo}
                                        custom
                                    >
                                        <option>financeiro</option>
                                        <option>comercial</option>
                                        <option>tecnico</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </div>
                        : ""}
                    <Card>
                        <Card.Body dangerouslySetInnerHTML={{ __html: text.text }}></Card.Body>
                    </Card>
                    <div className="editorTexto">
                        <ReactQuill
                            value={text.text}
                            onChange={handleChange}
                            modules={modulo}
                        />
                    </div>

                    <Button variant="success" onClick={() => { handlesSave() }}>Salvar</Button>{' '}
                    <Button variant="danger" onClick={() => { handlesCancel() }}>Cancelar</Button>
                </div>
                :
                <div>
                    <br />
                    <br />
                    <Card>
                        <Card.Body className="pointer" onClick={() => { handlesEditorProcedimento() }} dangerouslySetInnerHTML={{ __html: buItem.procedimentos }}></Card.Body>
                    </Card>
                    <br />
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Campo</th>
                                <th>Titulo</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buItem.tratativas.map((item, i) =>
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{item.tipo}</td>
                                    <td>{item.titulo}</td>
                                    <td className="pointer" onClick={() => { handlesEditor(item, i) }}>Editar</td>
                                </tr>)}
                        </tbody>
                    </Table>
                    <Button onClick={() => handlesAdd()}>Adicionar</Button>
                </div>
            }
        </>
    );
}

export default BuEditor;


