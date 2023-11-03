const CampoTexto = (props)=>{
    return(
        <div>
            <label>{props.label}</label>
            <input type="text" className="form-control"/>
        </div>
    );
}

export default CampoTexto;