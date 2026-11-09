# Web de la Clínica Dental Badadent (Badalona)

Web sencilla, con letra grande, para que los pacientes (sobre todo las personas mayores) puedan pedir cita solos. El chat hace unas preguntas y al final abre WhatsApp con el mensaje ya escrito.

> **Borrador.** Esta guía se completará al terminar la web. Las partes marcadas con *(pendiente)* aún no existen.

---

## 1. Cómo está hecha (en pocas palabras)

- Es una web **estática**: solo archivos HTML, CSS y JavaScript. No hay base de datos ni programas que instalar.
- **No guarda datos de los pacientes.** El chat solo prepara un mensaje que el propio paciente envía por WhatsApp.
- **No usa cookies** ni estadísticas de terceros, por eso no necesita aviso de cookies.
- Se publica en **Netlify** a partir de este repositorio de **GitHub**: cada cambio que se guarda en GitHub se publica solo en un par de minutos.

## 2. Dónde está cada cosa

| Carpeta o archivo | Para qué sirve |
|---|---|
| `index.html` | Página principal |
| `aviso-legal.html` | Aviso legal |
| `privacidad.html` | Política de privacidad |
| `404.html` | Página que sale si una dirección no existe |
| `assets/js/config.js` | ★ **Datos de la clínica**: teléfono, WhatsApp, horario, dirección, tratamientos y textos del chat |
| `assets/css/` | Colores, tamaños y aspecto de la web |
| `assets/img/clinic/` | Fotos de la clínica preparadas para la web (se generan solas) |
| `photos-source/` | ★ **Fotos originales** de la clínica. No se editan ni se borran |
| `scripts/` | Herramienta para preparar las fotos *(pendiente)* |
| `netlify.toml` | Configuración de Netlify y de seguridad |
| `AGENTS.md` | Instrucciones técnicas completas del proyecto |

## 3. Cambiar teléfono, horario, dirección o textos

Casi todo se cambia en **un solo archivo**: `assets/js/config.js`.

1. En GitHub, abra el archivo `assets/js/config.js`.
2. Pulse el icono del lápiz (**Edit this file**).
3. Busque el dato que quiere cambiar. Cada apartado tiene una explicación en español.
4. Cambie **solo el texto que está entre comillas** `"..."`. No borre comas, llaves `{ }` ni corchetes `[ ]`.
5. Abajo, pulse **Commit changes** y escriba una frase corta en inglés que explique el cambio (por ejemplo: `Update Saturday opening hours`).
6. Espere un par de minutos y recargue la web para comprobarlo.

Algunos textos también están escritos en `index.html` para que Google los lea. Están marcados con un comentario `<!-- EDITAR: ... -->`. Si cambia un dato en `config.js`, busque también ese comentario *(pendiente: lista exacta de lugares)*.

**Ojo con la publicidad sanitaria:** no escriba "especialistas", ni prometa resultados ("sin dolor", "en 24 horas", "la mejor clínica"), ni añada precios u ofertas que la clínica no haya aprobado.

## 4. Añadir o cambiar una foto *(pendiente)*

1. Copie la foto original (JPEG) en la carpeta `photos-source/` con un nombre claro.
2. Ejecute la herramienta de `scripts/` para generar las versiones para la web *(se explicará cuando exista)*.
3. Añada la foto en `index.html` con una descripción en español (texto `alt`).

No publique fotos en las que se vean pacientes ni pantallas o papeles con datos de pacientes.

## 5. Ver la web en su ordenador *(pendiente)*

Se explicará cómo abrirla en local para revisar cambios antes de publicarlos.

## 6. Publicar

La web se publica sola: cada cambio guardado en la rama `main` de GitHub lo publica Netlify automáticamente *(pendiente de configurar)*.

Si algo sale mal, en Netlify se puede volver a una versión anterior: **Deploys** → elegir una versión antigua → **Publish deploy**.

## 7. Cuentas y accesos *(pendiente)*

| Servicio | Para qué | Quién lo gestiona |
|---|---|---|
| GitHub | Guarda el código de la web | TODO |
| Netlify | Publica la web | TODO |
| Dominio | La dirección de la web (TODO: dominio) | TODO |
| WhatsApp Business | Recibe los mensajes del chat | La clínica |

Las contraseñas **no** se guardan en este repositorio.

## 8. Datos pendientes de la clínica

- Número de WhatsApp.
- Número de registro sanitario.
- Datos legales para el Aviso legal (titular, NIF, correo, colegio profesional y número de colegiado del director/a médico/a).
- Revisión de los textos de los tratamientos.
- Qué fotos se pueden publicar.
- Dominio.
