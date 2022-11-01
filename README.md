# Punto de Apoyo

## About

Webapp hecha con React, como proyecto del curso de React de Coderhouse.
El proyecto es un simulador de eCommerce que utiliza [Cloud Firestore](https://firebase.google.com/products/firestore) como base de datos para almacenar información de los productos, categorías y pedidos realizados.

La aplicación está hosteada en [Firebase Hosting](https://firebase.google.com/products/hosting) y se puede acceder desde [este link](https://punto-de-apoyo-ca046.web.app/).

## Estructura

En `Components` se encuentran todos los componentes que construyen la aplicación, agrupados según su funcionalidad e interdependencia.

En `Shared` y `UI` están los componentes reutilizables que se importan en distintos componentes a lo largo de toda la aplicación

En `services` se encuentran todos los servicios que van a ser consumidos por distintos componentes a lo largo de la aplicación.

En `context` se encuentra el context del carrito que mantiene el estado del mismo en toda la apliación.

### Librerias utilizadas

- [react-router-dom](https://github.com/remix-run/react-router#readme) para la navegación de la apliación.
- [MaterialUI](https://mui.com/) para los estilos de algunos componentes.
- [uiball/loaders](https://uiball.com/loaders/) para el loader cuando se hacen llamadas a la DB.
