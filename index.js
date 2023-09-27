const Coche = {
    marca:"",
    modelo:"",
    matricula:"",
};

const Casa = {
    codPostal:"",
    calle:"",
    portal:"",
    piso:"",
};

const FullStackDeveloper = {
    lenguajes: [],
    proyectos: [],
};


const Perro = {
    nombre:"",
    raza:"",
    color:"",
    edad:"",
    ladrar() {
        console.log("guau");
    },
    popo() {
        return Math.random() * 3;
    },
};

const marcaPortatil = Portatil.marca;

const marcaPortatil2 = Portatil["marca"];

const grupos = Concierto.grupos;

const RGB = [Led.rojo, Led.verde, Led.azul];

Portatil.modelo = "P345";

Concierto.cartelera = ["Queen", "Guns N' Roses"]


Concierto.fecha = new Date("September 27, 2023");


Impresora.imprimiendo = {
    nombreArchivo: "",
    copias: "",
    numPaginas: "",
}


const Noticia = {
    titular: "",
    cuerpo: "",
}

const Persona = {
    nombre: "",
    apellidos: "",
    edad: "",
}

const Avion = {
    numPasajeros: "",
    despegar() {
        console.log("despegando");
    },
    volar() {
        console.log("llegando al destino");
    },
    aterrizar() {
        console.log("aterrizando");
    }
}


const Paquete = {
    contenido: [],
};


const Pais = {
    numHabitantes: "",
    continente: "",
    gentilicio: "",
}


let codError = O_Error.codigo;


const integrantes = Grupo.integrantes;


let nivelesTinta = Impresora.tinta;


const pixeles = Pantalla.pixeles;


const especificaciones = Movil["especificaciones"];


Grupo.numIntegrantes = 5;


Pantalla.dimensiones = "1920x1080";


Led.encendido = false

Movil.temperatura = "20º"


