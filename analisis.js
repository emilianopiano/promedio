//console.log(salarios);

// Analisis personal para Juanita

//const personaEnBusqueda = 'Juanita'

function encontrarPersona(personaEnBusqueda){ 

 return salarios.find(persona => persona.name == personaEnBusqueda);

}

//console.log(encontrarPersona('Juanita'));

function medianaPorPersona(nombrePersona) {

    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(elemento => elemento.salario);
    
    const medianaSalarios = PlatziMath.calcularMediana(salarios)
    return medianaSalarios;
    
}

function proyeccionPorPersona(nombrePersona){

    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;

        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
       
        porcentajesCrecimiento.push(porcentajeCrecimiento);
        
    }
    console.log(porcentajesCrecimiento);
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento)
    const ultimoSalario = trabajos[trabajos.length-1].salario;
    const nuevoSalario =  (ultimoSalario*medianaPorcentajesCrecimiento)+ultimoSalario;
    console.log(nuevoSalario);
}
const empresas = {};

    for (const persona of salarios) {
        
        for (const trabajo of persona.trabajos) {
            if (!empresas[trabajo.empresa]){
                empresas[trabajo.empresa] = {};
            }

            if(!empresas[trabajo.empresa][trabajo.year]){

                empresas[trabajo.empresa][trabajo.year] = [];
            }
            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
        }
    }

    console.log({empresas});

    function mediaEmpresaYear(nombre, year){

        if(!empresas[nombre]){
            console.warn('La empresa no existe')
        } else if(!empresas[nombre][year]){
            console.log('La empresa no dio salarios ese año');
             }
            else {
                return PlatziMath.calcularMediana(empresas[nombre][year]);
            }
             }




    

    

    
        