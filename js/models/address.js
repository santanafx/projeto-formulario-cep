//default é utilizado aqui pois é a unica exportacao deste modulo
export default function Address(cep, street, number, city) {
  this.cep = cep;
  this.street = street;
  this.number = number;
  this.city = city;
}
