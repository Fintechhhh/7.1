# README - Sistema de Control de Gastos

## Descripción

Este proyecto consiste en una aplicación web para el registro manual de gastos personales, permitiendo controlar el presupuesto disponible de cada categoría. El sistema verifica que un nuevo gasto no supere el presupuesto asignado y actualiza automáticamente el saldo disponible.

---

## Objetivo

Registrar gastos manualmente en una aplicación móvil/web, actualizando el presupuesto disponible de la categoría correspondiente y verificando que el gasto ingresado no exceda el límite establecido por el usuario.

---

## Funcionalidades

* Selección de categoría.
* Registro de gastos.
* Validación del presupuesto disponible.
* Actualización automática del presupuesto.
* Historial de gastos realizados.
* Visualización del presupuesto restante por categoría.
* Mensajes de éxito y error.

---

## Estructura del Proyecto

```text
proyecto_gastos/
│
├── index.html
├── styles.css
├── script.js
└── base_datos.sql
```

### Archivos

#### index.html

Contiene la estructura de la interfaz de usuario:

* Menú de categorías.
* Campo para ingresar gastos.
* Botón para registrar gastos.
* Visualización del presupuesto disponible.
* Historial de gastos.

#### styles.css

Contiene los estilos visuales de la aplicación:

* Diseño moderno.
* Colores y tipografías.
* Distribución de componentes.
* Efectos visuales.

#### script.js

Contiene la lógica del sistema:

* Obtención de datos ingresados.
* Validación de presupuesto.
* Actualización de saldos.
* Gestión del historial.
* Mensajes al usuario.

#### base_datos.sql

Contiene la estructura de la base de datos y los datos iniciales.

---

## Flujo de Funcionamiento

### 1. Selección de Categoría

El usuario selecciona una categoría desde el menú desplegable.

Ejemplos:

* Comida
* Transporte
* Entretenimiento

### 2. Ingreso de Gasto

El usuario ingresa el monto del gasto y presiona el botón "Registrar gasto".

### 3. Validación

El sistema obtiene el presupuesto disponible de la categoría seleccionada y realiza la siguiente comparación:

```text
nuevo_gasto > presupuesto_disponible
```

#### Si la condición es verdadera

Se muestra el mensaje:

```text
El monto ingresado es mayor al presupuesto fijado.
Error, vuelva a ingresar otro monto.
```

No se realizan cambios en la base de datos.

#### Si la condición es falsa

Se continúa con el proceso.

### 4. Actualización de Presupuesto

Se calcula:

```text
presupuesto_disponible = presupuesto_disponible - nuevo_gasto
```

### 5. Registro de Historial

Se almacena el gasto realizado junto con:

* Categoría.
* Monto.
* Fecha.

### 6. Retorno al Usuario

Se actualiza el presupuesto visible y se muestra:

```text
Operación exitosa
```

---

## Requisito Técnico Implementado

El sistema verifica si el nuevo gasto supera el presupuesto disponible mediante una comparación directa:

```text
nuevo_gasto > presupuesto_disponible
```

Si el gasto supera el límite, la operación es cancelada.

Si el gasto es válido, se registra y se actualiza el presupuesto.

---

## Modelo de Base de Datos

### Tabla categoria

| Campo        | Tipo        |
| ------------ | ----------- |
| id_categoria | INTEGER     |
| nombre       | VARCHAR(50) |

### Tabla presupuesto

| Campo                  | Tipo          |
| ---------------------- | ------------- |
| id_categoria           | INTEGER       |
| presupuesto_disponible | DECIMAL(10,2) |

### Tabla historial_gasto

| Campo        | Tipo          |
| ------------ | ------------- |
| id_gasto     | INTEGER       |
| id_categoria | INTEGER       |
| monto        | DECIMAL(10,2) |
| fecha        | DATETIME      |

---

## Diagrama de Flujo Simplificado

```text
Usuario
   │
   ▼
Selecciona categoría
   │
   ▼
Ingresa gasto
   │
   ▼
Consultar presupuesto
   │
   ▼
¿Gasto > Presupuesto?
   │
 ┌─┴─┐
 │Sí │
 └─┬─┘
   ▼
Mostrar error
   │
   ▼
Fin

(No)

   ▼
Actualizar presupuesto
   │
   ▼
Guardar gasto
   │
   ▼
Actualizar historial
   │
   ▼
Mostrar éxito
```

---

## Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript
* SQLite (modelo de base de datos)

---

