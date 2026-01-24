let carrito = [];

function actualizarCarrito() {
  const carritoDiv = document.getElementById("carrito-lista");
  const totalDiv = document.getElementById("carrito-total");

  carritoDiv.innerHTML = "";

  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio;

    carritoDiv.innerHTML += `
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
        <span>${item.nombre} – €${item.precio.toFixed(2)}</span>
        <button onclick="eliminarDelCarrito(${index})" style="background:#9d174d;color:white;border:none;padding:4px 8px;border-radius:4px;cursor:pointer;">X</button>
      </div>
    `;
  });

  totalDiv.innerHTML = "Total: €" + total.toFixed(2);
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}
