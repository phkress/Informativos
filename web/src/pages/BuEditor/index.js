import { Table, Card, Button } from 'react-bootstrap/'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { useState } from 'react';

function BuEditor() {
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

    const [text, setText] = useState({ text: '' });
    const [editor, setEditor] = useState({ tipo: '', titulo: '', text: '', index: '' })

    function handleChange(value) {
        setText({ text: value });
    }

    const handlesEditor = (item, i) => {
        handleChange(item.texto);
        setEditor({ ...item, index: i })
    }
    const handlesSave = () => {
        var itemList = buItem.tratativas;
        itemList[editor.index] = { tipo: editor.tipo, titulo: editor.titulo, texto: text.text }
        setBuItem({ ...buItem, tratativas: itemList })
        handleChange('');
    }

    return (
        <>

            <h1>Bu {buItem.bu}</h1>
            <h2>Empresa: {buItem.empresa}</h2>
            <h2>Link de acesso localhost{buItem.link}</h2>
            <br />
            {text.text !== "" ?
                <div className="editor">
                    <div className="text-editor"
                        dangerouslySetInnerHTML={{ __html: text.text }}>
                    </div>
                    <ReactQuill
                        value={text.text}
                        onChange={handleChange}
                        modules={modulo}
                    />
                    <Button onClick={() => { handlesSave() }}>Salvar</Button>
                </div>
                :
                <div>
                    <br />
                    <br />
                    <Card>
                        <Card.Body>{buItem.procedimentos}</Card.Body>
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
                </div>
            }
        </>
    );
}

export default BuEditor;


