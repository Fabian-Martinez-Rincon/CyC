<div align="center"> 

<style>
        body {
            background-color: white;
            color: black;
            transition: background-color 0.5s, color 0.5s; /* Esto añade una suave transición al cambiar los colores */
        }

        body.dark-mode {
            background-color: #232c2c;
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

<div align='center'><button onclick="toggleDarkMode()">Oscuro</button>
<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%"></div>

<p><img width="250" align='right' src="https://media.giphy.com/media/zPbnEgxsPJOJSD3qfr/giphy.gif"></p>

- Parcial 22/11/2023
- [Drive 2023](https://drive.google.com/drive/folders/1mNm_nba9il7KAgwj2YnQAqEJ9tF0PlKl)
- [Practica 1 Lógica y Cardinalidad](#práctica-1-logica-y-cardinalidad)
- [Practica 2 MT]()
- [Practica 3 Equivalencia de Modelos]()
- [Practica 4 Caracterización de Lenguajes]()
- [Practica 5 Reducibilidad]()
- [Practica 6 Notación Asintótica]()
- [Practica 7 Complejidad Temporal]()
- [Practica 8 Análisis de Algoritmos]()

<img src= 'https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7eebf649-e558-43e2-ad5f-9977dc5ff3e5
' height="10" width="100%">





# Práctica 1 Logica y Cardinalidad 



---

### **Ejercicio 1**
**Consigna:** Probar la siguiente ley distributiva \( A \lor (B \land C) = (A \lor B) \land (A \lor C) \)

**Respuesta:**
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

# Práctica 2 MT



# Práctica 3 Equivalencia de Modelos



# Práctica 4 Caracterización de Lenguajes



# Práctica 5 Reducibilidad



# Práctica 6 Notación Asintótica



# Práctica 7 Complejidad Temporal



# Práctica 8 Análisis de Algoritmos




