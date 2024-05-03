const Cliente = {
  init(firstName, lastName, age, email,DNI,birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.DNI = DNI;
    this.birthDate = birthDate;
  }
}

let clientes = [];

const addCliente = (firstName, lastName, age, email,DNI,birthDate) => {
  const cliente = Object.create(Cliente);
  cliente.init(firstName, lastName, age, email, DNI, birthDate);
  clientes.push(cliente);
}

var op = 0;

while (op != 3) {
  console.log(('1. Agregar cliente\n2. Mostrar clientes\n3. Salir'));
  op = parseInt(prompt('Ingrese una opción'));
  switch (op) {
    case 1:
      const firstName = prompt('Ingrese el nombre del cliente');
      const lastName = prompt('Ingrese el apellido del cliente');
      const age = parseInt(prompt('Ingrese la edad del cliente'));
      const email = prompt('Ingrese el email del cliente');
      const DNI = prompt('Ingrese el DNI del cliente');
      const birthDate = prompt('Ingrese la fecha de nacimiento del cliente');
      addCliente(firstName, lastName, age, email,DNI,birthDate);
      break;
    case 2:
      console.log(clientes);
      break;
    case 3:
      console.log('Adiós');
      break;
    default:
      console.log('Opción inválida');
      break;
  }
};

console.log(clientes);