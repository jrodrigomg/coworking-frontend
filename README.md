# Sistema de Gestión de Reservas para Espacios de Trabajo

Este proyecto es un **frontend** desarrollado con **React**, **TypeScript**, **Vite** y **Material-UI**, diseñado para gestionar reservas de salas y áreas de trabajo en un coworking. Permite crear, listar, eliminar reservas y navegar mediante **paginación**. Está preparado para ejecutarse localmente o mediante **Docker** usando **docker-compose**.

---

## Estructura del Proyecto y Descripción

```text
- docker-compose.yml         Configuración para docker-compose
- Dockerfile                 Dockerfile para construir la imagen del frontend
- eslint.config.js           Configuración de ESLint
- index.html                 Archivo HTML principal
- package.json               Dependencias y scripts del proyecto
- package-lock.json          Lockfile de dependencias
- public/                    Archivos estáticos
    - vite.svg               Logo de Vite
- README.md                  Este archivo de documentación
- src/                       Código fuente de la aplicación
    - api/                   Servicios y configuración de API
        - axiosConfig.ts     Configuración de Axios
        - espaciosService.ts Funciones para consumir API de espacios
        - reservasService.ts Funciones para consumir API de reservas
        - toastHelper.ts     Helper para mostrar notificaciones tipo toast
    - components/            Componentes reutilizables
        - Navbar.tsx         Barra de navegación
        - ReservaForm.tsx    Formulario de reservas
        - SpaceCard.tsx      Tarjeta de información de espacio
    - pages/                 Vistas principales
        - EspaciosList.tsx   Lista de espacios
        - EspacioDetalle.tsx Detalle de un espacio
        - ReservasList.tsx   Lista de reservas
    - store/                 Redux store y reducers
        - store.ts
        - espaciosReducer.ts
        - reservasReducer.ts
    - assets/                Recursos como imágenes
        - react.svg
    - App.tsx                Componente principal de la aplicación
    - main.tsx               Punto de entrada de React
    - App.css                Estilos principales
    - index.css              Estilos globales
- tsconfig.json             Configuración base de TypeScript
- tsconfig.app.json         Configuración específica del app
- tsconfig.node.json        Configuración para Node
- vite.config.ts            Configuración de Vite
```

## Correr proyecto

### Requisitos

- docker

### Levantar por medio de docker compose

1. Crear el archivo .env (se adjunta ejemplo en .env.example)

2. Correr el proyecto:

```
docker compose up --build
```

### Acceder a la plataforma

- Abrir el navegador en

```
http://localhost:3001
```
