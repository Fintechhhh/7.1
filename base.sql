CREATE TABLE categoria (
    id_categoria INTEGER PRIMARY KEY,
    nombre VARCHAR(50)
);

CREATE TABLE presupuesto (
    id_categoria INTEGER PRIMARY KEY,
    presupuesto_disponible DECIMAL(10,2),

    FOREIGN KEY(id_categoria)
    REFERENCES categoria(id_categoria)
);

CREATE TABLE historial_gasto (
    id_gasto INTEGER PRIMARY KEY AUTOINCREMENT,

    id_categoria INTEGER,

    monto DECIMAL(10,2),

    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(id_categoria)
    REFERENCES categoria(id_categoria)
);

INSERT INTO categoria VALUES (1,'Comida');
INSERT INTO categoria VALUES (2,'Transporte');
INSERT INTO categoria VALUES (3,'Entretenimiento');

INSERT INTO presupuesto VALUES (1,10000);
INSERT INTO presupuesto VALUES (2,8000);
INSERT INTO presupuesto VALUES (3,5000);