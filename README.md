# Models RunTime

Este es un proyecto simple consumir API's de Models de propensión.

## Instalación

Para instalar el proyecto, se debe ejecutar el siguiente comando:

```bash
  git clone git@github.com:nkaoz/wsk-template.git {NOMBRE_PROYECTO}  && cd {NOMBRE_PROYECTO} && npm install
```

## Proyecto

Crear package en Adobe I/O Runtime

```bash
  wsk package create {NOMBRE_PROYECTO}
```

Crear action

```bash
  #worker
  wsk action create {NOMBRE_PROYECTO}/worker --kind nodejs:14 --web true worker.zip
  #action
  wsk action create {NOMBRE_PROYECTO}/action --kind nodejs:14 --web true action.zip
  #cors
  wsk action create {NOMBRE_PROYECTO}/handleCorsRequest --web true -a web-custom-options true --kind nodejs:14 cors-action.zip
```

Crear API

```bash
  wsk api create /{NOMBRE_PROYECTO} /worker post {NOMBRE_PROYECTO}/action --response-type http
  wsk api create /{NOMBRE_PROYECTO} /worker options {NOMBRE_PROYECTO}/handleCorsRequest --response-type http
```

## Ejecución

Borrar las acciones de tipo zip ejemplo:

```bash
  npm run clean:zip # clean zip file
```

Generar las acciones de tipo worker:

```bash
  npm run build:worker # build worker
```

Generar las acciones de action / invoker adobe

```bash
  npm run build:action # build action
```

Generar acciones de tipo action cors:

```bash
  npm run build:cors # build cors
```

Generar todas las acciones:

```bash
  npm run build # build all
```

Publicar todas las acciones:

```bash
  npm run deploy # deploy all
```

Publicar todas las acciones de tipo worker:

```bash
  npm run deploy:worker # deploy worker
```

Publicar todas las acciones de tipo action:

```bash
  npm run deploy:action # deploy action
```

publicar todas las acciones de tipo cors:

```bash
  npm run deploy:cors # deploy cors
```
