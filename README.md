## Pre-requerimientos

`Git >=V2.46.0`,
`Node >=v20.18.0`

## Instalación Win

Git lo puedes descargarla en la página oficial de git `https://git-scm.com/downloads/win` y node `https://nodejs.org/en/`

## Instalacion Linux/Unix

Aqui debes instalar debes la consola bash:

```bash
sudo apt-get install git
```

o

Puede buscar el comando desde la pagina oficial

`https://git-scm.com/downloads/linux`

Con node puede usar instalar el package con nvm que esta en el enlace alli esta la instrucción para instalar recomendacion que sea la version LTS mas estable que exista

`https://nodejs.org/en/download/package-manager`

## Instrucción

Primero debes clonar la app con git en la ruta de tu preferencia:

`git clone https://github.com/jsha64/frontend-challenge-base.git`

Después de clonar el repositorio entrar al directorio `cd frontend-challenge-base/` abre la consola en esa ruta e instala las dependencias de npm con:

`npm install`

## Configuración de firebase

1. Ve a la Consola de Firebase.

2. Haz clic en "Agregar proyecto".

3. Escribe un nombre para tu proyecto y haz clic en "Continuar".

4. Desactiva "Google Analytics" (opcional) y haz clic en "Crear proyecto".

5. Una vez que el proyecto esté listo, haz clic en "Continuar".

## Habilitar Authentication

1. En la consola de Firebase, ve al menú "Build" > "Authentication".

2. Haz clic en el botón "Comenzar".

3. En la pestaña "Métodos de inicio de sesión", habilita:

   - Correo electrónico y contraseña:

     - Haz clic en el lápiz (icono de edición).

     - Activa el interruptor "Habilitado" y guarda los cambios.

## Obtener la configuración del proyecto Firebase

1. En la consola de Firebase, haz clic en el ícono de configuración (⚙️) en la barra lateral y selecciona "Configuración del proyecto".

2. Ve a la pestaña "Tus apps".

3. Haz clic en "Agregar app" y selecciona "App web".

4. Ingresa un nombre para tu app y haz clic en "Registrar app".

5. Copia el bloque de configuración que Firebase que aparece alli.

En la ruta `cd frontend-challenge-base/` Crea un archivo un archivo `firebase.js` para la configurar firebase en la raiz de tu proyecto pega el bloque de configuracion respectivos en `firebaseConfig`

```javascript
import { initializeApp } from "firebase/app";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la instancia de autenticación
const auth = getAuth(app);

export {
  auth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
};
```

Abre la terminal o consola en la raiz del proyecto y escribir el comando que levanta el servidor local:

`npm run dev`

Abre [http://localhost:3000](http://localhost:3000) para que el navegador muestre los resultados.
