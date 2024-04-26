import './Select.css'

export default function Select(props) {
    const {
        dados,
        setValor,
        valor
    } = props
    return (
        <select value={valor} onChange={(e) => setValor(e.target.value)}>
            <option value=''></option>
            {dados.map((opt, indice) =>
                <option key={indice} value={opt.value}>{opt.label}</option>
            )}
        </select>
    );
}