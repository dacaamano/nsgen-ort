# NS+Gen v4.0
### Generador Visual de Diagramas Nassi-Schneidermann

**Proyecto educativo — ORT Argentina · Analista de Sistemas 2026**  
Desarrollado por Daniel Antonio Caamaño · Licencia MIT

---

## ¿Qué es NS+Gen?

NS+Gen es una aplicación web para crear diagramas Nassi-Schneidermann (NS+) de forma visual e interactiva. Funciona completamente en el navegador, sin instalación ni conexión a internet tras la primera carga.

Fue desarrollado como herramienta de apoyo para la materia **Fundamentos de Programación** de ORT Argentina, y donado a la institución para uso educativo libre.

---

## Acceso

**URL pública:** `https://dacaamano.github.io/nsgen-ort/ns_gen_v3.html`

---

## Funcionalidades v3.0

### Diagrama
- Todos los bloques NS+: Entrada/Salida, Instrucción, Asignación, Comentario, IF, SWITCH, WHILE, DO-WHILE, FOR, FOREACH, Llamada, Return
- Inserción con zonas **+ antes** y **+ después** de cada bloque
- Mover y copiar bloques dentro del diagrama
- Numeración secuencial de bloques (modo edición)
- Panel izquierdo de métodos ocultable con botón ☰

### Declaraciones de Variables
- Selector de tipo con 13 opciones (int, double, float, long, short, byte, char, boolean, String y arrays)
- Campo de nombre con ancho auto-ajustable al contenido
- Validación en tiempo real: amarillo = declarada pero no usada · rojo = usada pero no declarada

### Búsqueda
- Resaltado en tiempo real de bloques y declaraciones coincidentes
- Borde naranja en bloques · texto en negrita · contador de resultados

### Validación
- Bloques sin condición / vacíos
- Variables con tipo inválido, declaradas pero no usadas, usadas pero no declaradas

### Presentación y PNG
- Modo Presentación limpio sin herramientas de edición
- Toggle de Comentarios en presentación
- PNG de alta resolución del diagrama completo con timestamp en el nombre

### Otros
- Guardar/Cargar proyectos `.nsgen` · Autoguardado · Historial
- Tema claro / oscuro · PWA instalable · 100% offline

---

## Tecnologías

HTML5 · CSS3 · JavaScript vanilla · html2canvas (solo para PNG)

---

## Licencia

MIT License — Código abierto, libre uso educativo.
