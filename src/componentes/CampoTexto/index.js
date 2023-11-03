const CampoTexto = (props)=>{
    
    const AoDigitado = (evento)=>{
        props.AoAlterado(evento.target.value);
    }
    
    return(
        <div>
            <label>{props.label}</label>
            <input onChange = {AoDigitado} value = {props.valor} type="text" className="form-control"/>
        </div>
    );
}

export default CampoTexto;