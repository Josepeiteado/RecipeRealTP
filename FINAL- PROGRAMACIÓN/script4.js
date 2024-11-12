

document.addEventListener('DOMContentLoaded', function() {
    fetch('productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(productos => {
            const contenedor = document.getElementById('productosContainer');
            productos.forEach(producto => {
                
                const card = document.createElement('div');
                card.className = 'card';
  
               
                const imagen = document.createElement('img');
                imagen.src = producto.imagen;
                imagen.alt = producto.nombre;
                card.appendChild(imagen);
  
                
                const nombre = document.createElement('h3');
                nombre.textContent = producto.nombre;
                card.appendChild(nombre);
  
                
                const descripcion = document.createElement('p');
                descripcion.textContent = producto.descripcion;
                card.appendChild(descripcion);
  
                
                
                
                contenedor.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Hubo un problema con la petición Fetch:', error);
        });
  });

  