// config.js: all clinic data and texts that the clinic may ask to change.
// Comments are in Spanish on purpose: this is the file a future maintainer will edit.
//
// ============================================================================
//  DATOS DE LA CLÍNICA
//  Este es el ÚNICO archivo que hay que tocar para cambiar teléfono, horario,
//  dirección, tratamientos o los textos del chat.
//  Reglas para editar sin romper nada:
//   - Cambie solo el texto que está entre comillas "...".
//   - No borre las comas del final de cada línea ni las llaves { } o corchetes [ ].
//   - Lo que pone "TODO" está pendiente de confirmar por la clínica.
// ============================================================================

window.BADADENT = {

  // --------------------------------------------------------------------------
  // NOMBRE
  // --------------------------------------------------------------------------
  clinica: {
    nombre: "Clínica Dental Badadent",   // Nombre que se muestra en la web
    marca: "BADAdent",                    // Logotipo en texto (cabecera)
    lema: "Clínica dental · Badalona",    // Texto pequeño bajo el logotipo
    anosExperiencia: "Más de 20 años",    // Frase de la portada
  },

  // --------------------------------------------------------------------------
  // TELÉFONOS
  // --------------------------------------------------------------------------
  telefono: {
    visible: "931 78 26 63",   // Cómo se muestra en pantalla (con espacios)
    enlace: "+34931782663",    // Para el botón "Llamar": sin espacios, con +34
  },

  // Número de WhatsApp al que llegan los mensajes del chat.
  // Formato: solo números, con el prefijo 34 delante y sin "+" ni espacios.
  // Ejemplo: "34600000000"
  // TODO: PENDIENTE. La clínica debe confirmar el número de WhatsApp (de momento
  // solo conocemos el fijo 931 78 26 63, que puede no tener WhatsApp).
  whatsapp: "TODO",

  // --------------------------------------------------------------------------
  // DIRECCIÓN
  // --------------------------------------------------------------------------
  direccion: {
    calle: "Carrer de Ponent, 160",
    codigoPostal: "08912",
    ciudad: "Badalona",
    provincia: "Barcelona",
    pais: "ES",
    // Enlace del botón "Cómo llegar" (abre Google Maps en otra pestaña).
    // No se incrusta ningún mapa en la web.
    enlaceMapa: "https://www.google.com/maps/search/?api=1&query=Carrer+de+Ponent+160+08912+Badalona",
  },

  // --------------------------------------------------------------------------
  // HORARIO
  // "texto" es lo que se lee en la web. "abre" y "cierra" (formato 24 h, HH:MM)
  // se usan para Google; si cambia el horario, cambie las dos cosas.
  // Si un día está cerrado, ponga abre: null y cierra: null.
  // --------------------------------------------------------------------------
  horario: [
    { dias: "Lunes a viernes", texto: "9:00 a 20:00",  abre: "09:00", cierra: "20:00", codigos: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
    { dias: "Sábados",         texto: "9:00 a 13:30",  abre: "09:00", cierra: "13:30", codigos: ["Saturday"] },
    { dias: "Domingos",        texto: "Cerrado",       abre: null,    cierra: null,    codigos: ["Sunday"] },
  ],

  // --------------------------------------------------------------------------
  // DATOS LEGALES (pie de página y Aviso legal)
  // TODO: PENDIENTE. Todos estos datos los debe facilitar la clínica.
  // --------------------------------------------------------------------------
  legal: {
    razonSocial: "TODO: nombre legal de la empresa o titular",
    nif: "TODO: NIF / CIF",
    email: "TODO: correo electrónico de contacto",
    registroSanitario: "TODO: número de registro sanitario",
    colegioProfesional: "TODO: Colegio de Odontólogos y Estomatólogos de Cataluña (confirmar)",
    directorMedico: "TODO: nombre del director/a médico/a",
    numeroColegiado: "TODO: número de colegiado/a del director/a médico/a",
  },

  // Dominio de la web, para Google y redes sociales.
  // TODO: PENDIENTE. Ejemplo: "https://www.badadent.es" (sin barra al final).
  dominio: "TODO",

  // --------------------------------------------------------------------------
  // OFERTA DE PORTADA
  // Solo la que ha aprobado la clínica. No añadir otras ofertas ni precios.
  // --------------------------------------------------------------------------
  oferta: "La primera visita es gratis",

  // --------------------------------------------------------------------------
  // TRATAMIENTOS (tarjetas de "Nuestros tratamientos")
  //  - titulo: nombre de la tarjeta
  //  - texto: una sola frase sencilla
  //  - icono: nombre del archivo SVG en assets/img/icons (sin ".svg")
  //  - motivoChat: motivo que se marca en el chat al pulsar la tarjeta
  //    (debe coincidir con uno de los "motivos" del chat, más abajo)
  //
  // IMPORTANTE (publicidad sanitaria): no usar "especialistas", ni prometer
  // resultados ("en 24 horas", "sin dolor", "X tonos en una sesión", "la mejor...").
  // TODO: PENDIENTE. La clínica debe validar todos estos textos.
  // --------------------------------------------------------------------------
  tratamientos: [
    { titulo: "Revisiones y limpieza",     texto: "Una revisión completa y una limpieza para cuidar su boca.", icono: "revision",   motivoChat: "Revisión y limpieza" },
    { titulo: "Implantes",                 texto: "Dientes fijos con prótesis sobre implantes.",               icono: "implante",   motivoChat: "Implantes" },
    { titulo: "Prótesis y dentaduras",     texto: "Para volver a comer y sonreír con total comodidad.",        icono: "protesis",   motivoChat: "Prótesis" },
    { titulo: "Encías",                    texto: "Tratamiento de las encías (periodoncia).",                  icono: "encias",     motivoChat: "Encías" },
    { titulo: "Endodoncia",                texto: "Para salvar la muela y quitar el dolor.",                   icono: "endodoncia", motivoChat: "Endodoncia" },
    { titulo: "Estética y blanqueamiento", texto: "Aclare su sonrisa.",                                        icono: "estetica",   motivoChat: "Estética" },
    { titulo: "Niños y nietos",            texto: "Odontopediatría: trato cariñoso para los más pequeños.",    icono: "ninos",      motivoChat: "Niños" },
    { titulo: "Urgencias",                 texto: "Atendemos las urgencias el mismo día.",                     icono: "urgencias",  motivoChat: "urgencia" }, // abre el camino de urgencia del chat
  ],

  // --------------------------------------------------------------------------
  // BLOQUE DE URGENCIAS (recuadro rojo)
  // --------------------------------------------------------------------------
  urgencias: {
    titulo: "¿Tiene dolor o una urgencia?",
    texto: "Atendemos las urgencias el mismo día. Llámenos ahora y le indicamos cómo ayudarle.",
    botonLlamar: "Llamar: 931 78 26 63",  // Si cambia el teléfono, cámbielo aquí también
    botonChat: "Avisar por chat",
  },

  // --------------------------------------------------------------------------
  // CHAT PARA PEDIR CITA
  // Preguntas y respuestas del chat, en orden. {nombre}, {motivo}, {franja} y
  // {telefono} se sustituyen por lo que contesta el paciente: no los borre.
  // --------------------------------------------------------------------------
  chat: {
    titulo: "Badadent",
    subtitulo: "Pida su cita aquí",

    // Paso 1
    saludo: "Hola, buenos días. Soy el asistente de Badadent. ¿En qué le puedo ayudar?",
    opcionesInicio: {
      cita: "Quiero pedir cita",
      urgencia: "Tengo una urgencia",
      pregunta: "Tengo una pregunta",
    },

    // Paso 2
    preguntaMotivo: "Perfecto, le ayudo con la cita. ¿Por qué motivo viene?",
    motivos: [
      "Primera visita gratis",
      "Revisión y limpieza",
      "Implantes",
      "Prótesis",
      "Encías",
      "Endodoncia",
      "Estética",
      "Niños",
      "Otro",
    ],

    // Paso 3
    preguntaNombre: "¿Cómo se llama usted?",
    placeholderNombre: "Su nombre",

    // Paso 4
    preguntaTelefono: "Encantados, {nombre}. ¿Cuál es su número de teléfono?",
    placeholderTelefono: "Su teléfono",
    errorTelefono: "Ese número no parece correcto. Escriba los 9 números de su teléfono, por ejemplo 600 000 000.",

    // Paso 5
    preguntaFranja: "¿Prefiere por la mañana o por la tarde?",
    franjas: [
      { boton: "Por la mañana", mensaje: "por la mañana" },
      { boton: "Por la tarde",  mensaje: "por la tarde" },
      { boton: "Me da igual",   mensaje: "cualquier hora" },
    ],

    // Paso 6: resumen y envío
    resumen: "Este es su mensaje. Pulse el botón verde y se abrirá WhatsApp con el mensaje ya escrito. Solo tiene que pulsar enviar.",
    botonEnviar: "Enviar por WhatsApp",
    plantillaMensaje: "Hola, soy {nombre}. Quiero pedir cita para: {motivo}. Prefiero {franja}. Mi teléfono es {telefono}.",

    // Camino "Tengo una urgencia": primero el botón de llamar
    textoUrgencia: "Si tiene dolor o una urgencia, lo más rápido es llamarnos. Le atendemos el mismo día.",
    botonUrgenciaLlamar: "Llamar ahora: 931 78 26 63",
    textoUrgenciaWhatsapp: "Si no puede llamar, también puede avisarnos por WhatsApp.",
    motivoUrgencia: "una urgencia",

    // Camino "Tengo una pregunta"
    // TODO: confirmar con la clínica qué se hace con las preguntas (¿WhatsApp con texto libre?).
    textoPregunta: "Escriba su pregunta y se la enviamos por WhatsApp.",
    placeholderPregunta: "Su pregunta",
    plantillaPregunta: "Hola, soy {nombre}. Tengo una pregunta: {pregunta}",

    // Botones de la cabecera del chat
    botonReiniciar: "Empezar de nuevo",
    botonCerrar: "Cerrar el chat",
    botonAtras: "Cambiar la respuesta anterior",

    // Límites de longitud de lo que escribe el paciente
    maxNombre: 60,
    maxPregunta: 500,
  },
};
