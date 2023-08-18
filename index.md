<div align="center"> 

<style>
        body {
            background-color: white;
            color: black;
            transition: background-color 0.5s, color 0.5s; /* Esto añade una suave transición al cambiar los colores */
        }

        body.dark-mode {
            background-color: #1E2021;
            color: white;
            
        }
      body.dark-mode strong ,body.dark-mode h1, body.dark-mode h2, body.dark-mode h3, body.dark-mode h4, body.dark-mode h5, body.dark-mode h6 {
            color: white;
        }
        button{
         font-family: 'Roboto', sans-serif;
         font-size: 14px;
         font-weight: bolt;
         background: #1e90FF;
         width: 100px;
         padding: 7px;
         text-align: center;
         text-decoration: none;
         text-transform: uppercase;
         color: #fff;
         border-radius: 6px;
         cursor: pointer;
         box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }
    </style>



<script>
    function toggleDarkMode() {
        const body = document.body;
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
        } else {
            body.classList.add('dark-mode');
        }
    }
</script>

<img src='https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat'>

<img src='https://img.shields.io/github/stars/Fabian-Martinez-Rincon/Computabilidad-y-Complejidad'>
<img src='https://img.shields.io/github/repo-size/Fabian-Martinez-Rincon/Computabilidad-y-Complejidad'>



<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=1200&pause=1000&color=F78E23&center=true&width=635&lines=Computabilidad-y-Complejidad"/>



<a title="" href="https://cafecito.app/ei-materias"><img src="/Documentos/Cafecito.png" alt="" /></a>

</div>

> En este repo use como base las practicas de [fotscode](https://github.com/fotscode)

<div align='center'>
<a href='https://github.com/Fabian-Martinez-Rincon'><button style='background: #000000'>Github</button></a>
<button onclick="toggleDarkMode()">Oscuro</button>
<a href='https://www.youtube.com/@FabianMartinezRincon/featured'><button style='background: #800000'>Youtube</button></a>

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%"></div>

<p><img width="250" align='right' src="https://media.giphy.com/media/zPbnEgxsPJOJSD3qfr/giphy.gif"></p>

- Parcial 22/11/2023
- [Drive 2023](https://drive.google.com/drive/folders/1mNm_nba9il7KAgwj2YnQAqEJ9tF0PlKl)
- [Practica 1 Lógica y Cardinalidad](#práctica-1-logica-y-cardinalidad)
- [Practica 2 MT](#práctica-2-mt)
- [Practica 3 Equivalencia de Modelos](#práctica-3-equivalencia-de-modelos)
- [Practica 4 Caracterización de Lenguajes](#práctica-4-caracterización-de-lenguajes)
- [Practica 5 Reducibilidad](#práctica-5-reducibilidad)
- [Practica 6 Notación Asintótica](#práctica-6-notación-asintótica)
- [Practica 7 Complejidad Temporal](#práctica-7-complejidad-temporal)
- [Practica 8 Análisis de Algoritmos](#práctica-8-análisis-de-algoritmos)

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">





# Práctica 1 Logica y Cardinalidad 



---

### **Ejercicio 1**
- **Consigna:** Probar la siguiente ley distributiva \( A \lor (B \land C) = (A \lor B) \land (A \lor C) \)
- **Respuesta:**
   - \( A \lor (B \land C) \)
   - \( x \in A \lor (x \in B \land x \in C) \)
   - \( x \in A \lor x \in (B \land C) \)
   - \( x \in (A \lor B) \land x \in (A \lor C) \)
   - \( (x \in A \lor x \in B) \land (x \in A \lor x \in C) \)
   - \( (A \lor B) \land (A \lor C) \)

**Explicación:**

Aquí, estamos tratando con operaciones de conjuntos. Los símbolos representan:
- \( \lor \): Unión de conjuntos.
- \( \land \): Intersección de conjuntos.

La consigna nos pide demostrar que la unión de un conjunto \( A \) con la intersección de los conjuntos \( B \) y \( C \) es igual a la intersección de la unión de \( A \) con \( B \) y la unión de \( A \) con \( C \).

**Desglose de la Respuesta:**

1. \( A \lor (B \land C) \)
   - Esta es la expresión original que queremos probar.

2. \( x \in A \lor (x \in B \land x \in C) \)
   - Aquí, estamos descomponiendo la expresión en términos de pertenencia de un elemento \( x \). Esto significa que \( x \) pertenece a \( A \) o \( x \) pertenece tanto a \( B \) como a \( C \).

3. \( x \in A \lor x \in (B \land C) \)
   - Esta es una reescritura del paso anterior, agrupando la intersección de \( B \) y \( C \).

4. \( x \in (A \lor B) \land x \in (A \lor C) \)
   - Aquí, estamos distribuyendo la unión sobre la intersección. Esto significa que \( x \) pertenece a la unión de \( A \) y \( B \) y también pertenece a la unión de \( A \) y \( C \).

5. \( (x \in A \lor x \in B) \land (x \in A \lor x \in C) \)
   - Nuevamente, estamos descomponiendo la expresión en términos de pertenencia de un elemento \( x \).

6. \( (A \lor B) \land (A \lor C) \)
   - Finalmente, llegamos a la expresión que queríamos probar, que es equivalente a la expresión original.

En resumen, la respuesta demuestra que la unión de \( A \) con la intersección de \( B \) y \( C \) es, de hecho, igual a la intersección de la unión de \( A \) con \( B \) y la unión de \( A \) con \( C \). Esto se hace descomponiendo las operaciones de conjunto en términos de pertenencia de elementos y reorganizando las expresiones.


<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">



### **Ejercicio 2**
- **Consigna:** Probar la siguiente ley de Morgan: El Complemento de \(A \cup B\) es igual al complemento de \(A\) intersección el complemento de \(B\).
- **Respuesta:** 
  \[
  (A \cup B)^c \Leftrightarrow \neg(x \in A \lor x \in B) \Leftrightarrow x \notin A \land x \notin B \Leftrightarrow A^c \cap B^c
  \]

**Explicación**

¡Claro! Vamos a desglosar la solución del ejercicio 2 paso a paso:

**Ley de Morgan:** El Complemento de \(A \cup B\) es igual al complemento de \(A\) intersección el complemento de \(B\).

Para probar esto, vamos a comenzar con el lado izquierdo de la ecuación y tratar de llegar al lado derecho.

1. **Inicio:** \( (A \cup B)^c \)
   - Aquí estamos tomando el complemento de la unión de los conjuntos \(A\) y \(B\). Es decir, estamos buscando todos los elementos que no están ni en \(A\) ni en \(B\).

2. **Traducción a lógica proposicional:** \( \neg(x \in A \lor x \in B) \)
   - Aquí estamos diciendo que un elemento \(x\) no pertenece a \(A\) y tampoco pertenece a \(B\). En términos de lógica proposicional, esto se traduce como la negación de la declaración "x está en A o x está en B".

3. **Aplicación de las propiedades de la lógica:** \( x \notin A \land x \notin B \)
   - Usando las propiedades de la lógica proposicional, podemos reescribir la declaración anterior como "x no está en A y x no está en B".

4. **Traducción de vuelta a notación de conjuntos:** \( A^c \cap B^c \)
   - Finalmente, traducimos la declaración lógica de vuelta a notación de conjuntos. Aquí, \(A^c\) representa el complemento de \(A\) (todos los elementos que no están en \(A\)) y \(B^c\) representa el complemento de \(B\). La intersección de estos dos conjuntos (\( \cap \)) nos da todos los elementos que no están ni en \(A\) ni en \(B\), que es exactamente lo que estábamos buscando.

Por lo tanto, hemos demostrado que el complemento de la unión de dos conjuntos es igual a la intersección de sus complementos, que es la Ley de Morgan para conjuntos.

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">

### **Ejercicio 3**
- **Consigna:** Probar que el complemento del complemento de A es igual a A.
- **Respuesta:** 
  - \( \neg \neg A \)
  - \( \neg (x \notin A) \)
  - \( x \in A \)
  - \( A \)

Esto significa que si tomas el complemento de un conjunto A (todos los elementos que no están en A) y luego tomas el complemento de ese resultado, obtendrás el conjunto A original. Es una propiedad fundamental de los conjuntos y sus complementos.

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">


### **Ejercicio 4**
- **Consigna:** Sea A el conjunto de los números naturales tales que, si son mayores que 5 o bien terminan en 5, entonces contienen algún dígito 1 ó 2.
  - **a)** Cuáles de los siguientes números pertenecen a A: 3, 5, 10, 15, 30, -10
  - **b)** Expresar el enunciado como una fórmula proposicional donde m significa "mayores que 5", t es "terminan en 5", u es "contiene algún dígito 1" y d es "contiene algún dígito 2".
  - **c)** Transformar la fórmula del inciso anterior de manera que no tenga una implicación y aplicar una ley
de Morgan al resultado. Expresarlo en una frase
- **Respuesta:**
  - **a)** 3, 10, 15
  - **b)** \( (m \vee t) \rightarrow (u \vee d) \)
  - **c)** \( \neg(m \vee t) \vee (u \vee d) = (\neg m \wedge \neg t) \vee (u \vee d) \)
  - Frase: Números tales que no sean mayores que 5 y no terminen en 5 o que contengan un dígito 1 o 2.

¡Por supuesto! Vamos a desglosar el ejercicio 4 paso a paso:

**Explicación**

La consigna nos está dando una condición específica que deben cumplir los números para pertenecer al conjunto A. Esta condición se puede dividir en dos partes:
1. Un número es mayor que 5 o termina en 5.
2. Si cumple la primera condición, entonces debe tener un dígito 1 o 2.

Ahora, vamos a analizar las respuestas:

  - **a)** Cuáles de los siguientes números pertenecen a A: 3, 5, 10, 15, 30, -10
  - **Respuesta a)** 3, 10, 15

Para determinar qué números pertenecen al conjunto A, debemos verificar si cumplen con la condición dada:
- **3**: No es mayor que 5 ni termina en 5, por lo que no necesita cumplir la segunda condición. Por lo tanto, pertenece a A.
- **5**: Termina en 5 pero no tiene dígitos 1 o 2. Sin embargo, como no es mayor que 5, no necesita cumplir la segunda condición. Por lo tanto, pertenece a A.
- **10**: Es mayor que 5 y tiene el dígito 1. Cumple ambas condiciones, por lo que pertenece a A.
- **15**: Termina en 5 y tiene el dígito 1. Cumple ambas condiciones, por lo que pertenece a A.
- **30**: Es mayor que 5 pero no tiene dígitos 1 o 2. No cumple la segunda condición, por lo que no pertenece a A.
- **-10**: No es un número natural, por lo que no se considera.

Analizamos el pinto **b**

- **b)** Expresar el enunciado como una fórmula proposicional donde m significa "mayores que 5", t es "terminan en 5", u es "contiene algún dígito 1" y d es "contiene algún dígito 2".
- **Respuesta b)** \( (m \vee t) \rightarrow (u \vee d) \)

Esta fórmula proposicional traduce la condición dada en la consigna a términos lógicos. La flecha (→) representa una implicación, lo que significa "si... entonces...". La fórmula se lee como: "Si un número es mayor que 5 o termina en 5, entonces debe contener un dígito 1 o un dígito 2".

- **c)** \( \neg(m \vee t) \vee (u \vee d) \)
- Frase: Números tales que no sean mayores que 5 y no terminen en 5 o que contengan un dígito 1 o 2.

Esta parte transforma la fórmula anterior eliminando la implicación y utilizando la ley de Morgan. La fórmula resultante es una forma alternativa de expresar la misma condición.


> PREGUNTAR, si no cumple la segunda condición, entra dentro del conjunto de numeros? Tambien si el 5 al ser igual, entra dentro del conjunto

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">

### **Ejercicio 5**

**Consigna:**
Sean:
- \( X = \{x/x \in N, x \) es impar\(\} \)
- \( Y = \{y/y \in N, y \) es primo\(\} \)
- \( Z = \{z/z \in N, z \) es múltiplo de 3\(\} \)

Describir cada uno de los siguientes conjuntos:
a) \( X \cap Y \)
b) \( X \cap Z \)
c) \( Y \cap Z \)
d) \( Z - Y \)
e) \( X - (Y \cap Z) \)
f) \( (Y \cap Z) - X \)
g) \( X \cup Y \)

**Respuesta:**
a) \( X \cap Y = Y \)
b) \( X \cap Z = \{w/w \in N, w = 3x, x \in N, x = 2k + 1, k \in N\} \)
c) \( Y \cap Z = \{3\} \)
d) \( Z - Y = Z - \{3\} \)
e) \( X - (Y \cap Z) = X - \{3\} \)
f) \( (Y \cap Z) - X = \emptyset \)
g) \( X \cup Y = X \)

**Explicación:**

¡Claro! Vamos a desglosar cada uno de los conjuntos resultantes:

1. **\( X \cap Y = Y \)**
   - \( X \) es el conjunto de números impares.
   - \( Y \) es el conjunto de números primos.
   - Al intersectar ambos conjuntos, obtenemos que todos los números primos (excepto el 2, que es el único número primo par) son impares. Por lo tanto, la intersección de \( X \) y \( Y \) es simplemente el conjunto \( Y \) sin el número 2.

2. **\( X \cap Z \)**
   - \( X \) es el conjunto de números impares.
   - \( Z \) es el conjunto de números que son múltiplos de 3.
   - La intersección nos da aquellos números que son a la vez impares y múltiplos de 3. Estos números son de la forma \( 3x \), donde \( x \) es un número impar.

3. **\( Y \cap Z = \{3\} \)**
   - \( Y \) es el conjunto de números primos.
   - \( Z \) es el conjunto de números que son múltiplos de 3.
   - La única intersección entre estos dos conjuntos es el número 3, que es a la vez primo y múltiplo de 3.

4. **\( Z - Y \)**
   - Aquí estamos restando del conjunto \( Z \) (múltiplos de 3) todos los números primos. El único número primo que es múltiplo de 3 es el 3. Por lo tanto, \( Z - Y \) es simplemente \( Z \) sin el número 3.

5. **\( X - (Y \cap Z) \)**
   - Estamos restando de \( X \) (números impares) la intersección de \( Y \) y \( Z \), que sabemos que es \{3\}. Por lo tanto, obtenemos todos los números impares excepto el 3.

6. **\( (Y \cap Z) - X \)**
   - Aquí estamos restando de la intersección de \( Y \) y \( Z \) (que es \{3\}) todos los números impares. Dado que 3 es impar, el resultado es el conjunto vacío.

7. **\( X \cup Y = X \)**
   - Al unir \( X \) (números impares) y \( Y \) (números primos), obtenemos todos los números impares, ya que todos los números primos (excepto el 2) ya están incluidos en \( X \).

> En el Punto 2, creo que seria Y - {2}

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">

### **Ejercicio 6**

**Consigna:**
Calcular los conjuntos de partes en los siguientes casos:
- a) ∅
- b) {a, b, c}
- c) {∅}
- d) {∅, {∅}}
- e) {a, {b, c}}

**Respuesta:**
- a) ρ(∅) = { {}, {∅}}
- b) ρ({a, b, c}) = { {}, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}}
- c) ρ({∅}) = {∅, {∅}}
- d) ρ({∅, {∅}}) = { {}, {∅}, { {∅}}, {∅, {∅}}}
- e) ρ({a, {b, c}}) = { {}, {a}, { {b, c}}, {a, {b, c}}}

**Explicación**

**a) ∅**
El conjunto vacío (∅) tiene solo dos subconjuntos: él mismo y el conjunto vacío. Por lo tanto, el conjunto de partes de ∅ es: 
\[ \rho(∅) = \{ {}, \{∅\} \} \]

**b) {a, b, c}**
Para el conjunto {a, b, c}, debemos considerar todos los subconjuntos posibles, incluidos los subconjuntos de un solo elemento, los subconjuntos de dos elementos, el conjunto vacío y el conjunto completo:
\[ \rho({a, b, c}) = \{ {}, \{a\}, \{b\}, \{c\}, \{a, b\}, \{a, c\}, \{b, c\}, \{a, b, c\} \} \]

**c) {∅}**
Este es un conjunto que tiene un solo elemento, que es el conjunto vacío. Por lo tanto, sus subconjuntos son el conjunto vacío y él mismo:
\[ \rho({∅}) = \{ ∅, \{∅\} \} \]

**d) {∅, {∅}}**
Este conjunto tiene dos elementos: el conjunto vacío y un conjunto que contiene el conjunto vacío. Sus subconjuntos son:
\[ \rho({∅, {∅}}) = \{ {}, \{∅\}, \{ {∅}\}, \{∅, {∅}\} \} \]

**e) {a, {b, c}}**
Este conjunto tiene dos elementos: el elemento 'a' y un conjunto que contiene 'b' y 'c'. Sus subconjuntos son:
\[ \rho({a, {b, c}}) = \{ {}, \{a\}, \{ {b, c}\}, \{a, {b, c}\} \} \]

En resumen, el conjunto de partes de un conjunto \( A \) es el conjunto de todos los subconjuntos posibles de \( A \), incluido el propio \( A \) y el conjunto vacío. Es una herramienta poderosa en teoría de conjuntos y tiene muchas aplicaciones en matemáticas y ciencias de la computación.



<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">

### **Ejercicio 7**

Presentar una lista con todos los elementos en cada uno de los conjuntos siguientes:
- a) {x, y} × {a, b, c}
- b) {a, b, c} × {x, y}
- c) {x, y} × {y, x}
- d) {x, y}^2 × {}
- e) {}^10 × {2, 3, 4}^20
- f) {1}^5
- g) {1, 2} × {a} × {a, b}

**Respuesta:**
- a) A = {x, y}, B = {a, b, c}
   {(x, y)/x ∈ A ∧ y ∈ B}
- b) {(x, y)/x ∈ B ∧ y ∈ A}
- c) {(x, y), (x, x), (y, y), (y, x)}
- d) {}
- e) {}
- f) {(1, 1, 1, 1, 1)}
- g) {(1, (a, a)), (1, (a, b)), (2, (a, a)), (2, (a, b))}

**Explicación:**


**a) {x, y} × {a, b, c}**

Este es el producto cartesiano entre dos conjuntos. Significa que tomamos cada elemento del primer conjunto y lo emparejamos con cada elemento del segundo conjunto.

Resultado: 
{(x, a), (x, b), (x, c), (y, a), (y, b), (y, c)}

**Explicación:**
- (x, a) porque tomamos el primer elemento de {x, y} y el primer elemento de {a, b, c}.
- (x, b) porque tomamos el primer elemento de {x, y} y el segundo elemento de {a, b, c}.
... y así sucesivamente.

**b) {a, b, c} × {x, y}**

Similar al anterior, pero ahora el primer conjunto es {a, b, c} y el segundo es {x, y}.

Resultado: 
{(a, x), (a, y), (b, x), (b, y), (c, x), (c, y)}

**c) {x, y} × {y, x}**

Producto cartesiano entre {x, y} y {y, x}. 

Resultado: 
{(x, y), (x, x), (y, y), (y, x)}

**d) {x, y}^2 × {}**

El producto cartesiano de cualquier conjunto con un conjunto vacío siempre es un conjunto vacío. Esto es porque no hay elementos en el conjunto vacío para formar pares.

Resultado: 
{}

**e) {}^10 × {2, 3, 4}^20**

Similar al anterior, el producto cartesiano con un conjunto vacío siempre es un conjunto vacío.

Resultado: 
{}

**f) {1}^5**

Esto representa el conjunto de todas las tuplas de 5 elementos donde cada elemento es 1.

Resultado: 
{(1, 1, 1, 1, 1)}

**g) {1, 2} × {a} × {a, b}**

Producto cartesiano entre tres conjuntos. Tomamos cada combinación de elementos de los tres conjuntos.

Resultado: 
{(1, a, a), (1, a, b), (2, a, a), (2, a, b)}

Espero que estas explicaciones te ayuden a entender mejor el concepto de producto cartesiano y cómo se aplicó en cada inciso del ejercicio. Si tienes alguna otra duda, ¡házmelo saber!

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">

### Ejercicio 8

> Cardinalidad: "número de elementos en el conjunto".

- **Consigna:** 
  ¿Cuál es el cardinal de \( A \times B \) si \( |A| = n \) y \( |B| = m \)?
  
- **Respuesta:** 
  \( |A \times B| = n \times m \)

- **Explicación:**

**Producto Cartesiano**
El producto cartesiano de dos conjuntos \( A \) y \( B \), denotado \( A \times B \), es el conjunto de todos los pares ordenados donde el primer elemento es de \( A \) y el segundo elemento es de \( B \).

Formalmente:
\[ A \times B = \{(a, b) : a \in A, b \in B\} \]

Por ejemplo, si \( A = \{1, 2\} \) y \( B = \{a, b\} \), entonces:
\[ A \times B = \{(1, a), (1, b), (2, a), (2, b)\} \]

**Cardinalidad del Producto Cartesiano**
La cardinalidad de \( A \times B \) es el número de pares ordenados que se pueden formar tomando un elemento de \( A \) y uno de \( B \).

Si \( A \) tiene \( n \) elementos y \( B \) tiene \( m \) elementos, entonces hay \( n \) formas de elegir el primer elemento del par (desde \( A \)) y \( m \) formas de elegir el segundo elemento del par (desde \( B \)). Por lo tanto, hay \( n \times m \) pares ordenados posibles en \( A \times B \).

Esto nos lleva a la fórmula:
\[ |A \times B| = n \times m \]

**Ejemplo ilustrativo**:
Supongamos que estamos organizando una fiesta y queremos decidir sobre las combinaciones de bebida y comida. Si tenemos 3 bebidas y 4 comidas diferentes, entonces hay 3 formas de elegir una bebida y 4 formas de elegir una comida, lo que nos da un total de \( 3 \times 4 = 12 \) combinaciones posibles de bebida y comida.

**Conclusión**:
La cardinalidad del producto cartesiano de dos conjuntos es simplemente el producto de sus cardinalidades individuales. Es una forma de contar todas las combinaciones posibles entre los elementos de los dos conjuntos.



<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">

### **Ejercicio 9**

**Consigna:**
Demostrar por inducción que si A es un conjunto finito \(|A| = n\) entonces \(|\rho(A)| = 2^n\).

**Respuesta:**
Para demostrar esto, utilizaremos el principio de inducción matemática:

1. **Caso base \(n=0\):**
   Si \(A = \emptyset\), entonces el conjunto de partes de \(A\) es \(\rho(\emptyset) = \{\emptyset\}\). Por lo tanto, \(|\rho(\emptyset)| = 2^0 = 1\).

2. **Hipótesis inductiva (Hi):**
   Suponemos que la afirmación es cierta para algún \(n\) arbitrario, es decir, si \(|A| = n\) entonces \(|\rho(A)| = 2^n\).

3. **Paso inductivo:**
   Consideremos un conjunto \(A'\) tal que \(|A'| = n + 1\). Podemos escribir \(A'\) como \(A' = A \cup \{n + 1\}\), donde \(|A| = n\).

   El conjunto de partes de \(A'\) es:
   \(\rho(A') = \rho(A) \cup \{x | x = \{n + 1\} \cup k, k \in \rho(A)\}\).

   Entonces, el número de elementos en \(\rho(A')\) es:
   \(|\rho(A')| = |\rho(A)| + |{x | x = \{n + 1\} \cup k, k \in \rho(A)}|\).

   Usando la hipótesis inductiva, sabemos que \(|\rho(A)| = 2^n\). Por lo tanto, el número de conjuntos que contienen el elemento \(n + 1\) y cualquier subconjunto de \(A\) también es \(2^n\).

   Sumando ambos resultados, obtenemos:
   \(|\rho(A')| = 2^n + 2^n = 2^{n+1}\).

Por lo tanto, hemos demostrado que si \(|A| = n + 1\), entonces \(|\rho(A)| = 2^{n+1}\), lo que completa la demostración por inducción.

En resumen, para cualquier conjunto finito \(A\) con \(n\) elementos, el número de subconjuntos de \(A\) (es decir, el número de elementos en el conjunto de partes de \(A\)) es \(2^n\).

> Este ejercicio no lo entendi muy bien

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">

### Ejercicio 10

**Consigna:**
Mostrar que \( |N \times N| = |N^+| \)

**Respuesta:**
Para demostrar esto, se deben probar dos cosas:
1. \( |N \times N| \leq |N^+| \)
2. \( |N^+| \leq |N \times N| \)

Para el punto 2, es sencillo encontrar una función inyectiva ya que se puede utilizar la función identidad.

Para el punto 1, se puede utilizar el orden canónico de las tuplas formadas para mapear la suma de los mismos. El primer elemento es (0,0) que se mapea a 0, (0,1) y (1,0) se mapean a 1, y así sucesivamente.

Por lo tanto, queda demostrado que \( |N \times N| = |N^+| \).

**Explicacíon Detallada**

¡Claro! Vamos a desglosar la solución del ejercicio 10 paso a paso.

**Consigna:**
Mostrar que \( |N \times N| = |N^+| \)

Aquí, \( N \) representa el conjunto de números naturales (incluido el 0) y \( N^+ \) representa el conjunto de números naturales positivos (sin incluir el 0). El símbolo \( \times \) denota el producto cartesiano, y \( |A| \) denota el cardinal (tamaño) del conjunto \( A \).

**Solución:**

Para demostrar que dos conjuntos tienen el mismo cardinal, debemos encontrar una función biyectiva entre ellos. Una función biyectiva es una función que es inyectiva (sin dos elementos de entrada que se mapeen al mismo elemento de salida) y sobreyectiva (todos los elementos del conjunto de salida tienen al menos un elemento de entrada que se mapea a ellos).

**1. \( |N \times N| \leq |N^+| \)**

Para demostrar esto, necesitamos encontrar una función inyectiva \( f: N \times N \rightarrow N^+ \).

Una posible función es la siguiente:
\[ f(a, b) = 2^a(2b+1) \]

Esta función es inyectiva porque para cualquier par de números naturales \( (a, b) \) y \( (c, d) \), si \( f(a, b) = f(c, d) \), entonces \( a = c \) y \( b = d \).

**2. \( |N^+| \leq |N \times N| \)**

Para demostrar esto, necesitamos encontrar una función inyectiva \( g: N^+ \rightarrow N \times N \).

Una posible función es la función identidad, que mapea cada número natural positivo a sí mismo. Esta función es claramente inyectiva.

Dado que hemos encontrado funciones inyectivas en ambas direcciones, podemos concluir que \( |N \times N| = |N^+| \).

**Explicación intuitiva:**

La idea detrás de esta demostración es que aunque parezca que hay "más" pares de números naturales que números naturales positivos (porque estamos considerando todos los posibles pares), en realidad hay una correspondencia uno a uno entre ellos. Esto se debe a que hay infinitos números naturales y, por lo tanto, infinitos pares de números naturales. La función que hemos definido simplemente nos da una forma sistemática de emparejar cada número natural positivo con un par único de números naturales.

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">

### **Ejercicio 11**

Consigna:
Mostrar que \( |Q^+| \leq |N| \), siendo \( Q^+ \) el conjunto de los racionales positivos.

Respuesta:
Siendo \( i, j \) el numerador y el denominador respectivamente, se puede utilizar la siguiente función para obtener un número entero a partir de estos:
\[ f(i,j) = \frac{(i+j)(i+j+1)}{2} \]

Para demostrar que el conjunto de los racionales positivos \( Q^+ \) tiene el mismo tamaño (o cardinalidad) que el conjunto de los números naturales \( N \), necesitamos encontrar una función biyectiva entre estos dos conjuntos. Una función biyectiva es una función que es inyectiva (sin valores duplicados) y sobreyectiva (cubre todo el conjunto de llegada).

**Solución**:
La idea es asociar cada número racional positivo con un número natural único. Para hacer esto, consideramos cada número racional como una fracción \( \frac{i}{j} \), donde \( i \) es el numerador y \( j \) es el denominador.

La función propuesta es:
\[ f(i,j) = \frac{(i+j)(i+j+1)}{2} + i \]

Esta función es una variante de la función de Cantor para emparejar dos números naturales con un número natural único. La función de Cantor es una famosa función que se utiliza para demostrar que hay tantos pares de números naturales como números naturales individuales.

La función \( f \) toma dos números naturales \( i \) y \( j \) y produce un número natural único. La idea es que, al variar \( i \) y \( j \), obtenemos todos los números naturales exactamente una vez. Por lo tanto, podemos asociar cada número racional positivo con un número natural único usando esta función.

**Explicación intuitiva**:
Imagina que todos los números racionales positivos están dispuestos en una cuadrícula infinita. Cada fila de la cuadrícula representa un denominador diferente, y cada columna representa un numerador diferente. La función \( f \) nos da una forma de "enumerar" cada celda de esta cuadrícula con un número natural único. Al hacerlo, demostramos que hay tantos números racionales positivos como números naturales.

En resumen, hemos demostrado que el conjunto de los racionales positivos \( Q^+ \) tiene el mismo tamaño que el conjunto de los números naturales \( N \) utilizando la función \( f \). Esto es una manifestación del poder y la sorpresa de la teoría de conjuntos y la cardinalidad.

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">

### **Ejercicio 12**
Consigna:
Mostrar que la cardinalidad del conjunto de todas las funciones de \( R \) a \( \{0, 1\} \) es menor o igual a la del conjunto de todas las funciones que van:
a) de \( R \) a \( N \)
b) de \( R \) a \( \{a, b, c\} \)

Respuesta:
Probar que:
\[ | \{f / f : R \rightarrow \{0, 1\} \} | \leq | \{f / f : R \rightarrow N \} | \]
es fácil de demostrar gracias a la función identidad, las funciones que van de reales a \( 0,1 \) son un subconjunto de las funciones de reales a naturales.

\[ | \{f / f : R \rightarrow \{0, 1\} \} | \leq | \{f / f : R \rightarrow \{a, b, c\} \} | \]
se puede utilizar una función que convierta el \( 0 \) a \( 'a' \) y \( 1 \) a \( 'b' \).


**Explicación:**

Primero, es importante entender qué significa la cardinalidad de un conjunto de funciones. La cardinalidad de un conjunto es una medida de "cuántos" elementos hay en ese conjunto. Cuando hablamos de conjuntos de funciones, estamos hablando de cuántas funciones diferentes hay en ese conjunto.

**a) de \( R \) a \( N \)**

Para mostrar que la cardinalidad del conjunto de todas las funciones de \( R \) a \( \{0, 1\} \) es menor o igual a la del conjunto de todas las funciones que van de \( R \) a \( N \), necesitamos encontrar una función inyectiva (una función que no asigna dos elementos diferentes al mismo elemento) de un conjunto al otro.

Dado que cualquier función que va de \( R \) a \( \{0, 1\} \) también puede ser vista como una función que va de \( R \) a \( N \) (simplemente asignando 0 y 1 a sus respectivos valores en \( N \)), podemos decir que el conjunto de funciones de \( R \) a \( \{0, 1\} \) es un subconjunto del conjunto de funciones de \( R \) a \( N \). Por lo tanto, su cardinalidad es menor o igual.

**b) de \( R \) a \( \{a, b, c\} \)**

Similarmente, para mostrar que la cardinalidad del conjunto de todas las funciones de \( R \) a \( \{0, 1\} \) es menor o igual a la del conjunto de todas las funciones que van de \( R \) a \( \{a, b, c\} \), necesitamos encontrar una función inyectiva de un conjunto al otro.

Podemos hacer esto fácilmente definiendo una función que mapee 0 a 'a' y 1 a 'b'. Cualquier función que vaya de \( R \) a \( \{0, 1\} \) puede ser transformada en una función que vaya de \( R \) a \( \{a, b, c\} \) usando este mapeo. Por lo tanto, el conjunto de funciones de \( R \) a \( \{0, 1\} \) es un subconjunto del conjunto de funciones de \( R \) a \( \{a, b, c\} \), y su cardinalidad es menor o igual.

**Conclusión:**

En ambos casos, hemos mostrado que el conjunto de funciones de \( R \) a \( \{0, 1\} \) es un subconjunto de los otros dos conjuntos de funciones mencionados, lo que significa que su cardinalidad es menor o igual a la de esos conjuntos.

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">

### **Ejercicio 13**

Consigna:
Dar un ejemplo de 2 conjuntos disjuntos no vacíos, A y B tales que:
a) \( |A| < |B| < |A \cup B| \)
b) \( |A| < |B| = |A \cup B| \)
c) \( |A| = |B| = |A \cup B| \)

Respuesta:
a) \( A = \{1, 2\}, B = \{3, 4, 5\} \)
b) \( A = \mathbb{N}, B = \mathbb{R} - \mathbb{N} \)
c) \( A = \{x/x \) es par\(\}, B = \{x/x \) es impar\(\} \)



**Respuesta y Explicación:**

a) \( A = \{1, 2\}, B = \{3, 4, 5\} \)
- Aquí, el conjunto A tiene 2 elementos y el conjunto B tiene 3 elementos. Como A y B son disjuntos (no tienen elementos en común), la unión de A y B tendrá 5 elementos. Por lo tanto, \( |A| = 2 < |B| = 3 < |A \cup B| = 5 \).

b) \( A = \mathbb{N}, B = \mathbb{R} - \mathbb{N} \)
- A es el conjunto de los números naturales (es decir, los números enteros no negativos) y B es el conjunto de los números reales que no son naturales. 
- El conjunto de números reales es infinitamente más grande que el conjunto de números naturales. Sin embargo, cuando tomamos la unión de A y B, obtenemos todo el conjunto de números reales \( \mathbb{R} \). 
- Por lo tanto, \( |A| \) (que es infinito, pero "más pequeño") es menor que \( |B| \), pero \( |B| \) es igual a \( |A \cup B| \) porque ambos son simplemente el conjunto de números reales.

c) \( A = \{x/x \) es par\(\}, B = \{x/x \) es impar\(\} \)
- A es el conjunto de todos los números enteros pares y B es el conjunto de todos los números enteros impares.
- Ambos conjuntos son infinitos, pero como son disjuntos (no tienen elementos en común), la unión de A y B es simplemente el conjunto de todos los números enteros.
- Por lo tanto, \( |A| = |B| \) (ambos infinitos) y \( |A \cup B| \) es también infinito, pero es igual a \( |A| \) y \( |B| \).


<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">

### **Ejercicio 14**
Consigna:
Mostrar que \( |N \setminus \{7, 9, 15, 34, 21, 344, 990\}| = |N| \)

Respuesta:
Para mostrar que \( |N \setminus \{7, 9, 15, 34, 21, 344, 990\}| \) es igual a \( |N| \):

1. \( |N \setminus \{7, 9, 15, 34, 21, 344, 990\}| \leq |N| \)
   - Usar la función identidad.

2. \( |N| \leq |N \setminus \{7, 9, 15, 34, 21, 344, 990\}| \)
   - Usar la función \( g(n) = n + 1000 \).

La idea detrás de esta demostración es que, incluso si eliminamos un número finito de elementos de los números naturales (en este caso, los números 7, 9, 15, 34, 21, 344, y 990), todavía podemos encontrar una correspondencia uno a uno (una función biyectiva) entre los números naturales y el conjunto resultante. La función \( g(n) \) simplemente desplaza cada número natural por 1000, asegurando que no se solapen con los números que hemos eliminado. Por lo tanto, ambos conjuntos tienen la misma cardinalidad.

**Explicación**
Para demostrar que dos conjuntos tienen la misma cardinalidad, necesitamos encontrar una función biyectiva entre ellos. Una función biyectiva es una función que es inyectiva (sin dos elementos que se mapeen al mismo elemento) y sobreyectiva (cubre todo el conjunto de llegada).

**Paso 1: Entender los conjuntos involucrados**

- \( N \) es el conjunto de todos los números naturales (0, 1, 2, 3, ...).
- \( N \setminus \{7, 9, 15, 34, 21, 344, 990\} \) es el conjunto de todos los números naturales excepto 7, 9, 15, 34, 21, 344 y 990.

**Paso 2: Demostrar que \( |N \setminus \{7, 9, 15, 34, 21, 344, 990\}| \leq |N| \)**

Para esto, podemos usar la función identidad \( f(n) = n \). Esta función simplemente mapea cada número natural a sí mismo. Es evidente que si tomamos cualquier número natural, sigue siendo un número natural incluso si eliminamos un conjunto finito de ellos. Por lo tanto, la función identidad es una función inyectiva de \( N \setminus \{7, 9, 15, 34, 21, 344, 990\} \) a \( N \).

**Paso 3: Demostrar que \( |N| \leq |N \setminus \{7, 9, 15, 34, 21, 344, 990\}| \)**

Para esta parte, proponemos una función \( g(n) \) que mapea \( N \) a \( N \setminus \{7, 9, 15, 34, 21, 344, 990\} \). Una función que podría funcionar es \( g(n) = n + 1000 \). 

¿Por qué esta función? Bueno, al agregar 1000 a cualquier número natural, nos aseguramos de que el resultado sea un número mayor que 990 (el número más grande en el conjunto que estamos eliminando). Por lo tanto, no hay forma de que \( g(n) \) mapee un número natural a 7, 9, 15, 34, 21, 344 o 990.

Esta función es claramente inyectiva porque cada número natural se mapea a un número único en \( N \setminus \{7, 9, 15, 34, 21, 344, 990\} \). También es sobreyectiva porque cubre todo el conjunto \( N \setminus \{7, 9, 15, 34, 21, 344, 990\} \).

**Conclusión:**
Dado que hemos encontrado funciones biyectivas en ambas direcciones entre \( N \) y \( N \setminus \{7, 9, 15, 34, 21, 344, 990\} \), podemos concluir que estos dos conjuntos tienen la misma cardinalidad.

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">


<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">


<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">


<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">


<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">




# Práctica 2 MT



# Práctica 3 Equivalencia de Modelos



# Práctica 4 Caracterización de Lenguajes



# Práctica 5 Reducibilidad



# Práctica 6 Notación Asintótica



# Práctica 7 Complejidad Temporal



# Práctica 8 Análisis de Algoritmos




