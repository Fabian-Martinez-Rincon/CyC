
<div align='center'>

# Práctica 1 Logica y Cardinalidad 
</div>

- [El resto de las practicas](https://github.com/Fabian-Martinez-Rincon/CyC)

---

- [Ejercicio 1 Probar la siguiente ley distributiva](#ejercicio-1)
- [Ejercicio 2 Probar la siguiente ley de Morgan](#ejercicio-2)
- [Ejercicio 3 Probar que el complemento del complemento de A es igual a A.](#ejercicio-3)
- [Ejercicio 4 Sea A el conjunto de los números naturales tales que](#ejercicio-4)
- [Ejercicio 5 Describir cada uno de los siguientes conjuntos](#ejercicio-5)
- [Ejercicio 6 Calcular los conjuntos de partes en los siguientes casos](#ejercicio-6)
- [Ejercicio 7 Presentar una lista con todos los elementos en cada uno de los conjuntos siguientes](#ejercicio-7)
- [Ejercicio 8 ¿Cuál es el cardinal de \( A \times B \) si \( |A| = n \) y \( |B| = m \)?](#ejercicio-8)
- [Ejercicio 9 Demostrar por inducción que si A es un conjunto finito \(|A| = n\)](#ejercicio-9)
- [Ejercicio 10 Mostrar que \( |N \times N| = |N^+| \)](#ejercicio-10)
- [Ejercicio 11 Mostrar que \( |Q^+| \leq |N| \), siendo \( Q^+ \) ](#ejercicio-11)
- [Ejercicio 12 Mostrar que la cardinalidad del conjunto de todas las funciones de \( R \) a \( \{0, 1\} \)](#ejercicio-12)
- [Ejercicio 13 Dar un ejemplo de 2 conjuntos disjuntos no vacíos, A y B tales que](#ejercicio-13)
- [Ejercicio 14 Mostrar que \( |N \setminus \{7, 9, 15, 34, 21, 344, 990\}| = |N| \)](#ejercicio-14)
- [Ejercicio 15 ¿El conjunto de todas las frases en el idioma español es contable o incontable?](#ejercicio-15)
- [Ejercicio 16 Dar ejemplos para mostrar que la intersección de 2 conjuntos incontables puede ser:](#ejercicio-16)
- [Ejercicio 17 Mostrar que la unión de 2 conjuntos contables es contable.](#ejercicio-17)
- [Ejercicio 18 Muestre que, si \( X \) es un conjunto incontable e \( Y \) es un conjunto](#ejercicio-18)
- [Ejercicio 19 Mostrar que un conjunto puede tener la misma cardinalidad que un subconjunto](#ejercicio-19)

---

### **Ejercicio 1**

**Consigna:** Probar la siguiente ley distributiva \( A \lor (B \land C) = (A \lor B) \land (A \lor C) \)

**Respuesta**
- \( A \lor (B \land C) \)
- \( x \in A \lor (x \in B \land x \in C) \)
- \( x \in A \lor x \in (B \land C) \)
- \( x \in (A \lor B) \land x \in (A \lor C) \)
- \( (x \in A \lor x \in B) \land (x \in A \lor x \in C) \)
- \( (A \lor B) \land (A \lor C) \)

**Explicación**

Aquí, estamos tratando con operaciones de conjuntos. Los símbolos representan:
- \( \lor \): Unión de conjuntos.
- \( \land \): Intersección de conjuntos.

La consigna nos pide demostrar que la unión de un conjunto \( A \) con la intersección de los conjuntos \( B \) y \( C \) es igual a la intersección de la unión de \( A \) con \( B \) y la unión de \( A \) con \( C \).

**Desglose de la Respuesta**

\( A \lor (B \land C) \)
Esta es la expresión original que queremos probar.

\( x \in A \lor (x \in B \land x \in C) \)
Aquí, estamos descomponiendo la expresión en términos de pertenencia de un elemento \( x \). Esto significa que \( x \) pertenece a \( A \) o \( x \) pertenece tanto a \( B \) como a \( C \).

\( x \in A \lor x \in (B \land C) \)
Esta es una reescritura del paso anterior, agrupando la intersección de \( B \) y \( C \).

\( x \in (A \lor B) \land x \in (A \lor C) \)
Aquí, estamos distribuyendo la unión sobre la intersección. Esto significa que \( x \) pertenece a la unión de \( A \) y \( B \) y también pertenece a la unión de \( A \) y \( C \).

\( (x \in A \lor x \in B) \land (x \in A \lor x \in C) \)
Nuevamente, estamos descomponiendo la expresión en términos de pertenencia de un elemento \( x \).

\( (A \lor B) \land (A \lor C) \)
Finalmente, llegamos a la expresión que queríamos probar, que es equivalente a la expresión original.

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">



### **Ejercicio 2**
**Consigna** Probar la siguiente ley de Morgan: El Complemento de \(A \cup B\) es igual al complemento de \(A\) intersección el complemento de \(B\).

**Respuesta**
\[(A \cup B)^c \Leftrightarrow \neg(x \in A \lor x \in B) \Leftrightarrow x \notin A \land x \notin B \Leftrightarrow A^c \cap B^c
\]

**Explicación**

**Ley de Morgan:** El Complemento de \(A \cup B\) es igual al complemento de \(A\) intersección el complemento de \(B\).

Para probar esto, vamos a comenzar con el lado izquierdo de la ecuación y tratar de llegar al lado derecho.

**Inicio:** \( (A \cup B)^c \)
Aquí estamos tomando el complemento de la unión de los conjuntos \(A\) y \(B\). Es decir, estamos buscando todos los elementos que no están ni en \(A\) ni en \(B\).

**Traducción a lógica proposicional:** \( \neg(x \in A \lor x \in B) \)
Aquí estamos diciendo que un elemento \(x\) no pertenece a \(A\) y tampoco pertenece a \(B\). En términos de lógica proposicional, esto se traduce como la negación de la declaración "x está en A o x está en B".

**Aplicación de las propiedades de la lógica:** \( x \notin A \land x \notin B \)
Usando las propiedades de la lógica proposicional, podemos reescribir la declaración anterior como "x no está en A y x no está en B".

**Traducción de vuelta a notación de conjuntos:** \( A^c \cap B^c \)
Finalmente, traducimos la declaración lógica de vuelta a notación de conjuntos. Aquí, \(A^c\) representa el complemento de \(A\) (todos los elementos que no están en \(A\)) y \(B^c\) representa el complemento de \(B\). La intersección de estos dos conjuntos (\( \cap \)) nos da todos los elementos que no están ni en \(A\) ni en \(B\), que es exactamente lo que estábamos buscando.



<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 3**
**Consigna:** Probar que el complemento del complemento de A es igual a A.
**Respuesta** 
- \( \neg \neg A \)
- \( \neg (x \notin A) \)
- \( x \in A \)
- \( A \)

Esto significa que si tomas el complemento de un conjunto A (todos los elementos que no están en A) y luego tomas el complemento de ese resultado, obtendrás el conjunto A original. Es una propiedad fundamental de los conjuntos y sus complementos.

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">


### **Ejercicio 4**

**Consigna:** Sea A el conjunto de los números naturales tales que, si son mayores que 5 o bien terminan en 5, entonces contienen algún dígito 1 ó 2.

**a)** Cuáles de los siguientes números pertenecen a A: 3, 5, 10, 15, 30, -10
> 3, 10, 15

**b)** Expresar el enunciado como una fórmula proposicional donde m significa "mayores que 5", t es "terminan en 5", u es "contiene algún dígito 1" y d es "contiene algún dígito 2".

> \( (m \vee t) \rightarrow (u \vee d) \)

**c)** Transformar la fórmula del inciso anterior de manera que no tenga una implicación y aplicar una ley de Morgan al resultado. Expresarlo en una frase

> \( \neg(m \vee t) \vee (u \vee d) = (\neg m \wedge \neg t) \vee (u \vee d) \)

Frase: Números tales que no sean mayores que 5 y no terminen en 5 o que contengan un dígito 1 o 2.



**Explicación**

La consigna nos está dando una condición específica que deben cumplir los números para pertenecer al conjunto A. Esta condición se puede dividir en dos partes:
1. Un número es mayor que 5 o termina en 5.
2. Si cumple la primera condición, entonces debe tener un dígito 1 o 2.


**a)** Cuáles de los siguientes números pertenecen a A: 3, 5, 10, 15, 30, -10
> **Respuesta a)** 3, 10, 15

Para determinar qué números pertenecen al conjunto A, debemos verificar si cumplen con la condición dada:

**3**: No es mayor que 5 ni termina en 5, por lo que no necesita cumplir la segunda condición. Por lo tanto, pertenece a A.
**5**: Termina en 5 pero no tiene dígitos 1 o 2. Sin embargo, como no es mayor que 5, no necesita cumplir la segunda condición. Por lo tanto, pertenece a A.
**10**: Es mayor que 5 y tiene el dígito 1. Cumple ambas condiciones, por lo que pertenece a A.
**15**: Termina en 5 y tiene el dígito 1. Cumple ambas condiciones, por lo que pertenece a A.
**30**: Es mayor que 5 pero no tiene dígitos 1 o 2. No cumple la segunda condición, por lo que no pertenece a A.
**-10**: No es un número natural, por lo que no se considera.


**b)** Expresar el enunciado como una fórmula proposicional donde m significa "mayores que 5", t es "terminan en 5", u es "contiene algún dígito 1" y d es "contiene algún dígito 2".
> **Respuesta b)** \( (m \vee t) \rightarrow (u \vee d) \)

Esta fórmula proposicional traduce la condición dada en la consigna a términos lógicos. La flecha (→) representa una implicación, lo que significa "si... entonces...". La fórmula se lee como: "Si un número es mayor que 5 o termina en 5, entonces debe contener un dígito 1 o un dígito 2".

**c)** \( \neg(m \vee t) \vee (u \vee d) \)

**Frase** Números tales que no sean mayores que 5 y no terminen en 5 o que contengan un dígito 1 o 2.

Esta parte transforma la fórmula anterior eliminando la implicación y utilizando la ley de Morgan. La fórmula resultante es una forma alternativa de expresar la misma condición.


> PREGUNTAR, si no cumple la segunda condición, entra dentro del conjunto de numeros? Tambien si el 5 al ser igual, entra dentro del conjunto

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 5**

**Consigna:**
Sean
- \( X = \{x/x \in N, x \) es impar\(\} \)
- \( Y = \{y/y \in N, y \) es primo\(\} \)
- \( Z = \{z/z \in N, z \) es múltiplo de 3\(\} \)

Describir cada uno de los siguientes conjuntos:
a)  \( X \cap Y = Y \)
b)  \( X \cap Z = \{w/w \in N, w = 3x, x \in N, x = 2k + 1, k \in N\} \)
c)  \( Y \cap Z = \{3\} \)
d)  \( Z - Y = Z - \{3\} \)
e)  \( X - (Y \cap Z) = X - \{3\} \)
f)  \( (Y \cap Z) - X = \emptyset \)
g)  \( X \cup Y = X \)


**Explicación:**

**\( X \cap Y = Y \)**

\( X \) es el conjunto de números impares. \( Y \) es el conjunto de números primos.

Al intersectar ambos conjuntos, obtenemos que todos los números primos (excepto el 2, que es el único número primo par) son impares. Por lo tanto, la intersección de \( X \) y \( Y \) es simplemente el conjunto \( Y \) sin el número 2.

**\( X \cap Z \)**
\( X \) es el conjunto de números impares. \( Z \) es el conjunto de números que son múltiplos de 3.

La intersección nos da aquellos números que son a la vez impares y múltiplos de 3. Estos números son de la forma \( 3x \), donde \( x \) es un número impar.

**\( Y \cap Z = \{3\} \)**
\( Y \) es el conjunto de números primos. \( Z \) es el conjunto de números que son múltiplos de 3.

La única intersección entre estos dos conjuntos es el número 3, que es a la vez primo y múltiplo de 3.

**\( Z - Y \)**

Aquí estamos restando del conjunto \( Z \) (múltiplos de 3) todos los números primos. El único número primo que es múltiplo de 3 es el 3. Por lo tanto, \( Z - Y \) es simplemente \( Z \) sin el número 3.

**\( X - (Y \cap Z) \)**
Estamos restando de \( X \) (números impares) la intersección de \( Y \) y \( Z \), que sabemos que es \{3\}. Por lo tanto, obtenemos todos los números impares excepto el 3.

**\( (Y \cap Z) - X \)**
Aquí estamos restando de la intersección de \( Y \) y \( Z \) (que es \{3\}) todos los números impares. Dado que 3 es impar, el resultado es el conjunto vacío.

**\( X \cup Y = X \)**
Al unir \( X \) (números impares) y \( Y \) (números primos), obtenemos todos los números impares, ya que todos los números primos (excepto el 2) ya están incluidos en \( X \).

> En el Punto 2, creo que seria Y - {2}

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 6**

**Consigna:**
Calcular los conjuntos de partes en los siguientes casos:
- a) ∅ 🠪 ρ(∅) = { {}, {∅}}
- b) {a, b, c} 🠪 ρ({a, b, c}) = { {}, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}}
- c) {∅} 🠪 ρ({∅}) = {∅, {∅}}
- d) {∅, {∅}} 🠪 ρ({∅, {∅}}) = { {}, {∅}, { {∅}}, {∅, {∅}}}
- e) {a, {b, c}} 🠪 ρ({a, {b, c}}) = { {}, {a}, { {b, c}}, {a, {b, c}}}

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




<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 7**

Presentar una lista con todos los elementos en cada uno de los conjuntos siguientes:
- a) {x, y} × {a, b, c}  🠪 A = {x, y}, B = {a, b, c}
   {(x, y)/x ∈ A ∧ y ∈ B}
- b) {a, b, c} × {x, y}  🠪 {(x, y)/x ∈ B ∧ y ∈ A}
- c) {x, y} × {y, x}  🠪 {(x, y), (x, x), (y, y), (y, x)}
- d) {x, y}^2 × {}  🠪 {}
- e) {}^10 × {2, 3, 4}^20  🠪 {}
- f) {1}^5  🠪 {(1, 1, 1, 1, 1)}
- g) {1, 2} × {a} × {a, b}  🠪 {(1, (a, a)), (1, (a, b)), (2, (a, a)), (2, (a, b))}

**Explicación**

**a) {x, y} × {a, b, c}**

Este es el producto cartesiano entre dos conjuntos. Significa que tomamos cada elemento del primer conjunto y lo emparejamos con cada elemento del segundo conjunto.

> {(x, a), (x, b), (x, c), (y, a), (y, b), (y, c)}

**b) {a, b, c} × {x, y}**

Similar al anterior, pero ahora el primer conjunto es {a, b, c} y el segundo es {x, y}.

> {(a, x), (a, y), (b, x), (b, y), (c, x), (c, y)}

**c) {x, y} × {y, x}**

Producto cartesiano entre {x, y} y {y, x}. 

> {(x, y), (x, x), (y, y), (y, x)}

**d) {x, y}^2 × {}**

El producto cartesiano de cualquier conjunto con un conjunto vacío siempre es un conjunto vacío. Esto es porque no hay elementos en el conjunto vacío para formar pares.

> {}

**e) {}^10 × {2, 3, 4}^20**

Similar al anterior, el producto cartesiano con un conjunto vacío siempre es un conjunto vacío.

> {}

**f) {1}^5**

Esto representa el conjunto de todas las tuplas de 5 elementos donde cada elemento es 1.

> {(1, 1, 1, 1, 1)}

**g) {1, 2} × {a} × {a, b}**

Producto cartesiano entre tres conjuntos. Tomamos cada combinación de elementos de los tres conjuntos.
> {(1, a, a), (1, a, b), (2, a, a), (2, a, b)}



<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### Ejercicio 8

> Cardinalidad: "número de elementos en el conjunto".

**Consigna** 
¿Cuál es el cardinal de \( A \times B \) si \( |A| = n \) y \( |B| = m \)?
  
**Respuesta**  \( |A \times B| = n \times m \)

**Explicación**

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

**Ejemplo ilustrativo**
Supongamos que estamos organizando una fiesta y queremos decidir sobre las combinaciones de bebida y comida. Si tenemos 3 bebidas y 4 comidas diferentes, entonces hay 3 formas de elegir una bebida y 4 formas de elegir una comida, lo que nos da un total de \( 3 \times 4 = 12 \) combinaciones posibles de bebida y comida.

**Conclusión**
La cardinalidad del producto cartesiano de dos conjuntos es simplemente el producto de sus cardinalidades individuales. Es una forma de contar todas las combinaciones posibles entre los elementos de los dos conjuntos.

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 9**

**Consigna**
Demostrar por inducción que si A es un conjunto finito \(|A| = n\) entonces \(|\rho(A)| = 2^n\).

**Respuesta**
Para demostrar esto, utilizaremos el principio de inducción matemática:

**Caso base \(n=0\):**
Si \(A = \emptyset\), entonces el conjunto de partes de \(A\) es \(\rho(\emptyset) = \{\emptyset\}\). Por lo tanto, \(|\rho(\emptyset)| = 2^0 = 1\).

**Hipótesis inductiva (Hi):**
Suponemos que la afirmación es cierta para algún \(n\) arbitrario, es decir, si \(|A| = n\) entonces \(|\rho(A)| = 2^n\).

**Paso inductivo:**
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

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### Ejercicio 10

**Consigna**
Mostrar que \( |N \times N| = |N^+| \)

**Respuesta**
Para demostrar esto, se deben probar dos cosas:
1. \( |N \times N| \leq |N^+| \)
2. \( |N^+| \leq |N \times N| \)

Para el punto 2, es sencillo encontrar una función inyectiva ya que se puede utilizar la función identidad.

Para el punto 1, se puede utilizar el orden canónico de las tuplas formadas para mapear la suma de los mismos. El primer elemento es (0,0) que se mapea a 0, (0,1) y (1,0) se mapean a 1, y así sucesivamente.

Por lo tanto, queda demostrado que \( |N \times N| = |N^+| \).

**Explicacíon Detallada**

Aquí, \( N \) representa el conjunto de números naturales (incluido el 0) y \( N^+ \) representa el conjunto de números naturales positivos (sin incluir el 0). El símbolo \( \times \) denota el producto cartesiano, y \( |A| \) denota el cardinal (tamaño) del conjunto \( A \).

**Solución**

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

**Explicación intuitiva**

La idea detrás de esta demostración es que aunque parezca que hay "más" pares de números naturales que números naturales positivos (porque estamos considerando todos los posibles pares), en realidad hay una correspondencia uno a uno entre ellos. Esto se debe a que hay infinitos números naturales y, por lo tanto, infinitos pares de números naturales. La función que hemos definido simplemente nos da una forma sistemática de emparejar cada número natural positivo con un par único de números naturales.

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 11**

**Consigna**
Mostrar que \( |Q^+| \leq |N| \), siendo \( Q^+ \) el conjunto de los racionales positivos.

Siendo \( i, j \) el numerador y el denominador respectivamente, se puede utilizar la siguiente función para obtener un número entero a partir de estos:
\[ f(i,j) = \frac{(i+j)(i+j+1)}{2} \]

Para demostrar que el conjunto de los racionales positivos \( Q^+ \) tiene el mismo tamaño (o cardinalidad) que el conjunto de los números naturales \( N \), necesitamos encontrar una función biyectiva entre estos dos conjuntos. Una función biyectiva es una función que es inyectiva (sin valores duplicados) y sobreyectiva (cubre todo el conjunto de llegada).

**Solución**
La idea es asociar cada número racional positivo con un número natural único. Para hacer esto, consideramos cada número racional como una fracción \( \frac{i}{j} \), donde \( i \) es el numerador y \( j \) es el denominador.

La función propuesta es:
\[ f(i,j) = \frac{(i+j)(i+j+1)}{2} + i \]

Esta función es una variante de la función de Cantor para emparejar dos números naturales con un número natural único. La función de Cantor es una famosa función que se utiliza para demostrar que hay tantos pares de números naturales como números naturales individuales.

La función \( f \) toma dos números naturales \( i \) y \( j \) y produce un número natural único. La idea es que, al variar \( i \) y \( j \), obtenemos todos los números naturales exactamente una vez. Por lo tanto, podemos asociar cada número racional positivo con un número natural único usando esta función.

**Explicación intuitiva**
Imagina que todos los números racionales positivos están dispuestos en una cuadrícula infinita. Cada fila de la cuadrícula representa un denominador diferente, y cada columna representa un numerador diferente. La función \( f \) nos da una forma de "enumerar" cada celda de esta cuadrícula con un número natural único. Al hacerlo, demostramos que hay tantos números racionales positivos como números naturales.

En resumen, hemos demostrado que el conjunto de los racionales positivos \( Q^+ \) tiene el mismo tamaño que el conjunto de los números naturales \( N \) utilizando la función \( f \). Esto es una manifestación del poder y la sorpresa de la teoría de conjuntos y la cardinalidad.

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 12**
**Consigna**
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

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 13**

Consigna:
Dar un ejemplo de 2 conjuntos disjuntos no vacíos, A y B tales que:
a) \( |A| < |B| < |A \cup B| \) ⮕ \( A = \{1, 2\}, B = \{3, 4, 5\} \)
b) \( |A| < |B| = |A \cup B| \) ⮕ \( A = \mathbb{N}, B = \mathbb{R} - \mathbb{N} \)
c) \( |A| = |B| = |A \cup B| \) ⮕ \( A = \{x/x \) es par\(\}, B = \{x/x \) es impar\(\} \)

**Respuesta y Explicación**

\( A = \{1, 2\}, B = \{3, 4, 5\} \)

Aquí, el conjunto A tiene 2 elementos y el conjunto B tiene 3 elementos. Como A y B son disjuntos (no tienen elementos en común), la unión de A y B tendrá 5 elementos. Por lo tanto, \( |A| = 2 < |B| = 3 < |A \cup B| = 5 \).

\( A = \mathbb{N}, B = \mathbb{R} - \mathbb{N} \)

A es el conjunto de los números naturales (es decir, los números enteros no negativos) y B es el conjunto de los números reales que no son naturales. 

El conjunto de números reales es infinitamente más grande que el conjunto de números naturales. Sin embargo, cuando tomamos la unión de A y B, obtenemos todo el conjunto de números reales \( \mathbb{R} \). 

Por lo tanto, \( |A| \) (que es infinito, pero "más pequeño") es menor que \( |B| \), pero \( |B| \) es igual a \( |A \cup B| \) porque ambos son simplemente el conjunto de números reales.

\( A = \{x/x \) es par\(\}, B = \{x/x \) es impar\(\} \)

A es el conjunto de todos los números enteros pares y B es el conjunto de todos los números enteros impares.

Ambos conjuntos son infinitos, pero como son disjuntos (no tienen elementos en común), la unión de A y B es simplemente el conjunto de todos los números enteros.

Por lo tanto, \( |A| = |B| \) (ambos infinitos) y \( |A \cup B| \) es también infinito, pero es igual a \( |A| \) y \( |B| \).


<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 14**

**Consigna**

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

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 15**

**Consigna**

¿El conjunto de todas las frases en el idioma español es contable o incontable? Justificar.

Respuesta:
A = frases en el idioma español
|A| ≤ |N|
Utilizar el orden canónico de las frases para convertir cada frase formada a un número único según su orden.

**Explicación detallada**:
La pregunta es si el conjunto de todas las frases en español es contable o incontable. Para responder a esta pregunta, primero debemos entender qué significa que un conjunto sea contable.

Un conjunto es contable si sus elementos pueden ser puestos en correspondencia uno a uno con los números naturales (0, 1, 2, 3, ...). En otras palabras, si podemos enumerar todos sus elementos en una lista infinita sin dejar ninguno fuera, entonces el conjunto es contable.

Ahora, consideremos el conjunto de todas las frases en español. A primera vista, podría parecer que hay infinitas frases posibles, especialmente si consideramos frases de longitud arbitraria. Sin embargo, la respuesta sugiere que utilicemos el "orden canónico" de las frases para asignar a cada frase un número único. 

El "orden canónico" se refiere a una forma sistemática de enumerar las frases. Por ejemplo, podríamos empezar enumerando todas las frases de una palabra, luego todas las frases de dos palabras, y así sucesivamente. Dentro de cada longitud de frase, podríamos ordenar las frases alfabéticamente.

Aunque este proceso nos daría una forma de enumerar todas las frases, hay un problema: hay infinitas frases de cada longitud. Por lo tanto, nunca llegaríamos a las frases de dos palabras porque estaríamos atrapados enumerando infinitamente las frases de una palabra.

Dado este razonamiento, parece que el conjunto de todas las frases en español es incontable. Sin embargo, la respuesta proporcionada sugiere que es contable, lo que puede ser un error o una simplificación. En la práctica, el conjunto de todas las frases posibles en cualquier idioma es incontable debido a la posibilidad de formar frases de longitud infinita.

> Preguntar al profe

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 16**

**Consigna**

Dar ejemplos para mostrar que la intersección de 2 conjuntos incontables puede ser:
a) finita ⮕ \( (R - R^+) \cap R^+ \)
b) infinita contable ⮕ \( R \cap (\rho(N) \cup N) \)
c) incontable ⮕ \( R \cap R \)

**Respuesta y Explicación detallada**

**a) \( (R - R^+) \cap R^+ \)**
- \( R \) representa el conjunto de todos los números reales.
- \( R^+ \) representa el conjunto de todos los números reales positivos.
- \( R - R^+ \) representa el conjunto de todos los números reales que no son positivos. Esto incluye todos los números reales negativos y el cero.
  
La intersección entre los números reales que no son positivos y los números reales positivos es el conjunto vacío, ya que no hay ningún número que sea a la vez no positivo y positivo. Por lo tanto, la intersección es finita (en realidad, tiene 0 elementos).

**b) \( R \cap (\rho(N) \cup N) \)**
- \( N \) representa el conjunto de todos los números naturales (0, 1, 2, 3, ...).
- \( \rho(N) \) representa el conjunto potencia de los números naturales. Es decir, el conjunto de todos los subconjuntos de \( N \). Por ejemplo, {}, {1}, {2}, {1,2}, {1,2,3}, ... son todos elementos de \( \rho(N) \).
  
La unión \( \rho(N) \cup N \) combina los elementos de \( \rho(N) \) y \( N \). Sin embargo, esta unión sigue siendo contable porque tanto \( N \) como \( \rho(N) \) son conjuntos contables.

La intersección \( R \cap (\rho(N) \cup N) \) es simplemente el conjunto \( \rho(N) \cup N \) porque todos sus elementos son números reales. Esta intersección es infinita y contable porque, aunque tiene infinitos elementos, estos pueden ser puestos en correspondencia uno a uno con los números naturales.

**c) \( R \cap R \)**
Este es el caso más sencillo. Estamos tomando la intersección del conjunto de números reales \( R \) consigo mismo. La intersección de un conjunto consigo mismo es siempre el conjunto original. Por lo tanto, la intersección es \( R \), que es incontable.

En resumen, el ejercicio 16 nos muestra diferentes posibilidades para la intersección de dos conjuntos incontables, y cómo esta intersección puede resultar en conjuntos de diferentes "tamaños" o cardinalidades: finita, infinita contable e incontable.

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 17**

**Consigna:** Mostrar que la unión de 2 conjuntos contables es contable.

**Respuesta**
\[ |N \cup N| = |N| \]
\[ |N| = |N| \]

**Conceptos previos**
- Un conjunto es **contable** si sus elementos pueden ser puestos en correspondencia uno a uno con el conjunto de los números naturales \(N\) o con un subconjunto de \(N\). Esto significa que podemos "enumerar" sus elementos, es decir, podemos listarlos uno por uno sin dejar ninguno fuera.
- El conjunto de los números naturales \(N\) es {1, 2, 3, 4, ...}. Es un conjunto infinito y es el conjunto prototipo de contabilidad.

**Desarrollo**
Supongamos que tenemos dos conjuntos contables, \(A\) y \(B\). Como ambos son contables, podemos enumerar sus elementos. Supongamos que:
\[ A = \{a_1, a_2, a_3, ...\} \]
\[ B = \{b_1, b_2, b_3, ...\} \]

Ahora, queremos mostrar que la unión \(A \cup B\) también es contable. Para hacer esto, podemos intentar enumerar los elementos de \(A \cup B\).

Una forma de hacerlo es enumerar primero todos los elementos de \(A\) y luego todos los elementos de \(B\). Sin embargo, esto no garantiza que no haya repeticiones si \(A\) y \(B\) tienen elementos en común.

Una mejor estrategia es intercalar los elementos de \(A\) y \(B\). Es decir, tomamos el primer elemento de \(A\), luego el primer elemento de \(B\), luego el segundo elemento de \(A\), luego el segundo elemento de \(B\), y así sucesivamente.

La enumeración quedaría así:
\[ a_1, b_1, a_2, b_2, a_3, b_3, ... \]

De esta manera, hemos enumerado todos los elementos de \(A \cup B\) sin dejar ninguno fuera y sin repetir ninguno. Por lo tanto, hemos mostrado que \(A \cup B\) es contable.

**Conclusión:**
La unión de dos conjuntos contables sigue siendo contable. Esto es una propiedad fundamental de los conjuntos contables y es crucial para muchos resultados en teoría de conjuntos y matemáticas en general.

> Con conjunto infinito es indepedientemente un conjunto contable?

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 18**

**Consigna**

Muestre que, si \( X \) es un conjunto incontable e \( Y \) es un conjunto contable, entonces \( X-Y \) debe ser incontable.

**Respuesta**
\[ |R - N| = |R| \]
\[ |R - N| \leq |R| \]

**Usando identidad**
\[ |R| \leq |R - N| \]
usando función que no permita los naturales ej: \( n+1 \)

**Explicación detallada**
El ejercicio nos pide demostrar una propiedad sobre conjuntos incontables y contables. Comencemos por definir estos términos:

- **Conjunto contable**: Un conjunto que puede ser puesto en correspondencia uno a uno con el conjunto de números naturales. Por ejemplo, el conjunto de números enteros es contable.

- **Conjunto incontable**: Un conjunto que no puede ser puesto en correspondencia uno a uno con el conjunto de números naturales. Un ejemplo clásico es el conjunto de números reales entre 0 y 1.

La consigna nos dice que si tenemos un conjunto incontable \( X \) y le quitamos un conjunto contable \( Y \), el resultado \( X-Y \) sigue siendo incontable.

Para demostrar esto, se toma un ejemplo específico: el conjunto de números reales \( R \) como nuestro conjunto incontable \( X \) y el conjunto de números naturales \( N \) como nuestro conjunto contable \( Y \).

1. **Primera afirmación**: \( |R - N| = |R| \)
   Esta afirmación nos dice que si quitamos todos los números naturales de los números reales, la cantidad de elementos (cardinalidad) sigue siendo la misma. Esto tiene sentido porque, aunque los números naturales son infinitos, son "menos infinitos" que los números reales. Por ejemplo, entre 0 y 1 hay infinitos números decimales que no son naturales.

2. **Segunda afirmación**: \( |R - N| \leq |R| \)
   Esta es una afirmación obvia. Si quitamos elementos de un conjunto, su cardinalidad no puede aumentar; como máximo, se mantiene igual.

3. **Tercera afirmación usando identidad**: \( |R| \leq |R - N| \)
   Esta afirmación nos dice que la cardinalidad de los números reales es, como máximo, igual a la cardinalidad de los números reales sin los naturales. Esto puede parecer contradictorio, pero no lo es. Aunque estemos quitando elementos, la cantidad de elementos que quedan sigue siendo tan grande como el conjunto original.

4. **Función que no permita los naturales**: \( n+1 \)
   Esta es una forma de mostrar que podemos mapear los números naturales a otro conjunto sin incluir ningún número natural. Si a cada número natural \( n \) le sumamos 1, obtenemos otro número que no es natural. Esto refuerza la idea de que hay muchos más números reales que naturales.

En resumen, el ejercicio demuestra que si tienes un conjunto incontable y le quitas un conjunto contable, el resultado sigue siendo incontable. Es una forma de entender la "magnitud" de la infinitud de los números reales en comparación con la infinitud de los números naturales.

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

### **Ejercicio 19**

**Consigna**
Mostrar que un conjunto puede tener la misma cardinalidad que un subconjunto propio de sí mismo.

**Respuesta**
P es el conjunto de los naturales pares.
|P| = |N|
|P| ≤ |N| usando la función identidad.
|N| ≤ |P| usando una función que convierta el natural a un número par, por ejemplo: \( f(n) = n \times 2 \).


**Respuesta y explicación detallada**

1. **Concepto de Cardinalidad:** 
   - La cardinalidad de un conjunto se refiere al número de elementos que contiene. Cuando hablamos de conjuntos finitos, la cardinalidad es simplemente el número de elementos en el conjunto. Sin embargo, cuando tratamos con conjuntos infinitos, la definición de cardinalidad se vuelve más compleja.
   - Dos conjuntos tienen la misma cardinalidad si hay una correspondencia biunívoca (uno a uno) entre sus elementos. Esto significa que cada elemento de un conjunto se puede emparejar con exactamente un elemento del otro conjunto y viceversa, sin dejar ningún elemento sin emparejar en ninguno de los conjuntos.

2. **Conjuntos Infinitos y Subconjuntos Propios:**
   - Un subconjunto propio es un subconjunto que no es igual al conjunto original. Es decir, contiene menos elementos que el conjunto del que proviene.
   - Intuitivamente, podríamos pensar que un conjunto infinito siempre tiene más elementos que cualquiera de sus subconjuntos propios. Sin embargo, esto no es necesariamente cierto para todos los conjuntos infinitos.

3. **Ejemplo con Números Naturales y Números Pares:**
   - Consideremos el conjunto de todos los números naturales, que denotaremos como \( N \). Esto incluye todos los números enteros no negativos: \( N = \{0, 1, 2, 3, ...\} \).
   - Ahora, consideremos el conjunto de todos los números naturales pares, que denotaremos como \( P \). Esto incluye números como: \( P = \{0, 2, 4, 6, ...\} \).
   - Es evidente que \( P \) es un subconjunto propio de \( N \) porque \( P \) no incluye ningún número impar.

4. **Estableciendo una Correspondencia Biunívoca:**
   - A pesar de que \( P \) es un subconjunto propio de \( N \), podemos establecer una correspondencia uno a uno entre \( N \) y \( P \).
   - Para hacer esto, simplemente multiplicamos cada número natural por 2. Esta función, \( f(n) = n \times 2 \), empareja cada elemento de \( N \) con un elemento único en \( P \).
     - Por ejemplo:
       - \( f(0) = 0 \)
       - \( f(1) = 2 \)
       - \( f(2) = 4 \)
       - \( f(3) = 6 \)
       - ... y así sucesivamente.
   - Como cada número natural tiene un par correspondiente y viceversa, hemos establecido una correspondencia biunívoca entre \( N \) y \( P \).

5. **Conclusión:**
   - Aunque \( P \) es un subconjunto propio de \( N \), ambos conjuntos tienen la misma cardinalidad. Esto es un resultado sorprendente y es un ejemplo de las propiedades no intuitivas de los conjuntos infinitos.
   - En resumen, es posible que un conjunto infinito tenga la misma cardinalidad que uno de sus subconjuntos propios, como hemos demostrado con el ejemplo de los números naturales y los números pares.

<img src= 'https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif' height="20" width="100%">

