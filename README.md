# Entrega TPE Seminario Angular

# Datos del integrante
Nombre: Leandro Marcos
DNI: 46.094.776
Email: leandromarcos499@gmail.com
Carrera: TUDAI
Sede: Tandil

# Explicación de temática
Elegí hacer un e-commerce de productos generales al estilo Mercado Libre. La idea era tener varios productos y hacer varios componentes con el caso de una supuesta tienda real.

# Guía de uso

Ruteo
/ - home
/home - home
/product/:id - un producto en particular
/404 - no encontrado (generalmente un producto)
/** - resto de urls que no matchean con ninguna de las anteriores (muestra 404)

Lista de componentes
home-page - actua como componente padre para el home del sitio
not-found - componente encargado de mostrar que una url no match (/**) o que no se encontro el producto u otro elemento
selected-product - el componente de compra directa (usado en /products/:id) 
selection - los productos mostrados en la seccion fits with you del home
sponsored-banner - el componente que muestra las publicidad que aparecen en el home

Lista de servicios
products.ts - actua como "base de datos" local, almacenando todos los productos y dando las funcionalidades necesarias para que puedan acceder a ellos los demas componentes

# Link Stackblitz: https://stackblitz.com/~/github.com/leanmarcos/StockMaster?view=editor
# Link API MockAPI: https://6a5b7ba864f700df5bd70592.mockapi.io/api/:endpoint
